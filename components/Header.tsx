
import { useState } from 'react';
import { motion } from 'framer-motion';
import svgPaths from "../imports/svg-j48jlcr45p";
import { IconFilterTags } from './IconFilterTags';
import { LocationSearchInput } from './LocationSearchInput';

// Type definitions for the Header component
interface HeaderProps {
  isMobile: boolean;
  onToggleFilter: () => void;
  onToggleSearch: () => void;
  onToggleLocation: (query: string) => void;
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

export function Header({ 
  isMobile,
  onToggleFilter,
  onToggleSearch,
  onToggleLocation,
  selectedFilters,
  onFilterChange
}: HeaderProps) {
  // State for header animations and behaviors
  const [isVisible, setIsVisible] = useState(true);
  
  // Handler for search location
  const handleLocationSearch = (query: string) => {
    onToggleLocation(query);
  };
  
  // If this is the mobile version, return null (we use the MobileNavigation instead)
  if (isMobile) {
    return null;
  }
  
  return (
    <header className="border-b border-gray-200 bg-background z-10">
      <div className="flex items-center justify-between py-2 px-5">
        <div className="font-bold text-foreground text-[20px]">
          <p className="whitespace-pre">Mapper</p>
        </div>
        
        {/* Filter icons - centered in header */}
        {!isMobile && (
          <div className="flex-1 flex justify-center mx-4">
            <IconFilterTags 
              selectedFilters={selectedFilters}
              onChange={onFilterChange}
              className="justify-center"
            />
          </div>
        )}
        
        {!isMobile && (
          <motion.div 
            className="flex flex-row gap-2 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <LocationSearchInput 
              onSearch={handleLocationSearch}
              placeholder="Search location..."
              className="w-[240px]"
            />
          </motion.div>
        )}
      </div>
    </header>
  );
}
