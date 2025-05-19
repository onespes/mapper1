
import { useEffect, useState, useRef } from 'react';
import { useScrollContext } from './ScrollContext';

interface MobileToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileToggle({ isOpen, onClick }: MobileToggleProps) {
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchEndY, setTouchEndY] = useState<number | null>(null);
  const ignoreNextSwipe = useRef(false);
  const sidebarRef = useRef<HTMLElement | null>(null);
  const { isAtTop } = useScrollContext();
  
  // Find and store a reference to the sidebar for scroll checking
  useEffect(() => {
    sidebarRef.current = document.querySelector('[data-sidebar-container="true"]');
  }, []);
  
  // Handle swipe gestures for opening/closing the sidebar
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      // Ignore touch events that originate from the map container
      if (e.target instanceof Element) {
        const mapContainer = document.querySelector('[data-map-container="true"]');
        if (mapContainer && mapContainer.contains(e.target)) {
          ignoreNextSwipe.current = true;
          return;
        }
        
        // Also check if the touch is within the sidebar content (not the handle)
        const sidebarContent = document.querySelector('[data-sidebar-content="true"]');
        if (sidebarContent && sidebarContent.contains(e.target)) {
          // We'll track the touch but we won't always act on it
          setTouchStartY(e.touches[0].clientY);
          return;
        }
      }
      
      setTouchStartY(e.touches[0].clientY);
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (ignoreNextSwipe.current) {
        ignoreNextSwipe.current = false;
        return;
      }
      
      setTouchEndY(e.changedTouches[0].clientY);
    };
    
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);
  
  // Process the swipe and determine if we should open or close the sidebar
  useEffect(() => {
    if (touchStartY && touchEndY) {
      const distance = touchStartY - touchEndY;
      const isSignificantSwipe = Math.abs(distance) > 50;
      
      if (isSignificantSwipe) {
        if (distance > 0 && !isOpen) {
          // Swipe up, open the sidebar
          onClick();
        } else if (distance < 0 && isOpen) {
          // Only close on downward swipe if we're at the top of the list
          // or the swipe started on the handle
          const handleElement = document.querySelector('[data-sidebar-handle="true"]');
          const touchTarget = document.elementFromPoint(window.innerWidth / 2, touchStartY!);
          const isOnHandle = handleElement && (handleElement === touchTarget || handleElement.contains(touchTarget!));
          
          if (isAtTop || isOnHandle) {
            // Swipe down, close the sidebar only if at top or on handle
            onClick();
          }
        }
      }
      
      setTouchStartY(null);
      setTouchEndY(null);
    }
  }, [touchStartY, touchEndY, isOpen, onClick, isAtTop]);

  return (
    <button
      className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-20 bg-background text-foreground rounded-full px-6 py-3 shadow-lg flex items-center gap-2"
      onClick={onClick}
      aria-label={isOpen ? 'Hide results' : 'Show results'}
    >
      <span className="font-medium">{isOpen ? 'Hide List' : 'View List'}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3" // Increased from 2 to 3
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={isOpen ? "m6 9 6 6 6-6" : "m18 15-6-6-6 6"}/>
      </svg>
    </button>
  );
}
