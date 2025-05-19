
import { Check } from 'lucide-react';

interface FilterTagsProps {
  selectedFilters: string[];
  onChange: (filters: string[]) => void;
  className?: string;
}

// Categories for filtering - same as in FilterDropdown
const filterCategories = [
  'Food & Dining',
  'Retail',
  'Health & Beauty',
  'Fun',
  'Services',
  'Creative & Hobby',
  'Family & Education'
];

export function FilterTags({ 
  selectedFilters = [], 
  onChange,
  className = "" 
}: FilterTagsProps) {
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
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {filterCategories.map((filter) => {
        const isSelected = selectedFilters.includes(filter);
        
        return (
          <button
            key={filter}
            className={`px-3 py-1.5 rounded-md text-xs flex items-center gap-1.5 transition-colors
              ${isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80 text-foreground'}`}
            onClick={() => handleFilterToggle(filter)}
          >
            {isSelected && <Check size={10} className="shrink-0" />}
            <span>{filter}</span>
          </button>
        );
      })}
      
      {selectedFilters.length > 0 && (
        <button 
          className="px-3 py-1.5 rounded-md text-xs bg-gray-100 text-gray-600 hover:bg-gray-200"
          onClick={() => onChange([])}
        >
          Clear All
        </button>
      )}
    </div>
  );
}
