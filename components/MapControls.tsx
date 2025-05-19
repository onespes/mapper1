
import { motion } from "framer-motion";

interface MapControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetNorth: () => void;
}

export function MapControls({ onZoomIn, onZoomOut, onResetNorth }: MapControlsProps) {
  return (
    <motion.div 
      className="absolute right-4 top-4 flex flex-col gap-2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <button 
        onClick={onZoomIn} 
        className="flex items-center justify-center size-10 rounded-md bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors border border-gray-200"
        aria-label="Zoom in"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      
      <button 
        onClick={onZoomOut} 
        className="flex items-center justify-center size-10 rounded-md bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors border border-gray-200"
        aria-label="Zoom out"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      
      <button 
        onClick={onResetNorth} 
        className="flex items-center justify-center size-10 rounded-md bg-white/80 backdrop-blur-sm shadow-md hover:bg-white transition-colors border border-gray-200"
        aria-label="Reset to north"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>
        </svg>
      </button>
    </motion.div>
  );
}
