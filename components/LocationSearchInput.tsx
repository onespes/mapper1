
import { useState, useRef } from 'react';
import { Input } from './ui/input';
import { MapPin, Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationSearchInputProps {
  onSearch?: (location: string) => void;
  onClear?: () => void;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
}

export function LocationSearchInput({ 
  onSearch, 
  onClear,
  placeholder = "Search location...",
  autoFocus = false,
  className = ''
}: LocationSearchInputProps) {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (onSearch) {
      onSearch(newValue);
    }
  };
  
  const handleClear = () => {
    setValue('');
    
    if (onClear) {
      onClear();
    }
    
    // Focus the input after clearing
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(value);
    }
  };

  // Use a container width that works well in the header
  return (
    <div className={`relative flex items-center max-w-[240px] ${className}`}>
      <div className="absolute left-3 pointer-events-none text-muted-foreground z-10">
        <MapPin size={16} />
      </div>
      
      <Input 
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="pl-9 pr-8 h-9 w-full rounded-full bg-input-background"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      
      {value && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute right-3 text-muted-foreground hover:text-foreground"
          onClick={handleClear}
          type="button"
          aria-label="Clear search"
        >
          <X size={16} />
        </motion.button>
      )}
    </div>
  );
}
