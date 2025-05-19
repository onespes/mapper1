
import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface ScrollContextType {
  isAtTop: boolean;
  setIsAtTop: (value: boolean) => void;
  registerScrollContainer: (container: HTMLElement | null) => void;
}

const ScrollContext = createContext<ScrollContextType>({
  isAtTop: true,
  setIsAtTop: () => {},
  registerScrollContainer: () => {}
});

export const useScrollContext = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  const [isAtTop, setIsAtTop] = useState(true);
  const [scrollContainer, setScrollContainer] = useState<HTMLElement | null>(null);

  const registerScrollContainer = useCallback((container: HTMLElement | null) => {
    setScrollContainer(container);
    
    // Initialize with the correct value
    if (container) {
      setIsAtTop(container.scrollTop <= 5); // Using a small threshold for "at top"
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ isAtTop, setIsAtTop, registerScrollContainer }}>
      {children}
    </ScrollContext.Provider>
  );
}
