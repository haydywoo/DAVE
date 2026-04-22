'use client';

import * as React from 'react';
import {
  cn,
  Button,
  Input,
  Textarea,
  Select, SelectItem, SelectGroup, SelectLabel, SelectSeparator,
  Nav, NavGroup, NavItem,
  Switch,
  Avatar,
  Badge,
  Alert,
  Card, CardHeader, CardTitle, CardContent,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter,
  Progress,
  Divider,
  Slider,
  SegmentedControl,
  Checkbox,
  RadioGroup, RadioItem,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from '@dave/react';

// ─── Types ────────────────────────────────────────────────────────────────────

type Section = 'profile' | 'account' | 'security' | 'security-2fa' | 'security-sessions' | 'security-tokens' | 'notifications' | 'billing' | 'appearance' | 'team' | 'danger';

type NavChild = { id: Section; label: string };
type NavItemDef = {
  id: Section;
  label: string;
  icon: React.ReactNode;
  danger?: boolean;
  children?: NavChild[];
};

// ─── Nav items ────────────────────────────────────────────────────────────────

const navItems: NavItemDef[] = [
  {
    id: 'profile',
    label: 'Profile',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: 'account',
    label: 'Account',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    id: 'security',
    label: 'Security',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7Z" />
      </svg>
    ),
    children: [
      { id: 'security-2fa',      label: 'Two-factor auth'  },
      { id: 'security-sessions', label: 'Active sessions'  },
      { id: 'security-tokens',   label: 'API tokens'       },
    ],
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 10h20" />
      </svg>
    ),
  },
  {
    id: 'appearance',
    label: 'Appearance',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: 'team',
    label: 'Team',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'danger',
    label: 'Danger zone',
    danger: true,
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4M12 17h.01" />
      </svg>
    ),
  },
];

// ─── Section: Profile ─────────────────────────────────────────────────────────

