
import { motion } from "framer-motion";
import { useState } from "react";

interface ClusterMarkerProps {
  count: number;
  onClick: (e: React.MouseEvent) => void;
}

export function ClusterMarker({ count, onClick }: ClusterMarkerProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine size based on count (larger clusters = larger marker)
  // Updated to make smallest clusters 28px to match individual markers
  const getSize = () => {
    if (count < 5) return 28; // Small clusters match individual markers
    if (count < 10) return 32; // Medium clusters slightly larger
    return 36; // Large clusters
  };
  
  const size = getSize();
  
  return (
    <motion.div 
      className="cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <motion.div 
        className="rounded-full flex items-center justify-center text-white font-bold bg-black border-2 border-white shadow-md"
        style={{ 
          width: size, 
          height: size,
        }}
        animate={{ 
          boxShadow: isHovered ? "0 0 0 4px rgba(0, 0, 0, 0.2)" : "0 2px 4px rgba(0, 0, 0, 0.2)"
        }}
      >
        <div className="flex items-center justify-center">
          <span className="text-lg">{count}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
