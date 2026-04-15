import * as React from 'react';
import { cn } from '../../lib/cn';

export type AvatarSize   = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape  = 'circle' | 'square';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  /** @deprecated use initials */
  fallback?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  className?: string;
}

const sizeMap: Record<AvatarSize, { container: string; text: string; status: string; ring: string }> = {
  xs: { container: 'h-6 w-6',   text: 'text-[10px]', status: 'h-1.5 w-1.5 border',   ring: 'ring-1' },
  sm: { container: 'h-8 w-8',   text: 'text-xs',     status: 'h-2 w-2 border',        ring: 'ring-1' },
  md: { container: 'h-10 w-10', text: 'text-sm',     status: 'h-2.5 w-2.5 border-2',  ring: 'ring-2' },
  lg: { container: 'h-12 w-12', text: 'text-base',   status: 'h-3 w-3 border-2',      ring: 'ring-2' },
  xl: { container: 'h-16 w-16', text: 'text-xl',     status: 'h-3.5 w-3.5 border-2',  ring: 'ring-2' },
};

const statusColorMap: Record<AvatarStatus, string> = {
  online: 'bg-success', offline: 'bg-border-strong', busy: 'bg-error', away: 'bg-warning',
};

const shapeMap: Record<AvatarShape, string> = {
  circle: 'rounded-full',
  square: 'rounded-[4px]',
};

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[55%] h-[55%]" aria-hidden="true">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
    </svg>
  );
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(
  { src, alt = '', initials, fallback, size = 'md', shape = 'circle', status, className, ...props },
  ref,
) {
  const [imgError, setImgError] = React.useState(false);
  const { container, text, status: statusSize, ring } = sizeMap[size];
  const shapeClass = shapeMap[shape];
  const statusShape = shape === 'circle' ? 'rounded-full' : 'rounded-[2px]';
  const displayInitials = initials ?? fallback;
  const showImage = src && !imgError;

  return (
    <div ref={ref} className={cn('relative inline-flex shrink-0', container, className)} {...props}>
      <div className={cn(
        'flex h-full w-full items-center justify-center overflow-hidden',
        shapeClass,
        !showImage && 'bg-accent-subtle text-accent-foreground font-semibold',
      )}>
        {showImage ? (
          <img src={src} alt={alt} className="h-full w-full object-cover" onError={() => setImgError(true)} />
        ) : displayInitials ? (
          <span className={cn(text, 'select-none leading-none')}>
            {displayInitials.slice(0, 2).toUpperCase()}
          </span>
        ) : (
          <PersonIcon />
        )}
      </div>
      {status && (
        <span className={cn(
          'absolute bottom-0 right-0 block border-card',
          statusShape, statusSize, statusColorMap[status], ring, 'ring-card',
        )} />
      )}
    </div>
  );
});

// ─── Avatar Group ─────────────────────────────────────────────────────────────

export interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  size?: AvatarSize;
}

export function AvatarGroup({ children, max, size = 'md' }: AvatarGroupProps) {
  const all = React.Children.toArray(children);
  const visible = max ? all.slice(0, max) : all;
  const overflow = max && all.length > max ? all.length - max : 0;
  const { container, text } = sizeMap[size];

  return (
    <div className="flex items-center -space-x-2">
      {visible.map((child, i) => (
        <div key={i} className="ring-2 ring-card rounded-full">{child}</div>
      ))}
      {overflow > 0 && (
        <div className={cn(
          'flex items-center justify-center rounded-full ring-2 ring-card',
          'bg-surface text-fg-secondary font-semibold',
          container, text,
        )}>
          +{overflow}
        </div>
      )}
    </div>
  );
}
