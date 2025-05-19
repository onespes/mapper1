
import { motion, AnimatePresence } from "framer-motion";

interface MapMarkerProps {
  lat: number;
  lng: number;
  name: string;
  image?: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export function MapMarker({ name, isActive, onClick }: MapMarkerProps) {
  const handleClick = (e: React.MouseEvent) => {
    // Prevent event from propagating to parent elements (the map)
    e.stopPropagation();
    if (onClick) {
      onClick(e);
    }
  };

  // Calculate the appropriate SVG dimensions
  // The original viewBox is 32x40, but we need to consider the full pin height
  const svgWidth = 22.4; // Same as before (28 * 32/40)
  const svgHeight = 28;

  return (
    <motion.div 
      className="relative cursor-pointer"
      onClick={handleClick}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      style={{
        // Increase container width and height to account for pin point and scaling
        width: '36px',
        height: '48px', // More height for the point of the pin
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start', // Align to top so pin point can extend downward
        marginTop: '-10px' // Offset to position the pin correctly
      }}
    >
      {/* Pin icon */}
      <motion.div 
        className="relative will-change-transform"
        animate={{ 
          scale: isActive ? 1.2 : 1,
          y: isActive ? -2 : 0
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 20 
        }}
        style={{
          width: '28px',
          height: '40px', // Match full height of SVG viewBox
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start', // Align to top
          position: 'relative'
        }}
      >
        {/* Pin shadow */}
        <div 
          className="absolute bottom-0 left-1/2 w-6 h-1.5 rounded-full bg-black/20 blur-sm will-change-transform"
          style={{
            transform: `translate3d(-50%, 5px, 0) scale(${isActive ? 1.2 : 1}, 1)`,
            opacity: isActive ? 0.3 : 0.2
          }}
        />
        
        {/* SVG Pin */}
        <svg 
          width={svgWidth} 
          height={svgHeight} 
          viewBox="0 0 32 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`drop-shadow-md ${isActive ? 'drop-shadow-lg' : ''} will-change-transform`}
          style={{ 
            display: 'block',
            // Position the SVG precisely
            position: 'absolute',
            top: '0'
          }}
        >
          <path 
            d="M16 0C7.163 0 0 7.163 0 16C0 19.968 1.24 22.928 3.2 25.6L14.4 39.2C14.784 39.712 15.36 40 16 40C16.64 40 17.216 39.712 17.6 39.2L28.8 25.6C30.76 22.928 32 19.968 32 16C32 7.163 24.837 0 16 0Z" 
            fill={isActive ? "#f3811f" : "#000000"}
          />
          
          {/* Inner circle dot */}
          <circle 
            cx="16" 
            cy="16" 
            r="6" 
            fill="white"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
