
import { motion } from 'framer-motion';
import svgPaths from "../imports/svg-j48jlcr45p";

interface DesktopNavigationControlsProps {
  onToggleFilter: () => void;
  onToggleSearch: () => void;
  onToggleLocation: () => void;
}

// Individual button components from the mobile navigation
function FilterButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      className="relative shrink-0 size-9 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Filter"
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
            strokeWidth="2"
          />
          <path
            d="M13.5 20H26.5"
            id="Vector 2"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M16.5 26H23.5"
            id="Vector 3"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </motion.div>
  );
}

function LocationButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      className="relative shrink-0 size-9 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Location"
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
            strokeWidth="2"
          />
          <circle
            cx="20"
            cy="18.5"
            id="Ellipse 1"
            r="4"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </motion.div>
  );
}

function SearchButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.div 
      className="relative shrink-0 size-9 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title="Search"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 40 40"
      >
        <g id="Frame 6">
          <rect fill="var(--fill-0, white)" height="40" rx="20" width="40" />
          <path
            d={svgPaths.p269b3800}
            id="Rectangle 8"
            stroke="var(--stroke-0, black)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </motion.div>
  );
}

export function DesktopNavigationControls({ 
  onToggleFilter, 
  onToggleSearch, 
  onToggleLocation 
}: DesktopNavigationControlsProps) {
  // Animation variants for horizontal layout
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
      className="flex flex-row gap-2 justify-end items-center px-4 py-2 border-b"
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
      
      <motion.div variants={itemVariants}>
        <SearchButton onClick={onToggleSearch} />
      </motion.div>
    </motion.div>
  );
}
