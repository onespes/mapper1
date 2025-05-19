
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProfileCardProps {
  name: string;
  profession: string;
  image?: string;
  onClick?: () => void;
  isSelected?: boolean;
  isActive?: boolean; // Added for compatibility with Sidebar
  isCompact?: boolean;
}

export function ProfileCard({
  name,
  profession,
  image,
  onClick,
  isSelected = false,
  isActive = false,
  isCompact = false,
}: ProfileCardProps) {
  // Use isActive as a fallback for isSelected for compatibility
  const isHighlighted = isSelected || isActive;
  const professionLines = profession.split(', ');

  return (
    <div
      className={`
        p-0 hover:bg-accent/40 transition-colors cursor-pointer profile-card
        ${isHighlighted ? 'bg-accent/60 hover:bg-accent/60' : ''}
        ${isCompact ? 'py-2' : 'py-4'}
      `}
      onClick={onClick}
    >
      <div className="flex gap-3 items-start px-4">
        {/* Profile image on the right */}
        <div className="flex-1 min-w-0">
          <h3 className="truncate pr-2">{name}</h3>
          
          {/* If compact, only show first profession line */}
          {isCompact ? (
            <p className="text-muted-foreground truncate mt-0.5 text-sm">
              {professionLines[0]}{professionLines.length > 1 ? '...' : ''}
            </p>
          ) : (
            <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
              {profession}
            </p>
          )}
          
          {/* View link - always show */}
          <div className={`${isCompact ? 'mt-0.5' : 'mt-2'}`}>
            <a 
              href="#" 
              className="text-primary text-sm inline-flex items-center hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
              }}
            >
              View
              <svg className="ml-1 size-3.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Profile image - right aligned */}
        <div className={`${isCompact ? 'size-10' : 'size-16'} flex-shrink-0 relative rounded-md overflow-hidden`}>
          {image ? (
            <ImageWithFallback
              src={image}
              alt={name}
              className="object-cover size-full"
            />
          ) : (
            <div className="bg-muted size-full flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted-foreground"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
