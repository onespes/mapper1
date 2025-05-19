
import { useState, useEffect, useRef } from 'react';
import { ProfileCard } from './ProfileCard';
import { SearchInput } from './SearchInput';
import { FilterDropdown } from './FilterDropdown';
import { FilterTags } from './FilterTags';
import { Filter } from 'lucide-react';

interface SidebarProps {
  people: Array<{
    id: string;
    name: string;
    profession: string;
    image?: string;
  }>;
  resultsCount: number;
  selectedPersonId?: string;
  onSelect: (person: any) => void;
  className?: string;
  isMinimized?: boolean;
  showFilter?: boolean;
  showSearch?: boolean;
  isMobile?: boolean;
  onToggleFilter?: () => void;
  onToggleSearch?: () => void;
  onToggleLocation?: () => void;
  filters?: string[];
  onFilterChange?: (filters: string[]) => void;
}

export function Sidebar({ 
  people, 
  resultsCount, 
  selectedPersonId, 
  onSelect, 
  className = "",
  isMinimized = false,
  showFilter = false,
  showSearch = false,
  isMobile = false,
  onToggleFilter = () => {},
  onToggleSearch = () => {},
  onToggleLocation = () => {},
  filters = [],
  onFilterChange = () => {}
}: SidebarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  // Using the external filters state from props instead of local state
  const [localFilters, setLocalFilters] = useState<string[]>([]);
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Update filter expanded state when showFilter changes
  useEffect(() => {
    setIsFilterExpanded(showFilter);
  }, [showFilter]);
  
  // Filter people based on search term only (category filtering is now done in App.tsx)
  const filteredPeople = people.filter(person => {
    const matchesSearch = searchTerm === '' || 
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.profession.toLowerCase().includes(searchTerm.toLowerCase());
      
    return matchesSearch;
  });
  
  // Toggle filter dropdown
  const toggleFilter = () => {
    setIsFilterExpanded(!isFilterExpanded);
  };
  
  // Update filters - call the parent handler
  const handleFilterChange = (newFilters: string[]) => {
    onFilterChange(newFilters);
  };
  
  // Clear all filters
  const clearFilters = () => {
    onFilterChange([]);
    setSearchTerm('');
  };

  return (
    <div className={`flex flex-col h-full bg-background overflow-hidden ${className}`}>
      {/* Desktop Navigation Controls removed - now in header */}
      
      {/* List of people */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {isMinimized && selectedPersonId ? (
          // When minimized with selection, don't show results count at top
          <div className="flex flex-col">
            <div className="py-0">
              {/* Results count pushed below as part of scrollable content */}
              <div className="space-y-0">
                {/* Show selected person first */}
                {people.filter(p => p.id === selectedPersonId).map(person => (
                  <ProfileCard 
                    key={person.id}
                    name={person.name}
                    profession={person.profession}
                    image={person.image}
                    isActive={person.id === selectedPersonId}
                    onClick={() => onSelect(person)}
                  />
                ))}
                
                {/* Show remaining items */}
                {filteredPeople
                  .filter(p => p.id !== selectedPersonId)
                  .map(person => (
                    <ProfileCard 
                      key={person.id}
                      name={person.name}
                      profession={person.profession}
                      image={person.image}
                      isActive={person.id === selectedPersonId}
                      onClick={() => onSelect(person)}
                    />
                  ))}
              </div>
            </div>
          </div>
        ) : (
          // Otherwise show all filtered results with count at top
          <div className="space-y-1">
            {/* Results count - show filtered count instead of total */}
            <div className="flex items-center px-4 py-3 text-xs text-muted-foreground border-b" data-results-count>
              {filteredPeople.length} Results
            </div>
            
            {filteredPeople.map(person => (
              <ProfileCard 
                key={person.id}
                name={person.name}
                profession={person.profession}
                image={person.image}
                isActive={person.id === selectedPersonId}
                onClick={() => onSelect(person)}
              />
            ))}
            
            {filteredPeople.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No results found. Try adjusting your search or filters.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
