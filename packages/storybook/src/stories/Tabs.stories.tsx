import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, Badge } from '@haydywoo/dave-react';

const meta: Meta = {
  title: 'Components/Tabs',
  parameters: { layout: 'padded' },
};

export default meta;

export const Line: StoryObj = {
  render: () => (
    <div className="w-full max-w-lg">
      <Tabs defaultValue="overview">
        <TabsList variant="line">
          <TabsTrigger value="overview" variant="line">Overview</TabsTrigger>
          <TabsTrigger value="activity" variant="line">Activity</TabsTrigger>
          <TabsTrigger value="settings" variant="line">Settings</TabsTrigger>
        </TabsList>
        <div className="pt-6">
          <TabsContent value="overview">
            <p className="text-sm text-fg-secondary">Overview content goes here.</p>
          </TabsContent>
          <TabsContent value="activity">
            <p className="text-sm text-fg-secondary">Activity feed goes here.</p>
          </TabsContent>
          <TabsContent value="settings">
            <p className="text-sm text-fg-secondary">Settings form goes here.</p>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  ),
};

export const Pill: StoryObj = {
  render: () => (
    <div className="w-full max-w-lg">
      <Tabs defaultValue="month">
        <TabsList variant="pill">
          <TabsTrigger value="day"   variant="pill">Day</TabsTrigger>
          <TabsTrigger value="week"  variant="pill">Week</TabsTrigger>
          <TabsTrigger value="month" variant="pill">Month</TabsTrigger>
          <TabsTrigger value="year"  variant="pill">Year</TabsTrigger>
        </TabsList>
        <div className="pt-6">
          <TabsContent value="day">
            <p className="text-sm text-fg-secondary">Daily view.</p>
          </TabsContent>
          <TabsContent value="week">
            <p className="text-sm text-fg-secondary">Weekly view.</p>
          </TabsContent>
          <TabsContent value="month">
            <p className="text-sm text-fg-secondary">Monthly view.</p>
          </TabsContent>
          <TabsContent value="year">
            <p className="text-sm text-fg-secondary">Yearly view.</p>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  ),
};

export const WithCard: StoryObj = {
  render: () => (
    <div className="w-full max-w-lg">
      <Tabs defaultValue="members">
        <TabsList variant="line">
          <TabsTrigger value="members" variant="line">Members</TabsTrigger>
          <TabsTrigger value="billing" variant="line">Billing</TabsTrigger>
          <TabsTrigger value="api"     variant="line">API keys</TabsTrigger>
        </TabsList>
        <div className="pt-6 flex flex-col gap-3">
          <TabsContent value="members">
            {['Haydn Phillips', 'Jamie Davies', 'Sara Kim'].map((name, i) => (
              <Card key={name} className="flex items-center justify-between py-3 px-4">
                <span className="text-sm font-medium text-foreground">{name}</span>
                <Badge variant={i === 0 ? 'primary' : 'neutral'}>{i === 0 ? 'Admin' : 'Member'}</Badge>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="billing">
            <Card><p className="text-sm text-fg-secondary">Billing details go here.</p></Card>
          </TabsContent>
          <TabsContent value="api">
            <Card><p className="text-sm text-fg-secondary">API key management goes here.</p></Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  ),
};
