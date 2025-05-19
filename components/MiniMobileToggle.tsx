
import { ChevronUp, ChevronDown, X } from 'lucide-react';

interface MiniMobileToggleProps {
  isMinimized: boolean;
  onExpand: () => void;
  onClose: () => void;
}

export function MiniMobileToggle({ isMinimized, onExpand, onClose }: MiniMobileToggleProps) {
  return (
    <div className="absolute bottom-4 right-4 flex gap-2 z-20">
      <button
        className="bg-background shadow-lg rounded-full p-2"
        onClick={onExpand}
        aria-label={isMinimized ? "Expand list" : "Minimize list"}
      >
        <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
          <span>{isMinimized ? "View List" : "Hide List"}</span>
          {isMinimized ? (
            <ChevronUp className="h-4 w-4 text-foreground" strokeWidth={3} /> // Increased from default (2) to 3
          ) : (
            <ChevronDown className="h-4 w-4 text-foreground" strokeWidth={3} /> // Increased from default (2) to 3
          )}
        </div>
      </button>
      
      <button
        className="bg-background shadow-lg rounded-full p-2"
        onClick={onClose}
        aria-label="Close list"
      >
        <X className="h-4 w-4 text-foreground" strokeWidth={3} /> // Increased from default (2) to 3
      </button>
    </div>
  );
}
