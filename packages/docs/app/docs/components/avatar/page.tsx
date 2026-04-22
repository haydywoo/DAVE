import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { AvatarDemos } from './demos';

export const metadata: Metadata = { title: 'Avatar' };

const avatarProps = [
  { name: 'src',      type: 'string',                                        description: 'Image URL. Falls back to initials or icon on error.' },
  { name: 'alt',      type: 'string',                                        description: 'Alt text for the image.' },
  { name: 'fallback', type: 'string',                                        description: 'Up to 2 initials shown when no image is available.' },
  { name: 'size',     type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",            default: "'md'",      description: 'Controls the avatar dimensions.' },
  { name: 'shape',    type: "'circle' | 'square'",                          default: "'circle'",  description: 'Circle for people, square for organisations or bots.' },
  { name: 'status',   type: "'online' | 'offline' | 'busy' | 'away'",      description: 'Shows a presence indicator dot.' },
];

const groupProps = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Avatar components to stack.' },
  { name: 'max',      type: 'number',                    description: 'Maximum avatars shown before an overflow count appears.' },
  { name: 'size',     type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", default: "'md'", description: 'Passed to the overflow counter for consistent sizing.' },
];

export default function AvatarPage() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl text-foreground mb-2">Avatar</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Displays a user or entity — image with graceful fallback to initials or a generic icon. Supports presence status and grouped stacking.
      </p>

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <AvatarDemos />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Avatar props</h2>
      <PropsTable props={avatarProps} />

      <h2 className="font-display font-semibold text-2xl text-foreground mt-12 mb-4 pt-8 border-t border-border">AvatarGroup props</h2>
      <PropsTable props={groupProps} />
    </div>
  );
}
