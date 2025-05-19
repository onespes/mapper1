
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Person {
  id: string;
  name: string;
  profession: string;
  image?: string;
}

interface MobileDetailViewProps {
  person: Person;
  onClose: () => void;
}

export function MobileDetailView({ person, onClose }: MobileDetailViewProps) {
  if (!person) return null;
  
  return (
    <div className="h-full w-full bg-background rounded-t-xl shadow-lg relative overflow-hidden">
      {/* Handle at top */}
      <div className="h-6 flex items-center justify-center">
        <div className="w-12 h-1 bg-muted rounded-full"></div>
      </div>
      
      {/* Content */}
      <div className="h-[calc(100%-24px)] p-4 flex items-center justify-between">
        {/* Person info */}
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
            {person.image ? (
              <ImageWithFallback
                src={person.image}
                alt={person.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-primary flex items-center justify-center text-primary-foreground">
                {person.name.charAt(0)}
              </div>
            )}
          </div>
          
          <div>
            <h3 className="font-medium">{person.name}</h3>
            <p className="text-muted-foreground text-sm truncate max-w-[180px]">
              {person.profession.split(', ')[0]}
            </p>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex items-center space-x-2">
          <button 
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm"
          >
            View Profile
          </button>
          
          <button 
            onClick={onClose}
            className="size-8 flex items-center justify-center rounded-full hover:bg-accent/50"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
