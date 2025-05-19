
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MapView } from './components/MapView';
import { MobileToggle } from './components/MobileToggle';
import { MiniMobileToggle } from './components/MiniMobileToggle';
import { MapHelpOverlay } from './components/MapHelpOverlay';
import { ScrollProvider } from './components/ScrollContext';
import { MobileNavigationFigma } from './components/MobileNavigationFigma';
import { MapViewportWrapper } from './components/MapViewportWrapper';
import { MobileFilterPopup } from './components/MobileFilterPopup';
import './styles/scrollbar.css';
import imgSearchImage from "figma:asset/bffbb056e652d04561d683e49422ee7897a870ca.png";
import imgSearchImage1 from "figma:asset/d2325c792f665c5b46d23894cfdf02943e62cdd2.png";
import imgSearchImage2 from "figma:asset/672637374713fd5944290efe17961b911df9fd96.png";
import imgSearchImage3 from "figma:asset/0b671739ab3dc5834927df75020aad1111648318.png";
import imgSearchImage4 from "figma:asset/6a4c558395512d81d3e11cee5c9c98def6c3e8a1.png";
import imgSearchImage5 from "figma:asset/e32976628a002f5fee9735c4b7ea0c2925b2e88b.png";

// Mock data for people (expanded to 20 entries) with updated categories
const peopleData = [
  {
    id: '1',
    name: 'Dominique Pitts',
    profession: 'Food, Café Owner, Farm-to-Table Restaurant',
    image: imgSearchImage,
    lat: 0.45, 
    lng: 0.35
  },
  {
    id: '2',
    name: 'James Stewart',
    profession: 'Retail, Boutique Shop, Fashion Retail',
    image: imgSearchImage1,
    lat: 0.65, 
    lng: 0.45
  },
  {
    id: '3',
    name: 'Dakota Kochen',
    profession: 'Health, Spa, Wellness Center',
    image: imgSearchImage2,
    lat: 0.55, 
    lng: 0.3
  },
  {
    id: '4',
    name: 'Chip Alcon',
    profession: 'Fun, Theatre, Performance Art',
    image: imgSearchImage3,
    lat: 0.7, 
    lng: 0.55
  },
  {
    id: '5',
    name: 'Cameron Hoiland',
    profession: 'Services, Tech Repair, Computer Services',
    image: imgSearchImage4,
    lat: 0.6, 
    lng: 0.4
  },
  {
    id: '6',
    name: 'Mario Vega',
    profession: 'Travel, Tour Guide, Adventure Tourism',
    image: imgSearchImage5,
    lat: 0.5, 
    lng: 0.5
  },
  {
    id: '7',
    name: 'Sophia Rodriguez',
    profession: 'Hobby, Art Studio, Pottery Workshop',
    image: imgSearchImage,
    lat: 0.3, 
    lng: 0.25
  },
  {
    id: '8',
    name: 'Liam Chen',
    profession: 'Family, Tutoring Center, Educational Services',
    image: imgSearchImage1,
    lat: 0.75, 
    lng: 0.35
  },
  {
    id: '9',
    name: 'Olivia Johnson',
    profession: 'Food, Bakery, Artisanal Bread',
    image: imgSearchImage2,
    lat: 0.4,
    lng: 0.6
  },
  {
    id: '10',
    name: 'Ethan Patel',
    profession: 'Retail, Bookstore, Independent Retailer',
    image: imgSearchImage3,
    lat: 0.6, 
    lng: 0.65
  },
  {
    id: '11',
    name: 'Ava Williams',
    profession: 'Health & Beauty, Salon, Hair Styling',
    image: imgSearchImage4,
    lat: 0.25, 
    lng: 0.45
  },
  {
    id: '12',
    name: 'Noah Garcia',
    profession: 'Fun, Game Center, Arcade',
    image: imgSearchImage5,
    lat: 0.8, 
    lng: 0.2
  },
  {
    id: '13',
    name: 'Emma Miller',
    profession: 'Services, Financial Advisor, Tax Services',
    image: imgSearchImage,
    lat: 0.35, 
    lng: 0.7
  },
  {
    id: '14',
    name: 'Jackson Lee',
    profession: 'Travel, Bed & Breakfast, Accommodation',
    image: imgSearchImage1,
    lat: 0.7, 
    lng: 0.75
  },
  {
    id: '15',
    name: 'Isabella Martinez',
    profession: 'Creative & Hobby, Craft Supply Store, DIY Materials',
    image: imgSearchImage2,
    lat: 0.2, 
    lng: 0.6
  },
  {
    id: '16',
    name: 'Lucas Thompson',
    profession: 'Family & Education, Daycare, Childcare Center',
    image: imgSearchImage3,
    lat: 0.55, 
    lng: 0.8
  },
  {
    id: '17',
    name: 'Mia Wilson',
    profession: 'Food & Dining, Food Truck, Street Food',
    image: imgSearchImage4,
    lat: 0.85, 
    lng: 0.6
  },
  {
    id: '18',
    name: 'Alexander Davis',
    profession: 'Retail, Electronics Store, Tech Products',
    image: imgSearchImage5,
    lat: 0.3, 
    lng: 0.85
  },
  {
    id: '19',
    name: 'Charlotte Moore',
    profession: 'Health & Beauty, Fitness Studio, Yoga Center',
    image: imgSearchImage,
    lat: 0.9, 
    lng: 0.45
  },
  {
    id: '20',
    name: 'Henry Taylor',
    profession: 'Fun, Cinema, Movie Theater',
    image: imgSearchImage1,
    lat: 0.15, 
    lng: 0.4
  }
];

