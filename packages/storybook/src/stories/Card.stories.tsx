import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardDivider, CardImage,
  Button, Badge, Avatar,
} from '@dave/react';

const meta: Meta = {
  title: 'Components/Card',
  parameters: { layout: 'padded' },
};

export default meta;

const IMG_LANDSCAPE = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop';
const IMG_PORTRAIT  = 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80&auto=format&fit=crop';

// ─── Basic ────────────────────────────────────────────────────────────────────

export const Default: StoryObj = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Project Phoenix</CardTitle>
        <CardDescription>A redesign of the core platform.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-fg-secondary">Last updated 2 hours ago by Haydn.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Open</Button>
        <Button size="sm" variant="ghost">Archive</Button>
      </CardFooter>
    </Card>
  ),
};

// ─── Image positions ──────────────────────────────────────────────────────────

export const ImageTop: StoryObj = {
  render: () => (
    <Card noPadding className="w-full max-w-sm overflow-hidden">
      <CardImage src={IMG_LANDSCAPE} alt="Mountain landscape" position="top" />
      <div className="p-6">
        <CardHeader>
          <CardTitle>Discover the Alps</CardTitle>
          <CardDescription>A four-day guided hiking experience through the Swiss Alps.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button size="sm">Book now</Button>
          <Button size="sm" variant="ghost">Learn more</Button>
        </CardFooter>
      </div>
    </Card>
  ),
};

export const ImageLeft: StoryObj = {
  render: () => (
    <Card noPadding className="w-full max-w-md flex flex-row overflow-hidden">
      <CardImage src={IMG_PORTRAIT} alt="Landscape photo" position="left" />
      <div className="p-6 flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Horizon Valley</CardTitle>
          <CardDescription>Rolling hills and golden light, captured at dusk.</CardDescription>
        </CardHeader>
        <CardFooter className="mt-0">
          <Badge variant="neutral">Landscape</Badge>
          <Badge variant="primary">Featured</Badge>
        </CardFooter>
      </div>
    </Card>
  ),
};

export const ImageRight: StoryObj = {
  render: () => (
    <Card noPadding className="w-full max-w-md flex flex-row overflow-hidden">
      <div className="p-6 flex flex-col justify-between flex-1">
        <CardHeader>
          <CardTitle>Horizon Valley</CardTitle>
          <CardDescription>Rolling hills and golden light, captured at dusk.</CardDescription>
        </CardHeader>
        <CardFooter className="mt-0">
          <Button size="sm" variant="secondary">View</Button>
        </CardFooter>
      </div>
      <CardImage src={IMG_PORTRAIT} alt="Landscape photo" position="right" />
    </Card>
  ),
};

export const ImageBottom: StoryObj = {
  render: () => (
    <Card noPadding className="w-full max-w-sm overflow-hidden">
      <div className="p-6">
        <CardHeader>
          <CardTitle>Discover the Alps</CardTitle>
          <CardDescription>A four-day guided hiking experience through the Swiss Alps.</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button size="sm">Book now</Button>
        </CardFooter>
      </div>
      <CardImage src={IMG_LANDSCAPE} alt="Mountain landscape" position="bottom" />
    </Card>
  ),
};

// ─── Overlay ──────────────────────────────────────────────────────────────────

export const Overlay: StoryObj = {
  render: () => (
    <Card noPadding className="w-full max-w-sm overflow-hidden relative">
      <img
        src={IMG_LANDSCAPE}
        alt="Mountain landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 p-6 min-h-[260px] flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent">
        <Badge variant="primary" className="mb-3 self-start">Adventure</Badge>
        <CardTitle className="text-white text-xl mb-1">Discover the Alps</CardTitle>
        <CardDescription className="text-white/70">
          A four-day guided hiking experience through the Swiss Alps.
        </CardDescription>
        <CardFooter className="mt-4 p-0">
          <Button size="sm">Book now</Button>
        </CardFooter>
      </div>
    </Card>
  ),
};

