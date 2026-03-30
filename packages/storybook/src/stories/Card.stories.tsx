import type { Meta, StoryObj } from '@storybook/react';
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardDivider,
  Button, Badge, Alert, Accordion, AccordionItem, AccordionTrigger, AccordionContent, Input,
} from '@dave/react';

const meta: Meta = {
  title: 'Components/Card',
  parameters: { layout: 'padded' },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>A short description of what this card contains.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-fg-secondary">Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Action</Button>
        <Button size="sm" variant="ghost">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithBadge: StoryObj = {
  render: () => (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>API usage</CardTitle>
          <Badge variant="success">Active</Badge>
        </div>
        <CardDescription>Your usage for the current billing period.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-semibold text-foreground">12,430</p>
        <p className="text-sm text-fg-secondary mt-1">of 50,000 requests used</p>
      </CardContent>
      <CardDivider />
      <CardFooter className="mt-0">
        <Button size="sm" variant="secondary">View details</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAlert: StoryObj = {
  render: () => (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Delete workspace</CardTitle>
        <CardDescription>This will permanently remove your workspace and all its data.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Alert variant="error">
          This action is irreversible. All members will lose access immediately.
        </Alert>
        <Input label="Type your workspace name to confirm" placeholder="my-workspace" />
      </CardContent>
      <CardFooter>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Delete workspace</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAccordion: StoryObj = {
  render: () => (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Frequently asked questions</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="q1">
            <AccordionTrigger>How do I invite team members?</AccordionTrigger>
            <AccordionContent>
              Go to Settings → Team and enter their email address. They'll receive
              an invite link valid for 48 hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>Can I export my data?</AccordionTrigger>
            <AccordionContent>
              Yes — go to Settings → Export. You can download a full JSON export
              of all your workspace data at any time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards via Stripe. Invoicing is available
              on the Enterprise plan.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  ),
};

export const Simple: StoryObj = {
  render: () => (
    <Card className="w-full max-w-sm">
      <p className="text-sm text-fg-secondary">
        A minimal card with no structured sub-components — just raw content.
      </p>
    </Card>
  ),
};