export default function App() {
  const [selectedPersonId, setSelectedPersonId] = useState<string | undefined>();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isListMinimized, setIsListMinimized] = useState(false);
  const [sortedPeople, setSortedPeople] = useState([...peopleData]);
  const [selectionSource, setSelectionSource] = useState<'list' | 'map' | null>(null);
  const [isAtTopOfList, setIsAtTopOfList] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const mapInteractionRef = useRef<boolean>(false);
  const touchStartY = useRef<number | null>(null);
  const touchStartTime = useRef<number | null>(null);
  const sidebarContentRef = useRef<HTMLDivElement>(null);
  const handleSwipeRef = useRef<boolean>(false); // Track if we're handling a swipe on the handle
  const locationSearchRef = useRef<HTMLDivElement>(null); // Ref for the location search component
  
  // Function to fully disable all touch interactions except normal scrolling
  const disableTouchOnElement = (element: HTMLElement | null) => {
    if (!element) return;
    
    // Apply native touch-action CSS to only allow scroll
    element.style.touchAction = 'pan-y';
    
    // Prevent any touch events from doing anything other than scrolling
    const preventTouchHide = (e: TouchEvent) => {
      // If we're not handling a swipe on the handle, stop all other interactions
      if (!handleSwipeRef.current) {
        e.stopPropagation(); // Stop event from bubbling up
      }
    };
    
    // Apply handlers to prevent touch events from bubbling up
    element.addEventListener('touchstart', preventTouchHide, { passive: false });
    element.addEventListener('touchmove', preventTouchHide, { passive: false });
    element.addEventListener('touchend', preventTouchHide, { passive: false });
    
    return () => {
      // Cleanup listeners if component unmounts
      element.removeEventListener('touchstart', preventTouchHide);
      element.removeEventListener('touchmove', preventTouchHide);
      element.removeEventListener('touchend', preventTouchHide);
    };
  };

  // Handle clicks outside location search to close it
  useEffect(() => {
    if (!showLocation) return;

    const handleOutsideClick = (e: MouseEvent) => {
      // If location search is showing and click is outside the location search area
      if (
        showLocation && 
        locationSearchRef.current && 
        !locationSearchRef.current.contains(e.target as Node)
      ) {
        setShowLocation(false);
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener('mousedown', handleOutsideClick);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showLocation]);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Set viewport meta tag for mobile
    if (typeof document !== 'undefined') {
      const existingMeta = document.querySelector('meta[name="viewport"]');
      if (!existingMeta) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
        document.head.appendChild(meta);
      } else {
        existingMeta.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover');
      }
    }
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Disable touch interactions that cause hiding/minimizing on the content area
  useEffect(() => {
    if (isMobile && sidebarContentRef.current) {
      return disableTouchOnElement(sidebarContentRef.current);
    }
  }, [isMobile, sidebarContentRef.current]);

  // Reset minimized state when mobile state changes or sidebar closes
  useEffect(() => {
    if (!isMobile || !isMobileOpen) {
      setIsListMinimized(false);
    }
  }, [isMobile, isMobileOpen]);

  // Reorder people array to put selected person first when minimized in mobile
  useEffect(() => {
    if (selectedPersonId && isListMinimized && isMobile) {
      // When in mobile and minimized, put the selected person at the top
      const newPeopleOrder = [...peopleData];
      const selectedIndex = newPeopleOrder.findIndex(p => p.id === selectedPersonId);
      
      if (selectedIndex > 0) {
        // Move the selected person to the top of the array
        const selectedPerson = newPeopleOrder.splice(selectedIndex, 1)[0];
        newPeopleOrder.unshift(selectedPerson);
      }
      
      setSortedPeople(newPeopleOrder);
    } else {
      // Use original order when not minimized or no selection
      setSortedPeople([...peopleData]);
    }
  }, [selectedPersonId, isListMinimized, isMobile]);

  // Apply filtering to sorted people based on active filters
  const filteredPeople = sortedPeople.filter(person => {
    if (activeFilters.length === 0) {
      return true;
    }
    return activeFilters.some(filter => 
      person.profession.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const selectedPerson = peopleData.find(p => p.id === selectedPersonId);

  // This handles selection from the list view
  const handleSelectPerson = (person) => {
    setSelectedPersonId(person.id);
    setSelectionSource('list');
    
    if (isMobile) {
      // Always show the list when selecting a person
      setIsMobileOpen(true);
      
      // Minimize the list when selecting a person on mobile
      setIsListMinimized(true);
      
      // Make sure the selected item is visible at the top by scrolling to it
      if (sidebarContentRef.current) {
        sidebarContentRef.current.scrollTop = 0;
      }
    }
  };

  // This handles selection from the map view
  const handleMapSelectPerson = (person) => {
    setSelectedPersonId(person.id);
    setSelectionSource('map');
    
    // Set a flag to indicate a map interaction is in progress
    mapInteractionRef.current = true;
    
    // For map selections on mobile, we want to:
    // 1. Show the minimized list if it's currently closed
    // 2. Keep the list minimized if it's already minimized
    // 3. Keep the list in its current state if it's already open and not minimized
    if (isMobile) {
      if (!isMobileOpen) {
        setIsMobileOpen(true);
        setIsListMinimized(true);
      } else if (isListMinimized) {
        // Keep it minimized, just update the content
        // Scroll to top to show selected item
        if (sidebarContentRef.current) {
          sidebarContentRef.current.scrollTop = 0;
        }
      } else {
        // List is open but not minimized - leave it in current state
      }
    }
    
    // Clear the map interaction flag after a brief delay
    setTimeout(() => {
      mapInteractionRef.current = false;
    }, 300);
  };

  const toggleMobileList = () => {
    // Skip toggle if we're in the middle of a map interaction
    if (mapInteractionRef.current) return;
    
    if (isMobileOpen && selectedPersonId && isListMinimized) {
      // If minimized and a person is selected, restore to full size
      setIsListMinimized(false);
    } else {
      // Otherwise toggle normal open/close
      setIsMobileOpen(!isMobileOpen);
    }
  };

  const handleExpandList = () => {
    setIsListMinimized(false);
  };

  const handleCloseList = () => {
    setIsMobileOpen(false);
  };

  // Handle scroll position check for top detection and scrollbar visibility
  const handleScroll = (e) => {
    const target = e.target;
    
    // Get the position of the first card relative to the scroll container
    const sidebarContent = document.querySelector('[data-sidebar-content="true"]');
    let firstCardTop = -1;
    if (sidebarContent) {
      const firstCard = sidebarContent.querySelector('.profile-card');
      if (firstCard) {
        // Calculate top position of first card relative to scroll container
        const containerRect = sidebarContent.getBoundingClientRect();
        const cardRect = firstCard.getBoundingClientRect();
        firstCardTop = cardRect.top - containerRect.top;
      }
    }
    
    // Enhanced at-top detection that checks for scroll position AND first card visibility
    // We consider "at top" to be when the first card is at or very near the top of the viewport
    const isAtTop = target.scrollTop <= 2 || (firstCardTop >= 0 && firstCardTop <= 20);
    
    // Update the at-top state
    setIsAtTopOfList(isAtTop);
    
    // Critical: If we're not at the top anymore, immediately reset swipe down detection
    // This ensures we can never trigger the hide/minimize while scrolling content
    if (!isAtTop) {
      handleSwipeRef.current = false;
    }
    
    // Add scrolling class for CSS to detect active scrolling
    target.classList.add('scrolling');
    
    // Remove scrolling class after scrolling stops
    clearTimeout(target.scrollTimer);
    target.scrollTimer = setTimeout(() => {
      target.classList.remove('scrolling');
    }, 1000);
  };

  // Handle drag handle touch start
  const handleHandleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartTime.current = Date.now();
    handleSwipeRef.current = true; // Mark that we're handling a swipe on the handle
  };

  // Handle drag handle touch move
  const handleHandleTouchMove = (e) => {
    if (touchStartY.current === null || !handleSwipeRef.current) return;
    
    const touchY = e.touches[0].clientY;
    const deltaY = touchY - touchStartY.current;
    
    // Only allow swiping on the handle if the delta is significant
    if (deltaY > 20) {
      // Prevent default to prevent "bounce" effect when swiping the handle
      e.preventDefault();
      
      console.log("Swiping down on handle - will allow hiding");
      // We'll process this in the touch end handler
    }
  };

  // Handle drag handle touch end
  const handleHandleTouchEnd = () => {
    if (!handleSwipeRef.current || touchStartY.current === null) {
      // Reset and return if we're not handling a handle swipe
      handleSwipeRef.current = false;
      touchStartY.current = null;
      touchStartTime.current = null;
      return;
    }
    
    const touchEndY = event?.changedTouches?.[0]?.clientY || 0;
    const deltaY = touchEndY - (touchStartY.current || 0);
    
    // Only if we detected a significant swipe down on the handle and the list is open
    if (deltaY > 30 && isMobileOpen) {
      console.log("Touch end with swipe down on handle, closing");
      
      // For swipe down on handle, just close the sidebar
      setIsMobileOpen(false);
    }
    
    // Always reset touch tracking
    handleSwipeRef.current = false;
    touchStartY.current = null;
    touchStartTime.current = null;
  };

  // Reset touch tracking on touch cancel
  const handleHandleTouchCancel = () => {
    handleSwipeRef.current = false;
    touchStartY.current = null;
    touchStartTime.current = null;
  };

  // Handler for content area touch - explicitly prevent list hiding
  const handleContentTouch = (e) => {
    // If this is a touch on the content (not the handle), prevent hide behavior
    if (!handleSwipeRef.current) {
      // Stop propagation to prevent any parent handlers from catching this
      e.stopPropagation();
    }
  };

  // Mobile navigation handlers
  const toggleFilter = () => {
    // Toggle filter popup without affecting the list view on mobile
    if (isMobile) {
      setShowFilter(prev => !prev);
    } else {
      // On desktop, we don't need to toggle showFilter anymore since filters are always visible
      // Just ensure the sidebar is open
      if (!isMobileOpen) {
        setIsMobileOpen(true);
      }
    }
  };

  const toggleSearch = () => {
    setShowSearch(prev => !prev);
    // If we're opening the search, open the list too
    if (!showSearch && isMobile) {
      setIsMobileOpen(true);
    }
  };

  const toggleLocation = () => {
    setShowLocation(prev => !prev);
    // For location, we might want to center the map on user's position
    // This is just a placeholder for now
    console.log("Location toggled");
  };
  
  // For mobile navigation we still use the toggle function
  const handleMobileLocationToggle = () => {
    toggleLocation();
  };

  // Handler for filter changes from the mobile popup
  const handleFilterChange = (newFilters: string[]) => {
    setActiveFilters(newFilters);
  };
  
  // Handler for location search
  const handleLocationSearch = (locationQuery: string) => {
    // This would typically call a geocoding service
    console.log("Searching for location:", locationQuery);
    
    // For demo purposes, we'll just log and trigger the location toggle
    setShowLocation(true);
  };

  // Handler for map clicks
  const handleMapClick = () => {
    // Close location search when clicking on the map
    if (showLocation) {
      setShowLocation(false);
    }
  };

  return (
    <ScrollProvider>
      <div className={`fixed inset-0 flex flex-col overflow-hidden ${isMobile ? 'h-[100dvh]' : 'h-screen'}`}>
        {/* Only show normal header on desktop */}
        {!isMobile && (
          <div ref={locationSearchRef}>
            <Header 
              isMobile={isMobile}
              onToggleFilter={toggleFilter}
              onToggleSearch={toggleSearch}
              onToggleLocation={handleLocationSearch}
              selectedFilters={activeFilters}
              onFilterChange={handleFilterChange}
            />
          </div>
        )}
        
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
          {/* Mobile navigation in the top left */}
          {isMobile && (
            <MobileNavigationFigma 
              onToggleFilter={toggleFilter}
              onToggleSearch={toggleSearch}
              onToggleLocation={handleMobileLocationToggle}
            />
          )}
          
          {/* Mobile filter popup - only visible on mobile when filter is active */}
          {isMobile && (
            <MobileFilterPopup
              isOpen={showFilter}
              onClose={() => setShowFilter(false)}
              selectedFilters={activeFilters}
              onChange={handleFilterChange}
              anchorPosition={{ top: 64, left: 60 }}
            />
          )}
          
          {/* Sidebar - Fixed on mobile, normal flow on desktop */}
          <div 
            className={`
              ${isMobile 
                ? 'fixed inset-x-0 bottom-0 z-10 transition-all duration-300 ease-out rounded-t-xl shadow-lg bg-background' 
                : 'relative w-[360px] h-full border-r border-gray-200 bg-sidebar'}
              ${(isMobile && !isMobileOpen) ? 'translate-y-full' : ''}
              ${(isMobile && isMobileOpen && isListMinimized) ? 'h-[25vh]' : (isMobile ? 'h-[70vh]' : '')}
            `}
            style={{
              overscrollBehavior: 'contain',
              WebkitOverflowScrolling: 'touch',
              transform: isMobile ? 'translateZ(0)' : '', // Force hardware acceleration on mobile
              width: isMobile ? '100%' : '360px', // Full width on mobile, fixed width on desktop
              maxWidth: isMobile ? '100%' : '360px', // Control max width
              willChange: isMobile ? 'transform, height' : 'auto', // Optimize animations
              backfaceVisibility: 'hidden', // Fix rendering on iOS
              flexShrink: 0 // Don't shrink sidebar on desktop
            }}
            data-sidebar-container="true"
          >
            {/* Handle for dragging mobile sidebar - ONLY this element can trigger hide/minimize */}
            {isMobile && (
              <div 
                className="h-6 bg-background flex items-center justify-center"
                onClick={toggleMobileList}
                data-sidebar-handle="true"
                style={{
                  cursor: 'grab',
                  width: '100%',
                  position: 'relative',
                  zIndex: 1,
                  borderTopLeftRadius: 'inherit',
                  borderTopRightRadius: 'inherit',
                  WebkitTapHighlightColor: 'transparent', // Prevent tap highlight on iOS
                  touchAction: 'none' // Disable browser handling of all panning and zooming gestures
                }}
                onTouchStart={handleHandleTouchStart}
                onTouchMove={handleHandleTouchMove}
                onTouchEnd={handleHandleTouchEnd}
                onTouchCancel={handleHandleTouchCancel}
              >
                <div 
                  className="w-12 h-1 bg-muted rounded-full"
                  style={{
                    margin: '0 auto', // Center horizontally
                    opacity: 0.8 // Make slightly more visible
                  }}
                ></div>
              </div>
            )}
            
            {/* Sidebar component - with flex-1 and proper mobile height setup */}
            <div 
              ref={sidebarContentRef}
              className={`${isMobile ? 'flex flex-col h-[calc(100%-24px)]' : 'h-full'} overflow-auto custom-scrollbar no-swipe-hide`}
              data-sidebar-content="true"
              onScroll={handleScroll}
              onTouchStart={handleContentTouch}
              onTouchMove={handleContentTouch}
              onTouchEnd={handleContentTouch}
              style={{
                overscrollBehavior: 'contain', // Prevent scroll chaining
                WebkitOverflowScrolling: 'touch', // Improve iOS scrolling
                touchAction: 'pan-y', // Only allow vertical scrolling, no gestures
                msOverflowStyle: 'none', // Hide scrollbar in IE/Edge
                scrollbarWidth: 'none', // Hide scrollbar in Firefox
              }}
            >
              <Sidebar 
                people={filteredPeople} 
                resultsCount={filteredPeople.length}
                selectedPersonId={selectedPersonId}
                onSelect={handleSelectPerson}
                className="flex-1"
                isMinimized={isListMinimized}
                showFilter={isMobile && showFilter} // Only needed for mobile filtering
                showSearch={showSearch}
                isMobile={isMobile}
                onToggleFilter={toggleFilter}
                onToggleSearch={toggleSearch}
                onToggleLocation={toggleLocation}
                filters={activeFilters}
                onFilterChange={handleFilterChange}
              />
            </div>
          
            {/* Mini controls for minimized list */}
            {isMobile && isMobileOpen && isListMinimized && (
              <MiniMobileToggle
                isMinimized={isListMinimized}
                onExpand={handleExpandList}
                onClose={handleCloseList}
              />
            )}
          </div>
          
          {/* Map View - Takes remaining space using the viewport wrapper */}
          <div className={`absolute inset-0 ${isMobile ? 'h-[100dvh] w-screen' : 'relative flex-grow h-full'} md:block`}>
            {isMobile ? (
              <MapViewportWrapper>
                <MapView 
                  people={filteredPeople} // Use filtered people for map markers
                  selectedPersonId={selectedPersonId}
                  onSelectPerson={handleMapSelectPerson}
                  onClick={handleMapClick} // Add click handler to close location search
                >
                  <MapHelpOverlay timeout={5000} />
                </MapView>
              </MapViewportWrapper>
            ) : (
              <MapView 
                people={filteredPeople} // Use filtered people for map markers
                selectedPersonId={selectedPersonId}
                onSelectPerson={handleMapSelectPerson}
                onClick={handleMapClick} // Add click handler to close location search
              >
                <MapHelpOverlay timeout={5000} />
              </MapView>
            )}
          </div>
          
          {/* Mobile toggle button - only show when list is fully closed or we don't have a selection */}
          <AnimatePresence>
            {isMobile && (!isMobileOpen || !isListMinimized) && (
              <MobileToggle 
                isOpen={isMobileOpen} 
                onClick={toggleMobileList}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </ScrollProvider>
  );
}