function ProfileSection() {
  const [displayName, setDisplayName] = React.useState('Haydyn Phillips');
  const [username, setUsername] = React.useState('haydynphillips');
  const [bio, setBio] = React.useState('Product designer & developer. Building things on the internet.');
  const [website, setWebsite] = React.useState('https://haydyn.io');
  const [location, setLocation] = React.useState('Auckland, NZ');
  const [saved, setSaved] = React.useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="space-y-6">
      {saved && (
        <Alert variant="success" title="Profile saved">
          Your changes have been saved successfully.
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Profile picture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-5">
            <Avatar fallback="HP" size="xl" />
            <div className="space-y-2">
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">Upload photo</Button>
                <Button variant="ghost" size="sm">Remove</Button>
              </div>
              <p className="text-xs text-fg-secondary">JPG, PNG or GIF. Max 2 MB.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Public profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Display name"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
            />
            <Input
              label="Username"
              prefix="@"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <Textarea
            label="Bio"
            value={bio}
            onChange={e => setBio(e.target.value)}
            maxLength={200}
            showCount
            rows={3}
            hint="Brief description for your profile."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Website"
              placeholder="https://example.com"
              value={website}
              onChange={e => setWebsite(e.target.value)}
            />
            <Input
              label="Location"
              placeholder="City, Country"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button variant="secondary">Cancel</Button>
            <Button onClick={handleSave}>Save profile</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select defaultValue="nzst" id="timezone-select">
              <SelectItem value="utc">UTC</SelectItem>
              <SelectItem value="nzst">NZST — Auckland</SelectItem>
              <SelectItem value="aest">AEST — Sydney</SelectItem>
              <SelectItem value="jst">JST — Tokyo</SelectItem>
              <SelectItem value="bst">BST — London</SelectItem>
              <SelectItem value="est">EST — New York</SelectItem>
              <SelectItem value="pst">PST — Los Angeles</SelectItem>
            </Select>

            <Select defaultValue="en">
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ja">Japanese</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </Select>
          </div>
          <div className="flex justify-end pt-2">
            <Button>Save preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Section: Account ─────────────────────────────────────────────────────────

function AccountSection() {
  const [currentPw, setCurrentPw] = React.useState('');
  const [newPw, setNewPw] = React.useState('');
  const [confirmPw, setConfirmPw] = React.useState('');
  const pwMismatch = newPw.length > 0 && confirmPw.length > 0 && newPw !== confirmPw;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Email address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="info">
            Your email is used for login and notifications. Changing it requires verification.
          </Alert>
          <Input
            label="Primary email"
            type="email"
            defaultValue="haydyn@example.com"
          />
          <div className="flex justify-end">
            <Button>Update email</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Change password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            label="Current password"
            type="password"
            value={currentPw}
            onChange={e => setCurrentPw(e.target.value)}
          />
          <Input
            label="New password"
            type="password"
            value={newPw}
            onChange={e => setNewPw(e.target.value)}
            hint="Minimum 12 characters. Include a mix of letters, numbers, and symbols."
          />
          <Input
            label="Confirm new password"
            type="password"
            value={confirmPw}
            onChange={e => setConfirmPw(e.target.value)}
            error={pwMismatch}
            hint={pwMismatch ? "Passwords don't match." : undefined}
          />
          <div className="flex justify-end">
            <Button disabled={pwMismatch || !currentPw || !newPw}>Update password</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Storage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Progress value={68} label="6.8 GB of 10 GB used" showValue variant="default" />
          <p className="text-xs text-fg-secondary">
            3.2 GB remaining. <button className="text-accent-foreground underline underline-offset-2 hover:no-underline">Upgrade plan</button> for more storage.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Section: Security ────────────────────────────────────────────────────────

type Session = {
  id: string;
  device: string;
  location: string;
  lastActive: string;
  current: boolean;
};

const sessions: Session[] = [
  { id: '1', device: 'MacBook Pro — Chrome 124', location: 'Auckland, NZ', lastActive: 'Active now', current: true },
  { id: '2', device: 'iPhone 16 — Safari', location: 'Auckland, NZ', lastActive: '2 hours ago', current: false },
  { id: '3', device: 'Windows PC — Firefox 125', location: 'Wellington, NZ', lastActive: '5 days ago', current: false },
];

type Token = {
  id: string;
  name: string;
  created: string;
  lastUsed: string;
  scopes: string[];
  status: 'active' | 'expired';
};

const tokens: Token[] = [
  { id: '1', name: 'CI/CD Pipeline', created: '12 Jan 2026', lastUsed: '2 hours ago', scopes: ['read', 'write'], status: 'active' },
  { id: '2', name: 'Local dev script', created: '3 Mar 2026', lastUsed: '14 Apr 2026', scopes: ['read'], status: 'active' },
  { id: '3', name: 'Old integration', created: '18 Sep 2025', lastUsed: '1 Dec 2025', scopes: ['read', 'write', 'admin'], status: 'expired' },
];

function SecuritySection() {
  const [twoFaEnabled, setTwoFaEnabled] = React.useState(false);
  const [revokeId, setRevokeId] = React.useState<string | null>(null);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Two-factor authentication</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-foreground font-medium">Authenticator app</p>
              <p className="text-xs text-fg-secondary mt-0.5">
                Generate one-time codes from an authenticator app like 1Password or Authy.
              </p>
            </div>
            <Switch
              checked={twoFaEnabled}
              onCheckedChange={setTwoFaEnabled}
            />
          </div>

          {twoFaEnabled && (
            <Alert variant="success" title="2FA is enabled">
              Your account is protected with two-factor authentication.
            </Alert>
          )}

          <Divider />

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-foreground font-medium">Recovery codes</p>
              <p className="text-xs text-fg-secondary mt-0.5">
                Save these codes somewhere safe. They can be used to access your account if you lose your device.
              </p>
            </div>
            <Button variant="secondary" size="sm" disabled={!twoFaEnabled}>
              View codes
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {sessions.map(session => (
              <div key={session.id} className="flex items-center justify-between py-3 gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-foreground truncate">{session.device}</p>
                    {session.current && <Badge variant="success" size="xs">Current</Badge>}
                  </div>
                  <p className="text-xs text-fg-secondary mt-0.5">
                    {session.location} · {session.lastActive}
                  </p>
                </div>
                {!session.current && (
                  <Button variant="ghost" size="sm" className="shrink-0 text-error hover:bg-error-subtle hover:text-error-foreground">
                    Revoke
                  </Button>
                )}
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-border mt-1">
            <Button variant="secondary" size="sm">Sign out all other sessions</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API tokens</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {tokens.map(token => (
              <div key={token.id} className="flex items-start justify-between py-3 gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-sm font-medium text-foreground">{token.name}</p>
                    <Badge variant={token.status === 'active' ? 'success' : 'neutral'} size="xs">
                      {token.status}
                    </Badge>
                    {token.scopes.map(s => (
                      <Badge key={s} variant="neutral" size="xs">{s}</Badge>
                    ))}
                  </div>
                  <p className="text-xs text-fg-secondary mt-0.5">
                    Created {token.created} · Last used {token.lastUsed}
                  </p>
                </div>
                <Dialog open={revokeId === token.id} onOpenChange={open => setRevokeId(open ? token.id : null)}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="shrink-0 text-error hover:bg-error-subtle hover:text-error-foreground">
                      Revoke
                    </Button>
                  </DialogTrigger>
                  <DialogContent size="sm">
                    <DialogHeader>
                      <DialogTitle>Revoke token</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to revoke <strong>{token.name}</strong>? Any services using this token will immediately lose access.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="secondary" onClick={() => setRevokeId(null)}>Cancel</Button>
                      <Button variant="primary" className="bg-error hover:bg-error-hover" onClick={() => setRevokeId(null)}>
                        Revoke token
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t border-border mt-1">
            <Button variant="secondary" size="sm">Generate new token</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Section: Notifications ───────────────────────────────────────────────────

type NotifRow = { id: string; label: string; description: string; email: boolean; push: boolean; };

const notifRows: NotifRow[] = [
  { id: 'comments',   label: 'Comments',         description: 'When someone comments on your work.',        email: true,  push: true  },
  { id: 'mentions',   label: 'Mentions',          description: 'When someone @mentions you.',                email: true,  push: true  },
  { id: 'releases',   label: 'Product updates',   description: 'New features, releases, and changelogs.',    email: true,  push: false },
  { id: 'security',   label: 'Security alerts',   description: 'Unusual login attempts or new sign-ins.',    email: true,  push: true  },
  { id: 'billing',    label: 'Billing',           description: 'Invoices, payments, and plan changes.',      email: true,  push: false },
  { id: 'digest',     label: 'Weekly digest',     description: 'A summary of your activity each week.',      email: false, push: false },
];

function NotificationsSection() {
  const [prefs, setPrefs] = React.useState(
    Object.fromEntries(notifRows.map(r => [r.id, { email: r.email, push: r.push }]))
  );
  const [quietHours, setQuietHours] = React.useState(true);

  function toggle(id: string, channel: 'email' | 'push') {
    setPrefs(p => ({ ...p, [id]: { ...p[id], [channel]: !p[id][channel] } }));
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="-mx-6">
            <Table bordered={false} size="sm">
              <TableHeader>
                <tr>
                  <TableHead>Channel</TableHead>
                  <TableHead align="center" className="w-20">Email</TableHead>
                  <TableHead align="center" className="w-20">Push</TableHead>
                </tr>
              </TableHeader>
              <TableBody>
                {notifRows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <p className="font-medium text-foreground">{row.label}</p>
                      <p className="text-fg-secondary">{row.description}</p>
                    </TableCell>
                    <TableCell align="center">
                      <div className="flex justify-center">
                        <Switch checked={prefs[row.id].email} onCheckedChange={() => toggle(row.id, 'email')} size="sm" />
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      <div className="flex justify-center">
                        <Switch checked={prefs[row.id].push} onCheckedChange={() => toggle(row.id, 'push')} size="sm" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quiet hours</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Switch
            checked={quietHours}
            onCheckedChange={setQuietHours}
            label="Enable quiet hours"
            description="Pause push notifications during your specified hours."
          />
          {quietHours && (
            <div className="grid grid-cols-2 gap-4 pt-1">
              <div>
<label className="block text-xs font-medium text-foreground mb-1.5">From</label>
                <Select defaultValue="22">
                  {Array.from({ length: 24 }, (_, i) => (
                    <SelectItem key={i} value={String(i)}>
                      {String(i).padStart(2, '0')}:00
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <div>
<label className="block text-xs font-medium text-foreground mb-1.5">To</label>
                <Select defaultValue="8">
                  {Array.from({ length: 24 }, (_, i) => (
                    <SelectItem key={i} value={String(i)}>
                      {String(i).padStart(2, '0')}:00
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </div>
          )}
          <div className="flex justify-end pt-2">
            <Button>Save preferences</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Section: Billing ─────────────────────────────────────────────────────────

type Invoice = { id: string; date: string; amount: string; status: 'paid' | 'pending'; };

const invoices: Invoice[] = [
  { id: 'INV-2026-04', date: '1 Apr 2026', amount: '$49.00', status: 'paid'    },
  { id: 'INV-2026-03', date: '1 Mar 2026', amount: '$49.00', status: 'paid'    },
  { id: 'INV-2026-02', date: '1 Feb 2026', amount: '$49.00', status: 'paid'    },
  { id: 'INV-2026-01', date: '1 Jan 2026', amount: '$49.00', status: 'paid'    },
  { id: 'INV-2025-12', date: '1 Dec 2025', amount: '$29.00', status: 'paid'    },
];

function BillingSection() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Current plan</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="monthly">
            <TabsList className="mb-6">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">Annual <Badge variant="success" size="xs" className="ml-1.5">–20%</Badge></TabsTrigger>
            </TabsList>

            <TabsContent value="monthly">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Starter',    price: '$0',   features: ['5 projects', '1 GB storage', 'Community support'],           current: false },
                  { name: 'Pro',        price: '$49',  features: ['Unlimited projects', '10 GB storage', 'Priority support'],   current: true  },
                  { name: 'Enterprise', price: '$199', features: ['Unlimited everything', '100 GB storage', 'Dedicated support'], current: false },
                ].map(plan => (
                  <div
                    key={plan.name}
                    className={`rounded-[6px] border p-4 space-y-4 shadow-card ${plan.current ? 'border-accent bg-accent-subtle' : 'border-border bg-card'}`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{plan.name}</p>
                        <p className="text-xl font-bold text-foreground mt-0.5">{plan.price}<span className="text-xs font-normal text-fg-secondary">/mo</span></p>
                      </div>
                      {plan.current && <Badge variant="primary" size="sm">Current</Badge>}
                    </div>
                    <ul className="space-y-1.5">
                      {plan.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-xs text-fg-secondary">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-success shrink-0">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={plan.current ? 'soft' : 'secondary'}
                      size="sm"
                      className="w-full"
                      disabled={plan.current}
                    >
                      {plan.current ? 'Current plan' : `Upgrade to ${plan.name}`}
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="annual">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Starter',    price: '$0',   features: ['5 projects', '1 GB storage', 'Community support'],           current: false },
                  { name: 'Pro',        price: '$39',  features: ['Unlimited projects', '10 GB storage', 'Priority support'],   current: false },
                  { name: 'Enterprise', price: '$159', features: ['Unlimited everything', '100 GB storage', 'Dedicated support'], current: false },
                ].map(plan => (
                  <div key={plan.name} className="rounded-[6px] border border-border bg-card p-4 space-y-4 shadow-card">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{plan.name}</p>
                      <p className="text-xl font-bold text-foreground mt-0.5">{plan.price}<span className="text-xs font-normal text-fg-secondary">/mo</span></p>
                    </div>
                    <ul className="space-y-1.5">
                      {plan.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-xs text-fg-secondary">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-success shrink-0">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button variant="secondary" size="sm" className="w-full">
                      {plan.name === 'Starter' ? 'Downgrade' : `Upgrade to ${plan.name}`}
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment method</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-7 rounded border border-border bg-surface">
                <svg width="28" height="18" viewBox="0 0 50 32" fill="none" aria-hidden="true">
                  <rect width="50" height="32" rx="4" fill="#1A1F71" />
                  <circle cx="20" cy="16" r="9" fill="#EB001B" />
                  <circle cx="30" cy="16" r="9" fill="#F79E1B" />
                  <ellipse cx="25" cy="16" rx="4" ry="9" fill="#FF5F00" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Mastercard ending in 4242</p>
                <p className="text-xs text-fg-secondary">Expires 08/2028</p>
              </div>
            </div>
            <Button variant="secondary" size="sm">Update</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Invoice history</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {invoices.map(inv => (
              <div key={inv.id} className="flex items-center justify-between py-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-foreground">{inv.id}</p>
                  <p className="text-xs text-fg-secondary">{inv.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-foreground font-medium">{inv.amount}</span>
                  <Badge variant={inv.status === 'paid' ? 'success' : 'warning'} size="xs">{inv.status}</Badge>
                  <Button variant="ghost" size="sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    PDF
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Section: Danger zone ─────────────────────────────────────────────────────

function DangerSection() {
  const [archiveOpen, setArchiveOpen] = React.useState(false);
  const [deleteOpen, setDeleteOpen]   = React.useState(false);
  const [confirmText, setConfirmText] = React.useState('');

  return (
    <div className="space-y-4">
      <Alert variant="error" title="Irreversible actions">
        The actions in this section are permanent and cannot be undone. Please proceed with caution.
      </Alert>

      <Card className="border-error">
        <CardContent className="pt-6 divide-y divide-border space-y-0">
          {/* Export */}
          <div className="flex items-start justify-between gap-4 pb-5">
            <div>
              <p className="text-sm font-semibold text-foreground">Export your data</p>
              <p className="text-xs text-fg-secondary mt-0.5">
                Download a copy of all your projects, files, and account data as a ZIP archive.
              </p>
            </div>
            <Button variant="secondary" size="sm" className="shrink-0">Request export</Button>
          </div>

          {/* Archive */}
          <div className="flex items-start justify-between gap-4 py-5">
            <div>
              <p className="text-sm font-semibold text-foreground">Archive account</p>
              <p className="text-xs text-fg-secondary mt-0.5">
                Temporarily disable your account. Your data is preserved and you can reactivate at any time.
              </p>
            </div>
            <Dialog open={archiveOpen} onOpenChange={setArchiveOpen}>
              <DialogTrigger asChild>
                <Button variant="secondary" size="sm" className="shrink-0">Archive account</Button>
              </DialogTrigger>
              <DialogContent size="sm">
                <DialogHeader>
                  <DialogTitle>Archive your account</DialogTitle>
                  <DialogDescription>
                    Your account will be disabled. You can reactivate it at any time by signing back in.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="secondary" onClick={() => setArchiveOpen(false)}>Cancel</Button>
                  <Button variant="secondary" onClick={() => setArchiveOpen(false)}>Archive account</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Delete */}
          <div className="flex items-start justify-between gap-4 pt-5">
            <div>
              <p className="text-sm font-semibold text-error">Delete account</p>
              <p className="text-xs text-fg-secondary mt-0.5">
                Permanently delete your account, all projects, and associated data. This cannot be undone.
              </p>
            </div>
            <Dialog open={deleteOpen} onOpenChange={open => { setDeleteOpen(open); if (!open) setConfirmText(''); }}>
              <DialogTrigger asChild>
                <Button variant="primary" size="sm" className="shrink-0 bg-error hover:bg-error-hover">Delete account</Button>
              </DialogTrigger>
              <DialogContent size="sm">
                <DialogHeader>
                  <DialogTitle>Delete account permanently</DialogTitle>
                  <DialogDescription>
                    This will immediately delete your account and all associated data. This action cannot be reversed.
                  </DialogDescription>
                </DialogHeader>
                <DialogBody className="space-y-3">
                  <p className="text-sm text-foreground">
                    Type <strong className="font-semibold">delete my account</strong> to confirm.
                  </p>
                  <Input
                    placeholder="delete my account"
                    value={confirmText}
                    onChange={e => setConfirmText(e.target.value)}
                  />
                </DialogBody>
                <DialogFooter>
                  <Button variant="secondary" onClick={() => { setDeleteOpen(false); setConfirmText(''); }}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    className="bg-error hover:bg-error-hover"
                    disabled={confirmText !== 'delete my account'}
                    onClick={() => setDeleteOpen(false)}
                  >
                    Delete account
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ─── Section: Appearance ─────────────────────────────────────────────────────

const FONT_SIZES = [12, 13, 14, 15, 16] as const;
const DENSITY_OPTIONS = [
  { value: 'compact',     label: 'Compact'     },
  { value: 'default',     label: 'Default'     },
  { value: 'comfortable', label: 'Comfortable' },
];
const SYNTAX_THEMES = [
  { value: 'dave-dark',  label: 'DAVE Dark'   },
  { value: 'github',     label: 'GitHub'       },
  { value: 'dracula',    label: 'Dracula'      },
  { value: 'monokai',    label: 'Monokai'      },
  { value: 'nord',       label: 'Nord'         },
  { value: 'solarized',  label: 'Solarized'    },
];

function AppearanceSection() {
  const [theme,       setTheme]       = React.useState('system');
  const [fontSize,    setFontSize]    = React.useState([14]);
  const [density,     setDensity]     = React.useState('default');
  const [syntaxTheme, setSyntaxTheme] = React.useState('dave-dark');
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="space-y-6">
      {saved && (
        <Alert variant="success" title="Appearance saved">
          Your display preferences have been updated.
        </Alert>
      )}

      <Card>
        <CardHeader><CardTitle>Theme</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-xs font-medium text-fg-secondary mb-3">Colour scheme</p>
            <SegmentedControl
              value={theme}
              onValueChange={setTheme}
              options={[
                {
                  value: 'system',
                  label: 'System',
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                    </svg>
                  ),
                },
                {
                  value: 'light',
                  label: 'Light',
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                    </svg>
                  ),
                },
                {
                  value: 'dark',
                  label: 'Dark',
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  ),
                },
              ]}
            />
          </div>

          <div>
            <p className="text-xs font-medium text-fg-secondary mb-3">Interface density</p>
            <SegmentedControl
              value={density}
              onValueChange={setDensity}
              options={DENSITY_OPTIONS}
            />
            <p className="text-xs text-fg-secondary mt-2">
              {density === 'compact'     && 'Tighter spacing — fits more content on screen.'}
              {density === 'default'     && 'Balanced spacing for most workflows.'}
              {density === 'comfortable' && 'More breathing room — easier on the eyes.'}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Typography</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Slider
              label="Interface font size"
              value={fontSize}
              onValueChange={setFontSize}
              min={12}
              max={16}
              step={1}
              showValue
              formatValue={v => `${v}px`}
            />
            <div
              className="mt-4 rounded-[3px] border border-border bg-surface px-4 py-3 transition-all"
              style={{ fontSize: fontSize[0] }}
            >
              <p className="font-semibold text-foreground" style={{ fontSize: fontSize[0] + 2 }}>Preview text</p>
              <p className="text-fg-secondary mt-1" style={{ fontSize: fontSize[0] }}>
                The quick brown fox jumps over the lazy dog. This is how your interface text will appear at {fontSize[0]}px.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Code &amp; syntax</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-foreground mb-1.5">Syntax highlight theme</label>
            <Select value={syntaxTheme} onValueChange={setSyntaxTheme} className="max-w-xs">
              {SYNTAX_THEMES.map(t => (
                <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
              ))}
            </Select>
          </div>

          {/* Mini code preview */}
          <div className={`rounded-[3px] border border-border text-xs font-mono leading-relaxed px-4 py-3 ${
            ['dracula','monokai','dave-dark','nord'].includes(syntaxTheme)
              ? 'bg-[oklch(14%_0.01_270)] text-[oklch(90%_0.01_270)]'
              : syntaxTheme === 'solarized'
              ? 'bg-[oklch(25%_0.03_200)] text-[oklch(85%_0.04_200)]'
              : 'bg-[oklch(97%_0.002_80)] text-[oklch(22%_0.003_80)]'
          }`}>
            <span className="text-[oklch(68%_0.18_295)]">function</span>
            {' '}
            <span className="text-[oklch(68%_0.16_200)]">greet</span>
            {'('}
            <span className="text-[oklch(72%_0.14_60)]">name</span>
            {') {'}
            <br />
            {'  '}
            <span className="text-[oklch(68%_0.18_295)]">return</span>
            {' '}
            <span className="text-[oklch(72%_0.18_145)]">{`\`Hello, \${name}!\``}</span>
            <br />
            {'}'}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Accessibility</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <Switch
            label="Reduce motion"
            description="Disables animations and transitions across the interface."
            checked={reducedMotion}
            onCheckedChange={setReducedMotion}
          />
          <Divider />
          <Switch
            label="High contrast mode"
            description="Increases colour contrast for improved readability."
            defaultChecked={false}
          />
        </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="secondary">Reset to defaults</Button>
        <Button onClick={handleSave}>Save appearance</Button>
      </div>
    </div>
  );
}

// ─── Section: Team ───────────────────────────────────────────────────────────

type Role = 'owner' | 'admin' | 'member' | 'viewer';

type Member = {
  id: string;
  name: string;
  email: string;
  fallback: string;
  role: Role;
  joinedDate: string;
  status: 'active' | 'pending';
};

const ROLE_OPTIONS: { value: Role; label: string; description: string }[] = [
  { value: 'owner',  label: 'Owner',  description: 'Full control including billing and deletion.' },
  { value: 'admin',  label: 'Admin',  description: 'Can manage members and all settings.'          },
  { value: 'member', label: 'Member', description: 'Can view and edit projects.'                   },
  { value: 'viewer', label: 'Viewer', description: 'Read-only access to all projects.'             },
];

const INITIAL_MEMBERS: Member[] = [
  { id: '1', name: 'Haydyn Phillips', email: 'haydyn@example.com',  fallback: 'HP', role: 'owner',  joinedDate: '12 Jan 2025', status: 'active'  },
  { id: '2', name: 'Mara Hoffman',    email: 'mara@example.com',    fallback: 'MH', role: 'admin',  joinedDate: '3 Mar 2025',  status: 'active'  },
  { id: '3', name: 'James Okafor',    email: 'james@example.com',   fallback: 'JO', role: 'member', joinedDate: '18 Jun 2025', status: 'active'  },
  { id: '4', name: 'Lena Schwartz',   email: 'lena@example.com',    fallback: 'LS', role: 'viewer', joinedDate: '2 Jan 2026',  status: 'active'  },
  { id: '5', name: 'tom@newco.io',    email: 'tom@newco.io',        fallback: 'T',  role: 'member', joinedDate: '—',           status: 'pending' },
  { id: '6', name: 'priya@newco.io',  email: 'priya@newco.io',      fallback: 'P',  role: 'viewer', joinedDate: '—',           status: 'pending' },
];

const ROLE_BADGE: Record<Role, 'neutral' | 'error' | 'warning' | 'primary' | 'success'> = {
  owner:  'error',
  admin:  'warning',
  member: 'primary',
  viewer: 'neutral',
};

function TeamSection() {
  const [members, setMembers] = React.useState<Member[]>(INITIAL_MEMBERS);
  const [inviteEmail, setInviteEmail] = React.useState('');
  const [inviteRole, setInviteRole]   = React.useState<Role>('member');
  const [removeTarget, setRemoveTarget] = React.useState<Member | null>(null);
  const [roleTarget, setRoleTarget] = React.useState<Member | null>(null);
  const [newRole, setNewRole] = React.useState<Role>('member');
  const [inviteError, setInviteError] = React.useState('');
  const [inviteSent, setInviteSent] = React.useState('');

  const activeMembers  = members.filter(m => m.status === 'active');
  const pendingMembers = members.filter(m => m.status === 'pending');

  function handleInvite() {
    const trimmed = inviteEmail.trim();
    if (!trimmed) return;
    if (!trimmed.includes('@')) { setInviteError('Enter a valid email address.'); return; }
    if (members.some(m => m.email === trimmed)) { setInviteError('This person is already in your team.'); return; }
    const newMember: Member = {
      id: String(Date.now()),
      name: trimmed,
      email: trimmed,
      fallback: trimmed[0].toUpperCase(),
      role: inviteRole,
      joinedDate: '—',
      status: 'pending',
    };
    setMembers(prev => [...prev, newMember]);
    setInviteSent(trimmed);
    setInviteEmail('');
    setInviteError('');
    setTimeout(() => setInviteSent(''), 4000);
  }

  function handleRevokeInvite(id: string) {
    setMembers(prev => prev.filter(m => m.id !== id));
  }

  function handleRemove() {
    if (!removeTarget) return;
    setMembers(prev => prev.filter(m => m.id !== removeTarget.id));
    setRemoveTarget(null);
  }

  function handleRoleChange() {
    if (!roleTarget) return;
    setMembers(prev => prev.map(m => m.id === roleTarget.id ? { ...m, role: newRole } : m));
    setRoleTarget(null);
  }

  function openRoleDialog(member: Member) {
    setRoleTarget(member);
    setNewRole(member.role);
  }

  return (
    <div className="space-y-6">
      {/* Invite */}
      <Card>
        <CardHeader><CardTitle>Invite team member</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {inviteSent && (
            <Alert variant="success" title="Invite sent">
              An invitation has been sent to {inviteSent}.
            </Alert>
          )}
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <Input
                label="Email address"
                type="email"
                placeholder="colleague@company.com"
                value={inviteEmail}
                onChange={e => { setInviteEmail(e.target.value); setInviteError(''); }}
                error={!!inviteError}
                hint={inviteError || undefined}
                onKeyDown={e => e.key === 'Enter' && handleInvite()}
              />
            </div>
            <div className="w-36 shrink-0">
              <label className="block text-xs font-medium text-foreground mb-1.5">Role</label>
              <Select value={inviteRole} onValueChange={v => setInviteRole(v as Role)}>
                {ROLE_OPTIONS.filter(r => r.value !== 'owner').map(r => (
                  <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                ))}
              </Select>
            </div>
            <Button onClick={handleInvite} className="shrink-0">Send invite</Button>
          </div>

          {/* Role descriptions */}
          <div className="rounded-[3px] border border-border bg-surface divide-y divide-border">
            {ROLE_OPTIONS.map(r => (
              <div key={r.value} className="flex items-center gap-3 px-3 py-2.5">
                <RadioGroup value={inviteRole} onValueChange={v => setInviteRole(v as Role)} orientation="horizontal">
                  <RadioItem value={r.value} />
                </RadioGroup>
                <div>
                  <span className="text-xs font-semibold text-foreground">{r.label}</span>
                  <span className="text-xs text-fg-secondary ml-2">{r.description}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pending invites */}
      {pendingMembers.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>
              Pending invites
              <Badge variant="warning" size="xs" className="ml-2">{pendingMembers.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="divide-y divide-border">
              {pendingMembers.map(m => (
                <div key={m.id} className="flex items-center justify-between py-3 gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <Avatar fallback={m.fallback} size="sm" />
                    <div className="min-w-0">
                      <p className="text-sm text-foreground truncate">{m.email}</p>
                      <p className="text-xs text-fg-secondary">
                        Invited as <span className="font-medium">{m.role}</span> · Awaiting acceptance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="warning" size="xs">Pending</Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRevokeInvite(m.id)}
                      className="text-fg-secondary hover:text-foreground"
                    >
                      Revoke
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Active members */}
      <Card>
        <CardHeader>
          <CardTitle>
            Members
            <Badge variant="neutral" size="xs" className="ml-2">{activeMembers.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {activeMembers.map(member => {
              const isCurrentUser = member.role === 'owner';
              return (
                <div key={member.id} className="flex items-center justify-between py-3 gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <Avatar fallback={member.fallback} size="sm" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-foreground truncate">{member.name}</p>
                        {isCurrentUser && <Badge variant="neutral" size="xs">You</Badge>}
                      </div>
                      <p className="text-xs text-fg-secondary truncate">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant={ROLE_BADGE[member.role]} size="xs">{member.role}</Badge>
                    {!isCurrentUser && (
                      <>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-fg-secondary hover:text-foreground"
                          onClick={() => openRoleDialog(member)}
                        >
                          Change role
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-error hover:bg-error-subtle hover:text-error-foreground"
                          onClick={() => setRemoveTarget(member)}
                        >
                          Remove
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Permissions overview */}
      <Card>
        <CardHeader><CardTitle>Role permissions</CardTitle></CardHeader>
        <CardContent>
          <div className="-mx-6">
            <Table bordered={false} size="sm">
              <TableHeader>
                <tr>
                  <TableHead className="w-48">Permission</TableHead>
                  {ROLE_OPTIONS.map(r => (
                    <TableHead key={r.value} align="center">{r.label}</TableHead>
                  ))}
                </tr>
              </TableHeader>
              <TableBody>
                {[
                  { label: 'View projects',    perms: [true,  true,  true,  true]  },
                  { label: 'Edit projects',    perms: [true,  true,  true,  false] },
                  { label: 'Manage members',   perms: [true,  true,  false, false] },
                  { label: 'Manage billing',   perms: [true,  false, false, false] },
                  { label: 'Delete workspace', perms: [true,  false, false, false] },
                  { label: 'Access audit log', perms: [true,  true,  false, false] },
                ].map(row => (
                  <TableRow key={row.label}>
                    <TableCell className="text-fg-secondary">{row.label}</TableCell>
                    {row.perms.map((has, i) => (
                      <TableCell key={i} align="center">
                        {has
                          ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-success mx-auto" aria-label="Yes"><path d="M20 6 9 17l-5-5" /></svg>
                          : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-border-strong mx-auto" aria-label="No"><path d="M18 6 6 18M6 6l12 12" /></svg>
                        }
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Remove member dialog */}
      <Dialog open={!!removeTarget} onOpenChange={open => !open && setRemoveTarget(null)}>
        <DialogContent size="sm">
          <DialogHeader>
            <DialogTitle>Remove {removeTarget?.name}?</DialogTitle>
            <DialogDescription>
              They will immediately lose access to all projects and resources in this workspace.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setRemoveTarget(null)}>Cancel</Button>
            <Button variant="primary" className="bg-error hover:bg-error-hover" onClick={handleRemove}>
              Remove member
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Change role dialog */}
      <Dialog open={!!roleTarget} onOpenChange={open => !open && setRoleTarget(null)}>
        <DialogContent size="sm">
          <DialogHeader>
            <DialogTitle>Change role for {roleTarget?.name}</DialogTitle>
            <DialogDescription>
              Select a new role. Changes take effect immediately.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <div className="rounded-[3px] border border-border bg-surface divide-y divide-border">
              {ROLE_OPTIONS.filter(r => r.value !== 'owner').map(r => (
                <label key={r.value} aria-label={r.label} className="flex items-start gap-3 px-3 py-2.5 cursor-pointer hover:bg-surface-hovered transition-colors">
                  <input
                    type="radio"
                    name="role"
                    value={r.value}
                    checked={newRole === r.value}
                    onChange={() => setNewRole(r.value as Role)}
                    className="mt-0.5 accent-[var(--color-accent)]"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{r.label}</p>
                    <p className="text-xs text-fg-secondary">{r.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </DialogBody>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setRoleTarget(null)}>Cancel</Button>
            <Button onClick={handleRoleChange}>Update role</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// ─── Security sub-sections ───────────────────────────────────────────────────

function Security2FASection() {
  const [twoFaEnabled, setTwoFaEnabled] = React.useState(false);
  return (
    <Card>
      <CardHeader><CardTitle>Two-factor authentication</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-foreground font-medium">Authenticator app</p>
            <p className="text-xs text-fg-secondary mt-0.5">
              Generate one-time codes from an authenticator app like 1Password or Authy.
            </p>
          </div>
          <Switch checked={twoFaEnabled} onCheckedChange={setTwoFaEnabled} />
        </div>
        {twoFaEnabled && (
          <Alert variant="success" title="2FA is enabled">
            Your account is protected with two-factor authentication.
          </Alert>
        )}
        <Divider />
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-foreground font-medium">Recovery codes</p>
            <p className="text-xs text-fg-secondary mt-0.5">
              Save these codes somewhere safe. They can be used if you lose your device.
            </p>
          </div>
          <Button variant="secondary" size="sm" disabled={!twoFaEnabled}>View codes</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function SecuritySessionsSection() {
  return (
    <Card>
      <CardHeader><CardTitle>Active sessions</CardTitle></CardHeader>
      <CardContent>
        <div className="divide-y divide-border">
          {sessions.map(session => (
            <div key={session.id} className="flex items-center justify-between py-3 gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground truncate">{session.device}</p>
                  {session.current && <Badge variant="success" size="xs">Current</Badge>}
                </div>
                <p className="text-xs text-fg-secondary mt-0.5">
                  {session.location} · {session.lastActive}
                </p>
              </div>
              {!session.current && (
                <Button variant="ghost" size="sm" className="shrink-0 text-error hover:bg-error-subtle hover:text-error-foreground">
                  Revoke
                </Button>
              )}
            </div>
          ))}
        </div>
        <div className="pt-3 border-t border-border mt-1">
          <Button variant="secondary" size="sm">Sign out all other sessions</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function SecurityTokensSection() {
  const [revokeId, setRevokeId] = React.useState<string | null>(null);
  return (
    <Card>
      <CardHeader><CardTitle>API tokens</CardTitle></CardHeader>
      <CardContent>
        <div className="divide-y divide-border">
          {tokens.map(token => (
            <div key={token.id} className="flex items-start justify-between py-3 gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-medium text-foreground">{token.name}</p>
                  <Badge variant={token.status === 'active' ? 'success' : 'neutral'} size="xs">{token.status}</Badge>
                  {token.scopes.map(s => <Badge key={s} variant="neutral" size="xs">{s}</Badge>)}
                </div>
                <p className="text-xs text-fg-secondary mt-0.5">
                  Created {token.created} · Last used {token.lastUsed}
                </p>
              </div>
              <Dialog open={revokeId === token.id} onOpenChange={open => setRevokeId(open ? token.id : null)}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm" className="shrink-0 text-error hover:bg-error-subtle hover:text-error-foreground">
                    Revoke
                  </Button>
                </DialogTrigger>
                <DialogContent size="sm">
                  <DialogHeader>
                    <DialogTitle>Revoke token</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to revoke <strong>{token.name}</strong>? Any services using this token will immediately lose access.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="secondary" onClick={() => setRevokeId(null)}>Cancel</Button>
                    <Button variant="primary" className="bg-error hover:bg-error-hover" onClick={() => setRevokeId(null)}>
                      Revoke token
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
        <div className="pt-3 border-t border-border mt-1">
          <Button variant="secondary" size="sm">Generate new token</Button>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingsPage() {
  const [active, setActive] = React.useState<Section>('profile');

  const sectionMap: Record<Section, React.ReactNode> = {
    profile:            <ProfileSection />,
    account:            <AccountSection />,
    security:           <SecuritySection />,
    'security-2fa':     <Security2FASection />,
    'security-sessions':<SecuritySessionsSection />,
    'security-tokens':  <SecurityTokensSection />,
    notifications:      <NotificationsSection />,
    billing:            <BillingSection />,
    appearance:         <AppearanceSection />,
    team:               <TeamSection />,
    danger:             <DangerSection />,
  };

  const sectionLabels: Record<Section, string> = {
    profile:            'Profile',
    account:            'Account',
    security:           'Security',
    'security-2fa':     'Two-factor auth',
    'security-sessions':'Active sessions',
    'security-tokens':  'API tokens',
    notifications:      'Notifications',
    billing:            'Billing',
    appearance:         'Appearance',
    team:               'Team',
    danger:             'Danger zone',
  };

  function navigate(id: Section) {
    setActive(id);
  }

  function isChildActive(item: NavItemDef) {
    return item.children?.some(c => c.id === active) ?? false;
  }

  // Derive the active group label for the mobile trigger display value
  const activeMobileLabel = ((): string => {
    for (const item of navItems) {
      if (item.id === active) return item.label;
      const child = item.children?.find(c => c.id === active);
      if (child) return child.label;
    }
    return '';
  })();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold font-display text-foreground">Settings</h1>
          <p className="text-sm text-fg-secondary mt-1">Manage your account preferences and security.</p>
        </div>

        {/* Mobile section picker — sits above content, outside the flex row */}
        <div className="sm:hidden mb-6">
          <Select
            value={active}
            onValueChange={v => navigate(v as Section)}
          >
            {navItems.map((item, i) => {
              const isDanger = item.danger;
              const hasSeparator = isDanger;

              if (item.children?.length) {
                return (
                  <SelectGroup key={item.id}>
                    <SelectLabel>{item.label}</SelectLabel>
                    {item.children.map(child => (
                      <SelectItem key={child.id} value={child.id}>{child.label}</SelectItem>
                    ))}
                  </SelectGroup>
                );
              }

              return (
                <React.Fragment key={item.id}>
                  {hasSeparator && <SelectSeparator />}
                  <SelectItem value={item.id}>{item.label}</SelectItem>
                </React.Fragment>
              );
            })}
          </Select>
        </div>

        <div className="flex gap-8 items-start">
          {/* Sidebar nav */}
          <aside className="hidden sm:block w-44 shrink-0 sticky top-8">
            <Nav size="md">
              {navItems.map(item => {
                const parentActive = active === item.id || isChildActive(item);

                if (item.children?.length) {
                  return (
                    <NavGroup
                      key={item.id}
                      title={item.label}
                      icon={item.icon}
                      active={isChildActive(item)}
                      defaultOpen={isChildActive(item)}
                    >
                      {item.children.map(child => (
                        <NavItem
                          key={child.id}
                          as="button"
                          active={active === child.id}
                          onClick={() => navigate(child.id)}
                        >
                          {child.label}
                        </NavItem>
                      ))}
                    </NavGroup>
                  );
                }

                return (
                  <NavItem
                    key={item.id}
                    as="button"
                    active={parentActive}
                    icon={item.icon}
                    onClick={() => navigate(item.id)}
                    className={item.danger
                      ? cn('mt-4 text-error hover:text-error hover:bg-error-subtle', parentActive && 'bg-error-subtle border-error text-error')
                      : ''
                    }
                  >
                    {item.label}
                  </NavItem>
                );
              })}
            </Nav>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="mb-6">
              <h2 className="text-lg font-bold text-foreground">{sectionLabels[active]}</h2>
            </div>
            {sectionMap[active]}
          </main>
        </div>
      </div>
    </div>
  );
}
