
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Position {
  x: number;
  y: number;
}

interface MiniMapProps {
  mapZoom: number;
  mapPosition: Position;
  onViewportChange: (position: Position) => void;
  people: Array<{ lat: number; lng: number; id: string }>;
  selectedPersonId?: string;
}

export function MiniMap({ 
  mapZoom, 
  mapPosition, 
  onViewportChange, 
  people,
  selectedPersonId 
}: MiniMapProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startDragPosition, setStartDragPosition] = useState<Position>({ x: 0, y: 0 });
  
  // Calculate the size and position of the viewport indicator based on zoom and position
  const viewportWidth = 100 / mapZoom;
  const viewportHeight = 100 / mapZoom;
  
  // Calculate viewport position as percentage of the map
  const viewportX = 50 - (mapPosition.x / 10) - (viewportWidth / 2);
  const viewportY = 50 - (mapPosition.y / 10) - (viewportHeight / 2);
  
  // Constrain values to keep viewport inside minimap
  const constrainedX = Math.max(0, Math.min(100 - viewportWidth, viewportX));
  const constrainedY = Math.max(0, Math.min(100 - viewportHeight, viewportY));
  
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartDragPosition({ x: e.clientX, y: e.clientY });
    e.preventDefault();
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    // Calculate delta movement in percentage of minimap
    const deltaX = ((e.clientX - startDragPosition.x) / 120) * 100;
    const deltaY = ((e.clientY - startDragPosition.y) / 120) * 100;
    
    // Convert to map position coordinates
    const mapDeltaX = -deltaX * 10; 
    const mapDeltaY = -deltaY * 10;
    
    onViewportChange({ 
      x: mapPosition.x + mapDeltaX, 
      y: mapPosition.y + mapDeltaY 
    });
    
    setStartDragPosition({ x: e.clientX, y: e.clientY });
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startDragPosition]);

  return (
    <motion.div 
      className="absolute bottom-4 right-4 w-[120px] h-[120px] rounded-md overflow-hidden bg-white/80 backdrop-blur-sm shadow-md border border-gray-300 p-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      {/* Map background */}
      <div 
        className="relative w-full h-full rounded bg-[#e6e6e6]"
      >
        {/* Markers on mini map */}
        {people.map((person) => (
          <div 
            key={person.id}
            className={`absolute w-1.5 h-1.5 rounded-full ${
              person.id === selectedPersonId ? 'bg-[#f3811f]' : 'bg-black'
            }`}
            style={{ 
              left: `${person.lat * 100}%`, 
              top: `${person.lng * 100}%`,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
        
        {/* Viewport indicator */}
        <motion.div
          className="absolute border-2 border-[#f3811f] rounded bg-[#f3811f]/10"
          style={{
            width: `${viewportWidth}%`,
            height: `${viewportHeight}%`,
            left: `${constrainedX}%`,
            top: `${constrainedY}%`,
            cursor: 'grab'
          }}
          animate={{
            borderColor: isDragging ? '#d16c19' : '#f3811f'
          }}
          onMouseDown={handleMouseDown}
        />
      </div>
    </motion.div>
  );
}
