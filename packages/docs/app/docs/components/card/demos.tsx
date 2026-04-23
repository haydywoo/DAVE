'use client';

import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardDivider, CardImage,
  Button, Badge, Avatar,
} from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

const IMG_LANDSCAPE = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&auto=format&fit=crop';
const IMG_PORTRAIT  = 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80&auto=format&fit=crop';

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-success shrink-0" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function CardDemos() {
  return (
    <>
      {/* Default */}
      <Preview center={false} code={`<Card>
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
</Card>`}>
        <div className="w-full max-w-sm">
          <Card>
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
        </div>
      </Preview>

      {/* Image — top */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Image — top</h3>
      <Preview center={false} code={`<Card noPadding className="overflow-hidden">
  <CardImage src="..." alt="..." position="top" />
  <div className="p-6">
    <CardHeader>
      <CardTitle>Discover the Alps</CardTitle>
      <CardDescription>A four-day guided hiking experience.</CardDescription>
    </CardHeader>
    <CardFooter>
      <Button size="sm">Book now</Button>
      <Button size="sm" variant="ghost">Learn more</Button>
    </CardFooter>
  </div>
</Card>`}>
        <div className="w-full max-w-sm">
          <Card noPadding className="overflow-hidden">
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
        </div>
      </Preview>

      {/* Image — left */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Image — left</h3>
      <Preview center={false} code={`<Card noPadding className="flex flex-row overflow-hidden">
  <CardImage src="..." alt="..." position="left" />
  <div className="p-6 flex flex-col justify-between">
    <CardHeader>
      <CardTitle>Horizon Valley</CardTitle>
      <CardDescription>Rolling hills at dusk.</CardDescription>
    </CardHeader>
    <CardFooter className="mt-0">
      <Badge variant="neutral">Landscape</Badge>
    </CardFooter>
  </div>
</Card>`}>
        <div className="w-full max-w-md">
          <Card noPadding className="flex flex-row overflow-hidden">
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
        </div>
      </Preview>

      {/* Image — right */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Image — right</h3>
      <Preview center={false} code={`<Card noPadding className="flex flex-row overflow-hidden">
  <div className="p-6 flex flex-col justify-between flex-1">
    <CardHeader>
      <CardTitle>Horizon Valley</CardTitle>
      <CardDescription>Rolling hills at dusk.</CardDescription>
    </CardHeader>
    <CardFooter className="mt-0">
      <Button size="sm" variant="secondary">View</Button>
    </CardFooter>
  </div>
  <CardImage src="..." alt="..." position="right" />
</Card>`}>
        <div className="w-full max-w-md">
          <Card noPadding className="flex flex-row overflow-hidden">
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
        </div>
      </Preview>

      {/* Image — bottom */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Image — bottom</h3>
      <Preview center={false} code={`<Card noPadding className="overflow-hidden">
  <div className="p-6">
    <CardHeader>
      <CardTitle>Discover the Alps</CardTitle>
      <CardDescription>A four-day guided hiking experience.</CardDescription>
    </CardHeader>
    <CardFooter>
      <Button size="sm">Book now</Button>
    </CardFooter>
  </div>
  <CardImage src="..." alt="..." position="bottom" />
</Card>`}>
        <div className="w-full max-w-sm">
          <Card noPadding className="overflow-hidden">
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
        </div>
      </Preview>

      {/* Overlay */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Overlay</h3>
      <Preview center={false} code={`<Card noPadding className="relative overflow-hidden">
  <img src="..." className="absolute inset-0 w-full h-full object-cover" />
  <div className="relative z-10 p-6 min-h-[260px] flex flex-col justify-end
    bg-gradient-to-t from-black/70 via-black/20 to-transparent">
    <Badge variant="primary" className="mb-3 self-start">Adventure</Badge>
    <CardTitle className="text-white text-xl mb-1">Discover the Alps</CardTitle>
    <CardDescription className="text-white/70">
      A four-day guided hiking experience.
    </CardDescription>
    <CardFooter className="mt-4 p-0">
      <Button size="sm">Book now</Button>
    </CardFooter>
  </div>
</Card>`}>
        <div className="w-full max-w-sm">
          <Card noPadding className="relative overflow-hidden">
            <img src={IMG_LANDSCAPE} alt="Mountain landscape" className="absolute inset-0 w-full h-full object-cover" />
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
        </div>
      </Preview>

      {/* Pricing */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Pricing</h3>
      <Preview center={false} code={`<div className="flex gap-5 items-stretch">
  {/* Starter */}
  <Card className="w-72 flex flex-col">
    <CardHeader>
      <p className="text-[11px] font-semibold text-fg-secondary uppercase tracking-[0.14em]">Starter</p>
      <div className="flex items-baseline gap-1.5 mt-4">
        <span className="text-4xl font-display font-semibold text-foreground leading-none">£0</span>
        <span className="text-xs text-fg-secondary">/month</span>
      </div>
      <CardDescription className="mt-3">For individuals and small projects.</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-2 flex-1 pt-2">
      <p className="text-sm text-foreground">5 projects</p>
      <p className="text-sm text-foreground">1 workspace</p>
      <p className="text-sm text-foreground">2GB storage</p>
      <p className="text-sm text-foreground">Community support</p>
    </CardContent>
    <CardFooter className="mt-6">
      <Button variant="secondary" className="w-full">Start free</Button>
    </CardFooter>
  </Card>

  {/* Pro — accent top rail + primary CTA */}
  <Card className="w-72 flex flex-col border-t-[3px] border-t-accent shadow-raised">
    <CardHeader>
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold text-accent-foreground uppercase tracking-[0.14em]">Pro</p>
        <span className="text-[10px] font-semibold text-accent-foreground uppercase tracking-[0.14em]">Popular</span>
      </div>
      <div className="flex items-baseline gap-1.5 mt-4">
        <span className="text-5xl font-display font-semibold text-foreground leading-none">£29</span>
        <span className="text-xs text-fg-secondary">/month</span>
      </div>
      <CardDescription className="mt-3">For growing teams who need more power.</CardDescription>
    </CardHeader>
    <CardContent className="flex flex-col gap-2 flex-1 pt-2">
      <p className="text-sm text-foreground">Unlimited projects</p>
      <p className="text-sm text-foreground">5 workspaces</p>
      <p className="text-sm text-foreground">50GB storage</p>
      <p className="text-sm text-foreground">Priority support</p>
      <p className="text-sm text-foreground">Advanced analytics</p>
    </CardContent>
    <CardFooter className="mt-6">
      <Button className="w-full">Get Pro</Button>
    </CardFooter>
  </Card>
</div>`}>
        <div className="w-full flex gap-5 flex-wrap items-stretch">
          {/* Starter */}
          <Card className="w-72 flex flex-col">
            <CardHeader>
              <p className="text-[11px] font-semibold text-fg-secondary uppercase tracking-[0.14em]">Starter</p>
              <div className="flex items-baseline gap-1.5 mt-4">
                <span className="text-4xl font-display font-semibold text-foreground leading-none">£0</span>
                <span className="text-xs text-fg-secondary">/month</span>
              </div>
              <CardDescription className="mt-3">For individuals and small projects.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 flex-1 pt-2">
              <p className="text-sm text-foreground">5 projects</p>
              <p className="text-sm text-foreground">1 workspace</p>
              <p className="text-sm text-foreground">2GB storage</p>
              <p className="text-sm text-foreground">Community support</p>
            </CardContent>
            <CardFooter className="mt-6">
              <Button variant="secondary" className="w-full">Start free</Button>
            </CardFooter>
          </Card>

          {/* Pro — accent top rail + primary CTA */}
          <Card className="w-72 flex flex-col border-t-[3px] border-t-accent shadow-raised">
            <CardHeader>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-semibold text-accent-foreground uppercase tracking-[0.14em]">Pro</p>
                <span className="text-[10px] font-semibold text-accent-foreground uppercase tracking-[0.14em]">Popular</span>
              </div>
              <div className="flex items-baseline gap-1.5 mt-4">
                <span className="text-5xl font-display font-semibold text-foreground leading-none">£29</span>
                <span className="text-xs text-fg-secondary">/month</span>
              </div>
              <CardDescription className="mt-3">For growing teams who need more power.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 flex-1 pt-2">
              <p className="text-sm text-foreground">Unlimited projects</p>
              <p className="text-sm text-foreground">5 workspaces</p>
              <p className="text-sm text-foreground">50GB storage</p>
              <p className="text-sm text-foreground">Priority support</p>
              <p className="text-sm text-foreground">Advanced analytics</p>
            </CardContent>
            <CardFooter className="mt-6">
              <Button className="w-full">Get Pro</Button>
            </CardFooter>
          </Card>
        </div>
      </Preview>

      {/* Activity feed */}
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Activity feed</h3>
      <Preview center={false} code={`<Card noPadding>
  <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-border">
    <CardTitle>Recent activity</CardTitle>
    <Button size="sm" variant="ghost">View all</Button>
  </div>
  <ul className="divide-y divide-border">
    {items.map(item => (
      <li className="flex items-start gap-3 px-6 py-4">
        <Avatar fallback={item.initials} size="sm" />
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground">
            <span className="font-semibold">{item.name}</span> {item.action}{' '}
            <span className="font-medium text-accent-foreground">{item.target}</span>
          </p>
          <p className="text-xs text-fg-secondary mt-0.5">{item.time}</p>
        </div>
        <Badge variant={item.variant} size="sm">{item.badge}</Badge>
      </li>
    ))}
  </ul>
</Card>`}>
        <div className="w-full max-w-sm">
          <Card noPadding>
            <div className="px-6 pt-6 pb-4 flex items-center justify-between border-b border-border">
              <CardTitle>Recent activity</CardTitle>
              <Button size="sm" variant="ghost">View all</Button>
            </div>
            <ul className="divide-y divide-border">
              {([
                { initials: 'HW', name: 'Haydn', action: 'merged', target: 'feat/dark-mode', time: '2m ago', badge: 'Merged', variant: 'success' as const },
                { initials: 'JD', name: 'Jamie', action: 'opened', target: 'Toggle animation lag', time: '18m ago', badge: 'Open', variant: 'warning' as const },
                { initials: 'SR', name: 'Sara', action: 'deployed', target: 'v1.4.0', time: '1h ago', badge: 'Deploy', variant: 'primary' as const },
                { initials: 'MK', name: 'Mark', action: 'closed', target: 'Checkbox contrast bug', time: '3h ago', badge: 'Closed', variant: 'neutral' as const },
              ]).map(({ initials, name, action, target, time, badge, variant }) => (
                <li key={target} className="flex items-start gap-3 px-6 py-4">
                  <Avatar fallback={initials} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">
                      <span className="font-semibold">{name}</span>{' '}{action}{' '}
                      <span className="font-medium text-accent-foreground">{target}</span>
                    </p>
                    <p className="text-xs text-fg-secondary mt-0.5">{time}</p>
                  </div>
                  <Badge variant={variant} size="sm">{badge}</Badge>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Preview>
    </>
  );
}