// ─── Pricing ──────────────────────────────────────────────────────────────────

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-success shrink-0" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export const Pricing: StoryObj = {
  render: () => (
    <div className="flex gap-4 flex-wrap items-start">
      <Card className="w-72 flex flex-col">
        <CardHeader>
          <p className="text-xs font-semibold text-fg-secondary uppercase tracking-wider">Starter</p>
          <div className="flex items-end gap-1 mt-1">
            <span className="text-3xl font-display font-extrabold text-foreground">£0</span>
            <span className="text-sm text-fg-secondary mb-1">/ month</span>
          </div>
          <CardDescription>For individuals and small projects.</CardDescription>
        </CardHeader>
        <CardDivider />
        <CardContent className="flex flex-col gap-2.5 flex-1">
          {['5 projects', '1 workspace', '2GB storage', 'Community support'].map(f => (
            <div key={f} className="flex items-center gap-2 text-sm text-foreground"><Check />{f}</div>
          ))}
        </CardContent>
        <CardFooter className="mt-6">
          <Button variant="secondary" className="w-full">Get started</Button>
        </CardFooter>
      </Card>

      <Card className="w-72 flex flex-col border-accent bg-accent-subtle">
        <CardHeader>
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-accent-foreground uppercase tracking-wider">Pro</p>
            <Badge variant="primary">Popular</Badge>
          </div>
          <div className="flex items-end gap-1 mt-1">
            <span className="text-3xl font-display font-extrabold text-foreground">£29</span>
            <span className="text-sm text-fg-secondary mb-1">/ month</span>
          </div>
          <CardDescription>For growing teams who need more power.</CardDescription>
        </CardHeader>
        <CardDivider />
        <CardContent className="flex flex-col gap-2.5 flex-1">
          {['Unlimited projects', '5 workspaces', '50GB storage', 'Priority support', 'Advanced analytics'].map(f => (
            <div key={f} className="flex items-center gap-2 text-sm text-foreground"><Check />{f}</div>
          ))}
        </CardContent>
        <CardFooter className="mt-6">
          <Button className="w-full">Get started</Button>
        </CardFooter>
      </Card>
    </div>
  ),
};

// ─── Complex — Activity feed ───────────────────────────────────────────────────

export const ActivityFeed: StoryObj = {
  render: () => (
    <Card noPadding className="w-full max-w-sm">
      <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-border">
        <CardTitle>Recent activity</CardTitle>
        <Button size="sm" variant="ghost">View all</Button>
      </div>
      <ul className="divide-y divide-border">
        {[
          { initials: 'HW', name: 'Haydn', action: 'merged', target: 'feat/dark-mode', time: '2m ago', badge: 'Merged', variant: 'success' as const },
          { initials: 'JD', name: 'Jamie', action: 'opened', target: 'Toggle animation lag', time: '18m ago', badge: 'Open', variant: 'warning' as const },
          { initials: 'SR', name: 'Sara', action: 'deployed', target: 'v1.4.0', time: '1h ago', badge: 'Deploy', variant: 'primary' as const },
          { initials: 'MK', name: 'Mark', action: 'closed', target: 'Checkbox contrast bug', time: '3h ago', badge: 'Closed', variant: 'neutral' as const },
        ].map(({ initials, name, action, target, time, badge, variant }) => (
          <li key={target} className="flex items-start gap-3 px-6 py-4">
            <Avatar fallback={initials} size="sm" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">
                <span className="font-semibold">{name}</span>{' '}{action}{' '}
                <span className="font-medium text-accent-foreground truncate">{target}</span>
              </p>
              <p className="text-xs text-fg-secondary mt-0.5">{time}</p>
            </div>
            <Badge variant={variant} size="sm">{badge}</Badge>
          </li>
        ))}
      </ul>
    </Card>
  ),
};
