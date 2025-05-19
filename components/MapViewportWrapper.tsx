
import React, { ReactNode, useEffect, useState } from 'react';

interface MapViewportWrapperProps {
  children: ReactNode;
}

export function MapViewportWrapper({ children }: MapViewportWrapperProps) {
  const [viewportHeight, setViewportHeight] = useState('100vh');
  const [isIOSDevice, setIsIOSDevice] = useState(false);
  
  useEffect(() => {
    // Function to update viewport height to handle mobile browser chrome
    const updateViewportHeight = () => {
      // Get the actual viewport height
      const vh = window.innerHeight;
      setViewportHeight(`${vh}px`);
    };
    
    // Detect iOS devices for special handling
    const detectIOSDevice = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const isIOS = /iphone|ipad|ipod/.test(userAgent);
      setIsIOSDevice(isIOS);
    };
    
    // Initialize
    detectIOSDevice();
    updateViewportHeight();
    
    // Update on resize and orientation change
    window.addEventListener('resize', updateViewportHeight);
    window.addEventListener('orientationchange', updateViewportHeight);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
      window.removeEventListener('orientationchange', updateViewportHeight);
    };
  }, []);
  
  return (
    <div
      className="relative w-full h-full"
      style={{
        height: viewportHeight,
        // Use safe-area-inset if available (iOS)
        paddingTop: isIOSDevice ? 'env(safe-area-inset-top, 0px)' : '0',
        paddingBottom: isIOSDevice ? 'env(safe-area-inset-bottom, 0px)' : '0',
        paddingLeft: isIOSDevice ? 'env(safe-area-inset-left, 0px)' : '0',
        paddingRight: isIOSDevice ? 'env(safe-area-inset-right, 0px)' : '0',
        // Force hardware acceleration
        transform: 'translateZ(0)',
        // Make sure content doesn't overflow
        overflow: 'hidden',
        // Establish a stacking context
        zIndex: 0,
        // Prevent iOS address bar from hiding on scroll
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {children}
    </div>
  );
}
