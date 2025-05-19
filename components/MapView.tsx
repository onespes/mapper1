
import { ReactNode, useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { MapControls } from './MapControls';
import { MapMarker } from './MapMarker';
import { ClusterMarker } from './ClusterMarker';
import imgImage from "figma:asset/beb01c106494662cb9fefd3c3a3ca6300f7ffd5a.png";

interface Person {
  id: string;
  name: string;
  profession: string;
  image?: string;
  lat: number;
  lng: number;
}

interface MapViewProps {
  people: Person[];
  selectedPersonId?: string;
  onSelectPerson?: (person: Person) => void;
  onClick?: () => void;
  children?: ReactNode;
}

interface Position {
  x: number;
  y: number;
}

interface Cluster {
  id: string;
  lat: number;
  lng: number;
  count: number;
  points: Person[];
}

export function MapView({ people, selectedPersonId, onSelectPerson, onClick, children }: MapViewProps) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState<Position>({ x: 0, y: 0 });
  const [expandedClusterId, setExpandedClusterId] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate clusters based on marker proximity
  const clusters = useMemo(() => {
    // Only cluster when zoomed out
    if (zoom > 0.8) {
      return [];
    }
    
    const clusters: Cluster[] = [];
    const clusterThreshold = 0.1; // Distance threshold for clustering
    const processed = new Set<string>();
    
    for (const person of people) {
      if (processed.has(person.id)) continue;
      
      const cluster: Cluster = {
        id: `cluster-${clusters.length}`,
        lat: person.lat,
        lng: person.lng,
        count: 1,
        points: [person]
      };
      
      processed.add(person.id);
      
      // Find nearby points
      for (const otherPerson of people) {
        if (processed.has(otherPerson.id)) continue;
        
        const distance = Math.sqrt(
          Math.pow(person.lat - otherPerson.lat, 2) + 
          Math.pow(person.lng - otherPerson.lng, 2)
        );
        
        if (distance < clusterThreshold) {
          cluster.count += 1;
          cluster.points.push(otherPerson);
          processed.add(otherPerson.id);
          
          // Recalculate cluster center
          cluster.lat = cluster.points.reduce((sum, p) => sum + p.lat, 0) / cluster.count;
          cluster.lng = cluster.points.reduce((sum, p) => sum + p.lng, 0) / cluster.count;
        }
      }
      
      if (cluster.count > 1) {
        clusters.push(cluster);
      }
    }
    
    return clusters;
  }, [people, zoom]);
  
  // Get standalone points (not in clusters)
  const standalonePoints = useMemo(() => {
    if (zoom > 0.8) {
      return people;
    }
    
    const pointsInClusters = new Set<string>();
    clusters.forEach(cluster => {
      cluster.points.forEach(point => {
        pointsInClusters.add(point.id);
      });
    });
    
    return people.filter(person => !pointsInClusters.has(person.id));
  }, [people, clusters, zoom]);
  
  // Show expanded cluster markers if a cluster is clicked
  const expandedClusterPoints = useMemo(() => {
    if (!expandedClusterId) return [];
    const cluster = clusters.find(c => c.id === expandedClusterId);
    return cluster ? cluster.points : [];
  }, [expandedClusterId, clusters]);
  
  // Center the map on a specific marker
  const centerOnMarker = useCallback((person: Person) => {
    if (!containerRef.current || !mapRef.current) return;
    
    // Get container dimensions
    const containerRect = mapRef.current.getBoundingClientRect();
    
    // Calculate the center position
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    
    // Calculate the target position (we need to invert the translation)
    const targetX = centerX - (person.lat * containerRect.width);
    const targetY = centerY - (person.lng * containerRect.height);
    
    // Set the new position with animation
    setPosition({
      x: targetX,
      y: targetY
    });
  }, []);
  
  // Center on the selected marker when it changes
  useEffect(() => {
    if (selectedPersonId) {
      const selectedPerson = people.find(p => p.id === selectedPersonId);
      if (selectedPerson) {
        centerOnMarker(selectedPerson);
      }
    }
  }, [selectedPersonId, people, centerOnMarker]);
  
  // Handle zoom in functionality - increased step size for more noticeable zoom
  const handleZoomIn = () => {
    setZoom(prev => {
      const newZoom = Math.min(prev + 0.5, 3); // Increased step size from 0.2 to 0.5, max from 2 to 3
      // Clear expanded cluster when zooming in
      if (newZoom > 0.8) {
        setExpandedClusterId(null);
      }
      return newZoom;
    });
  };
  
  // Handle zoom out functionality - increased step size for more noticeable zoom
  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.5, 0.5)); // Increased step size from 0.2 to 0.5
  };
  
  // Reset map to north and center position
  const handleResetNorth = () => {
    setPosition({ x: 0, y: 0 });
    setZoom(1);
    setExpandedClusterId(null);
  };

  // Start dragging the map
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  // Handle touch start for mobile devices
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setStartPosition({
      x: touch.clientX - position.x, 
      y: touch.clientY - position.y
    });
  };

  // Move the map while dragging
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - startPosition.x,
      y: e.clientY - startPosition.y
    });
  };

  // Handle touch move for mobile devices
  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - startPosition.x,
      y: touch.clientY - startPosition.y
    });
  };

  // Stop dragging the map
  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Call onClick handler if provided - this ensures clicks outside UI elements are detected
    if (!isDragging && onClick) {
      onClick();
    }
  };
  
  // Handle cluster click
  const handleClusterClick = (clusterId: string) => {
    // Toggle expansion of cluster
    setExpandedClusterId(prev => prev === clusterId ? null : clusterId);
  };
  
  // Handle map click (not during drag)
  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If there's a direct click on the map (not dragging), call the onClick handler
    if (onClick && !isDragging) {
      onClick();
    }
  };

  // Set up global event listeners for mouse/touch movements
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, startPosition]);

  return (
    <div 
      className="bg-[#e8e8e8] relative flex-grow h-full w-full overflow-hidden"
      ref={mapRef}
      data-map-container="true"
      onClick={handleMapClick}
    >
      {/* Background map image */}
      <div className="absolute inset-0 size-full">
        {/* Custom map background */}
        <div className="size-full" style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.9
        }}></div>
      </div>
      
      {/* Map markers container with pan and zoom transformations */}
      <div 
        className={`relative size-full overflow-visible ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ 
          transform: `scale(${zoom})`, 
          transition: isDragging ? 'none' : 'transform 0.3s ease'
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        data-map-interaction="true"
      >
        {/* The markers container that moves when panning */}
        <div 
          ref={containerRef}
          className="absolute size-full"
          style={{ 
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)' 
          }}
        >
          {/* Standalone markers (not in clusters) */}
          {standalonePoints.map((person) => (
            <div 
              key={person.id}
              className="absolute"
              style={{ 
                left: `${person.lat * 100}%`, 
                top: `${person.lng * 100}%`,
                transform: `translate(-50%, -100%) scale(${1/zoom})`, // Adjusted to position based on bottom of pin
                transformOrigin: 'center bottom' // Ensure scaling happens from the point of the pin
              }}
            >
              <MapMarker
                lat={person.lat}
                lng={person.lng}
                name={person.name}
                image={person.image || imgImage}
                isActive={person.id === selectedPersonId}
                onClick={(e) => {
                  // Prevent marker click from triggering map drag
                  e.stopPropagation();
                  onSelectPerson && onSelectPerson(person);
                }}
              />
            </div>
          ))}
          
          {/* Cluster markers */}
          {clusters.map((cluster) => (
            <div 
              key={cluster.id}
              className="absolute"
              style={{ 
                left: `${cluster.lat * 100}%`, 
                top: `${cluster.lng * 100}%`,
                transform: `translate(-50%, -50%) scale(${1/zoom})` // Keep centered for clusters
              }}
            >
              <ClusterMarker
                count={cluster.count}
                onClick={(e) => {
                  e.stopPropagation();
                  handleClusterClick(cluster.id);
                }}
              />
            </div>
          ))}
          
          {/* Expanded cluster markers */}
          {expandedClusterPoints.map((person) => (
            <div 
              key={`expanded-${person.id}`}
              className="absolute"
              style={{ 
                left: `${person.lat * 100}%`, 
                top: `${person.lng * 100}%`,
                transform: `translate(-50%, -100%) scale(${1/zoom})`, // Adjusted to position based on bottom of pin
                transformOrigin: 'center bottom' // Ensure scaling happens from the point of the pin
              }}
            >
              <MapMarker
                lat={person.lat}
                lng={person.lng}
                name={person.name}
                image={person.image || imgImage}
                isActive={person.id === selectedPersonId}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectPerson && onSelectPerson(person);
                  setExpandedClusterId(null);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Map controls */}
      <MapControls
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onResetNorth={handleResetNorth}
      />
      
      {children}
    </div>
  );
}
