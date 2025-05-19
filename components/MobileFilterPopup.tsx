
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import svgPaths from "../imports/svg-sdt4jfn9p4";

interface MobileFilterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedFilters: string[];
  onChange: (filters: string[]) => void;
  anchorPosition?: { top: number; left: number };
}

// Business categories for filtering
const filterCategories = [
  {
    name: 'Categories',
    filters: [
      'Food',
      'Retail',
      'Health',
      'Fun',
      'Services',
      'Hobby',
      'Family'
    ]
  }
];

// Map filter categories to their corresponding icons
const CategoryIcons = {
  'Food': (
    <svg className="size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
      <path d={svgPaths.p2ccc4b00} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d={svgPaths.p130acb80} stroke="currentColor" strokeWidth="1.5" />
      <path d={svgPaths.p3765800} stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  'Retail': (
    <svg className="size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
      <path d={svgPaths.p25271e00} stroke="currentColor" strokeWidth="1.5" />
      <path d={svgPaths.pa30e6e0} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  ),
  'Health': (
    <svg className="size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
      <path d={svgPaths.p9ec0580} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d={svgPaths.p1d1e2500} fill="currentColor" />
      <path d={svgPaths.p3896ce00} fill="currentColor" />
    </svg>
  ),
  'Fun': (
    <svg className="size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
      <path d={svgPaths.pcaa68e0} stroke="currentColor" strokeWidth="1.5" />
      <path d={svgPaths.pfae4900} stroke="currentColor" />
      <path d={svgPaths.p113d900} fill="currentColor" />
      <circle cx="13" cy="5" r="2" stroke="currentColor" />
      <circle cx="29.5" cy="5.5" r="1.5" stroke="currentColor" />
      <path d={svgPaths.p3312e580} stroke="currentColor" />
    </svg>
  ),
  'Services': (
    <svg className="size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
      <path d={svgPaths.p2251c8c0} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d={svgPaths.p240b6680} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d={svgPaths.p2b813100} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d={svgPaths.p3abede80} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d={svgPaths.p2d901000} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  ),
  'Hobby': (
    <svg className="size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
      <g>
        <path d={svgPaths.p234a380} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
        <path d={svgPaths.pa16b240} stroke="currentColor" strokeLinecap="round" />
        <path d={svgPaths.p1cbd5700} stroke="currentColor" strokeLinecap="round" />
      </g>
      <g>
        <path d={svgPaths.p33127000} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
        <path d={svgPaths.p3e0347f0} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </g>
      <path d={svgPaths.p3a7c1b00} fill="currentColor" />
    </svg>
  ),
  'Family': (
    <svg className="size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
      <path d={svgPaths.p24a93140} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d={svgPaths.pda1c80} stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M22.5 38.9003V17.5747" stroke="currentColor" strokeLinecap="round" />
      <path d={svgPaths.p3926eaf0} fill="currentColor" />
      <path d={svgPaths.p25527580} fill="currentColor" />
      <path d={svgPaths.p1fab3580} fill="currentColor" />
    </svg>
  )
};

export function MobileFilterPopup({
  isOpen,
  onClose,
  selectedFilters = [],
  onChange,
  anchorPosition = { top: 52, left: 52 }
}: MobileFilterPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  
  // Handle outside clicks to close the popup
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleFilterToggle = (filter: string) => {
    const isSelected = selectedFilters.includes(filter);
    
    if (isSelected) {
      // Remove the filter
      onChange(selectedFilters.filter(f => f !== filter));
    } else {
      // Add the filter
      onChange([...selectedFilters, filter]);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed z-30"
          style={{ 
            top: anchorPosition.top,
            left: anchorPosition.left
          }}
          initial={{ opacity: 0, scale: 0.9, originX: 0, originY: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          ref={popupRef}
        >
          <div className="bg-background rounded-lg border shadow-lg p-4 w-60 max-h-[400px] overflow-y-auto">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-medium">Filter</h3>
              <button 
                className="p-1 rounded-full hover:bg-muted"
                onClick={onClose}
              >
                <X size={16} />
              </button>
            </div>
            
            {filterCategories.map((category) => (
              <div key={category.name} className="mb-4 last:mb-0">
                <h4 className="text-xs font-medium pb-2 text-muted-foreground">
                  {category.name}
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {category.filters.map((filter) => {
                    const isSelected = selectedFilters.includes(filter);
                    
                    return (
                      <button
                        key={filter}
                        className={`px-3 py-1.5 rounded-md text-xs flex items-center gap-2 group
                          ${isSelected ? 'text-pink-500' : 'text-foreground'} 
                          ${isSelected ? '' : 'bg-muted'}`}
                        onClick={() => handleFilterToggle(filter)}
                      >
                        <div className={`size-6 flex items-center justify-center
                          ${isSelected ? 'text-pink-500' : 'text-foreground group-hover:text-pink-500'}`}>
                          {CategoryIcons[filter]}
                        </div>
                        <span className={`${isSelected ? '' : 'group-hover:text-pink-500'}`}>{filter}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            
            {selectedFilters.length > 0 && (
              <button 
                className="mt-2 w-full px-3 py-1.5 rounded-md text-xs bg-gray-100 text-gray-600 hover:bg-gray-200"
                onClick={() => onChange([])}
              >
                Clear Filters ({selectedFilters.length})
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
