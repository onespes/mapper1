
import svgPaths from "../imports/svg-sdt4jfn9p4";
import IconEducation from "../imports/IconEducation";
import IconEntertainment from "../imports/IconEntertainment-60-19";
import IconCreative from "../imports/IconCreative-68-46";
import Food from "../imports/Food";
import Health from "../imports/Health";
import Retail from "../imports/Retail";
import Services from "../imports/Services";
import Fun from "../imports/Fun-69-275";
import { Palette } from "lucide-react";

interface IconFilterTagsProps {
  selectedFilters: string[];
  onChange: (filters: string[]) => void;
  className?: string;
}

// Categories for filtering
const filterCategories = [
  'Food',
  'Retail',
  'Health',
  'Fun',
  'Services',
  'Hobby',
  'Family'
];

// Map filter categories to their corresponding icons
const IconComponents = {
  'Food': ({isSelected}: {isSelected: boolean}) => <Food />,
  'Health': ({isSelected}: {isSelected: boolean}) => <Health />,
  'Retail': ({isSelected}: {isSelected: boolean}) => <Retail />,
  'Services': ({isSelected}: {isSelected: boolean}) => <Services />,
  'Hobby': ({isSelected}: {isSelected: boolean}) => <IconCreative />,
  'Family': ({isSelected}: {isSelected: boolean}) => <IconEducation />,
  'Fun': ({isSelected}: {isSelected: boolean}) => <Fun />,
  'All': ({isSelected}: {isSelected: boolean}) => (
    <Palette className="size-6" strokeWidth={2.5} />
  )
};

export function IconFilterTags({ 
  selectedFilters = [], 
  onChange,
  className = "" 
}: IconFilterTagsProps) {
  const handleFilterToggle = (filter: string) => {
    // If "All" is clicked, clear all filters
    if (filter === 'All') {
      onChange([]);
      return;
    }
    
    const isSelected = selectedFilters.includes(filter);
    
    if (isSelected) {
      // Remove the filter
      onChange(selectedFilters.filter(f => f !== filter));
    } else {
      // Add the filter
      onChange([...selectedFilters, filter]);
    }
  };

  // Determine if "All" is selected (when no filters are active)
  const isAllSelected = selectedFilters.length === 0;

  return (
    <div className={`flex items-start justify-center flex-wrap gap-2 ${className}`}>
      {/* Always show "All" filter first */}
      <button
        key="All"
        className="flex flex-col items-center justify-center w-[64px] h-[64px] p-1 rounded-md transition-colors group"
        onClick={() => handleFilterToggle('All')}
      >
        <div className={`size-10 flex items-center justify-center mx-auto
          ${isAllSelected ? 'text-pink-500' : 'text-foreground group-hover:text-pink-500'}`}>
          <IconComponents.All isSelected={isAllSelected} />
        </div>
        <span className={`text-xs text-center px-1 leading-tight 
          ${isAllSelected ? 'text-pink-500' : 'text-foreground group-hover:text-pink-500'}`}>
          All
        </span>
      </button>
      
      {/* Show all category filters */}
      {filterCategories.map((filter) => {
        const isSelected = selectedFilters.includes(filter);
        
        return (
          <button
            key={filter}
            className="flex flex-col items-center justify-center w-[64px] h-[64px] p-1 rounded-md transition-colors group"
            onClick={() => handleFilterToggle(filter)}
          >
            <div className={`size-10 flex items-center justify-center mx-auto
              ${isSelected ? 'text-pink-500' : 'text-foreground group-hover:text-pink-500'}`}>
              {IconComponents[filter] && IconComponents[filter]({ isSelected })}
            </div>
            <span className={`text-xs text-center px-1 leading-tight 
              ${isSelected ? 'text-pink-500' : 'text-foreground group-hover:text-pink-500'}`}>
              {filter}
            </span>
          </button>
        );
      })}
    </div>
  );
}
