
import { Search, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface SearchInputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
}

export function SearchInput({ 
  value = '', 
  onChange, 
  onClear, 
  onSearch,
  placeholder = "Search...",
  autoFocus = false,
  className = ''
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasFocus, setHasFocus] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  
  // Keep our internal state in sync with the external value
  useEffect(() => {
    setInternalValue(value);
  }, [value]);
  
  useEffect(() => {
    // Auto focus the input if autoFocus is true
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    
    if (onChange) {
      onChange(e);
    }
    
    // For the old API
    if (onSearch) {
      onSearch(newValue);
    }
  };
  
  const handleClear = () => {
    setInternalValue('');
    
    if (onClear) {
      onClear();
    }
    
    // For the old API
    if (onSearch) {
      onSearch('');
    }
    
    // Focus the input after clearing
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  // Search input UI removed
  return null;
}
