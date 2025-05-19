
import { useState, useEffect } from 'react';

interface MapHelpOverlayProps {
  timeout?: number;
}

export function MapHelpOverlay({ timeout = 3000 }: MapHelpOverlayProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide the overlay after the specified timeout
    const timer = setTimeout(() => {
      setVisible(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);

  if (!visible) return null;

  return (
    <div className="absolute inset-x-0 top-20 z-10 flex justify-center pointer-events-none">
      <div className="bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 6l-6 6 6 6"></path>
          <path d="M19 6l-6 6 6 6"></path>
        </svg>
        <span>Drag to pan the map</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 18l6-6-6-6"></path>
          <path d="M5 18l6-6-6-6"></path>
        </svg>
      </div>
    </div>
  );
}
