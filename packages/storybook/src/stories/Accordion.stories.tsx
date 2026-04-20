import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@dave/react';

const meta: Meta = {
  title: 'Components/Accordion',
  parameters: { layout: 'padded' },
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="w-full max-w-lg">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is DAVE?</AccordionTrigger>
          <AccordionContent>
            DAVE is an open-source design system built for teams who want consistent,
            accessible UI without the overhead.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes — every component meets WCAG 2.1 AA. Accordion supports full keyboard
            navigation: Arrow keys move between triggers, Enter/Space toggles.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I use my own colours?</AccordionTrigger>
          <AccordionContent>
            Yes. Override the CSS custom properties in <code>tokens.css</code> and
            the entire system re-themes automatically — no rebuild needed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Multiple: StoryObj = {
  render: () => (
    <div className="w-full max-w-lg">
      <Accordion type="multiple" defaultValue={['item-1']}>
        <AccordionItem value="item-1">
          <AccordionTrigger>First item (open by default)</AccordionTrigger>
          <AccordionContent>
            Multiple mode allows several items to be open at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second item</AccordionTrigger>
          <AccordionContent>
            Opening this won't close the first one.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Third item</AccordionTrigger>
          <AccordionContent>
            All three can be open simultaneously.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const DefaultOpen: StoryObj = {
  render: () => (
    <div className="w-full max-w-lg">
      <Accordion type="single" defaultValue="item-2" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>First item</AccordionTrigger>
          <AccordionContent>Content for the first item.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second item (open by default)</AccordionTrigger>
          <AccordionContent>This item starts open.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Third item</AccordionTrigger>
          <AccordionContent>Content for the third item.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};
