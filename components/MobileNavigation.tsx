
import { useState } from 'react';
import Frame7 from "../imports/Frame7";
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MapPin, X } from 'lucide-react';

interface MobileNavigationProps {
  onToggleFilter: () => void;
  onToggleSearch: () => void;
  onToggleLocation: () => void;
}

export function MobileNavigation({ 
  onToggleFilter, 
  onToggleSearch, 
  onToggleLocation 
}: MobileNavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="absolute top-4 left-4 z-20">
      {isExpanded ? (
        <motion.div 
          className="flex flex-col gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {/* Close button */}
          <motion.button
            className="bg-white size-10 rounded-full shadow-md flex items-center justify-center"
            onClick={toggleExpanded}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <X size={18} />
          </motion.button>
          
          {/* Filter button */}
          <motion.button
            className="bg-white size-10 rounded-full shadow-md flex items-center justify-center"
            onClick={() => {
              onToggleFilter();
              toggleExpanded();
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter size={18} />
          </motion.button>
          
          {/* Location button */}
          <motion.button
            className="bg-white size-10 rounded-full shadow-md flex items-center justify-center"
            onClick={() => {
              onToggleLocation();
              toggleExpanded();
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MapPin size={18} />
          </motion.button>
          
          {/* Search button */}
          <motion.button
            className="bg-white size-10 rounded-full shadow-md flex items-center justify-center"
            onClick={() => {
              onToggleSearch();
              toggleExpanded();
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search size={18} />
          </motion.button>
        </motion.div>
      ) : (
        <motion.button
          className="bg-white size-10 rounded-full shadow-md flex items-center justify-center"
          onClick={toggleExpanded}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="w-5 h-0.5 bg-black rounded-full"></div>
            <div className="w-3.5 h-0.5 bg-black rounded-full"></div>
            <div className="w-2 h-0.5 bg-black rounded-full"></div>
          </div>
        </motion.button>
      )}
    </div>
  );
}
