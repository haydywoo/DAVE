'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@dave/react';
import { Preview } from '@/components/Preview';

const singleCode = `<Accordion type="single" collapsible>
  <AccordionItem value="a">
    <AccordionTrigger>What is DAVE?</AccordionTrigger>
    <AccordionContent>
      DAVE is a React component library built on Tailwind CSS and CSS custom properties.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="b">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. Accordion follows the ARIA Accordion pattern with full keyboard navigation.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="c">
    <AccordionTrigger>Can I theme it?</AccordionTrigger>
    <AccordionContent>
      Override CSS custom properties in your globals.css to change colours across the entire system.
    </AccordionContent>
  </AccordionItem>
</Accordion>`;

const multipleCode = `<Accordion type="multiple" defaultValue={["a", "b"]}>
  <AccordionItem value="a">
    <AccordionTrigger>First section</AccordionTrigger>
    <AccordionContent>Open by default. Multiple items can be expanded simultaneously.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="b">
    <AccordionTrigger>Second section</AccordionTrigger>
    <AccordionContent>Also open by default.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="c">
    <AccordionTrigger>Third section</AccordionTrigger>
    <AccordionContent>Closed by default.</AccordionContent>
  </AccordionItem>
</Accordion>`;

export function AccordionDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Single</h3>
      <Preview center={false} code={singleCode}>
        <div className="w-full max-w-lg rounded-[3px] border border-border bg-card px-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="a">
              <AccordionTrigger>What is DAVE?</AccordionTrigger>
              <AccordionContent>
                DAVE is a React component library built on Tailwind CSS and CSS custom properties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. Accordion follows the ARIA Accordion pattern with full keyboard navigation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="c">
              <AccordionTrigger>Can I theme it?</AccordionTrigger>
              <AccordionContent>
                Override CSS custom properties in your globals.css to change colours across the entire system.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Multiple</h3>
      <Preview center={false} code={multipleCode}>
        <div className="w-full max-w-lg rounded-[3px] border border-border bg-card px-4">
          <Accordion type="multiple" defaultValue={['a', 'b']}>
            <AccordionItem value="a">
              <AccordionTrigger>First section</AccordionTrigger>
              <AccordionContent>Open by default. Multiple items can be expanded simultaneously.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="b">
              <AccordionTrigger>Second section</AccordionTrigger>
              <AccordionContent>Also open by default.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="c">
              <AccordionTrigger>Third section</AccordionTrigger>
              <AccordionContent>Closed by default.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Preview>
    </>
  );
}
