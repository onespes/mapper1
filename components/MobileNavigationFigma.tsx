
import { useRef } from 'react';
import { motion } from 'framer-motion';
import svgPaths from "../imports/svg-j48jlcr45p";

interface MobileNavigationProps {
  onToggleFilter: () => void;
  onToggleSearch: () => void;
  onToggleLocation: () => void;
}

// Individual frame components from the Figma import
function FilterButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      className="relative shrink-0 size-10 cursor-pointer shadow-lg bg-white rounded-full"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="Frame 4">
          <rect fill="var(--fill-0, white)" height="40" rx="20" width="40" />
          <path
            d="M10.5 14H29.5"
            id="Vector 1"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3" // Increased from 2 to 3
          />
          <path
            d="M13.5 20H26.5"
            id="Vector 2"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3" // Increased from 2 to 3
          />
          <path
            d="M16.5 26H23.5"
            id="Vector 3"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3" // Increased from 2 to 3
          />
        </g>
      </svg>
    </motion.div>
  );
}

function LocationButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      className="relative shrink-0 size-10 cursor-pointer shadow-lg bg-white rounded-full"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="Frame 5">
          <rect fill="var(--fill-0, white)" height="40" rx="20" width="40" />
          <path
            d={svgPaths.p2f3d8800}
            id="Rectangle 8"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3" // Increased from 2 to 3
          />
          <circle
            cx="20"
            cy="18.5"
            id="Ellipse 1"
            r="4"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5" // Increased from 1.5 to 2.5
          />
        </g>
      </svg>
    </motion.div>
  );
}

export function MobileNavigationFigma({ 
  onToggleFilter, 
  onToggleSearch, 
  onToggleLocation 
}: MobileNavigationProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="absolute top-4 left-4 z-20 flex flex-col gap-3"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <FilterButton onClick={onToggleFilter} />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <LocationButton onClick={onToggleLocation} />
      </motion.div>
    </motion.div>
  );
}
