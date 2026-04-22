'use client';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbEllipsis } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function BreadcrumbDemos() {
  return (
    <>
      <Preview
        center={false}
        code={`<Breadcrumb>
  <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem current>Profile</BreadcrumbItem>
</Breadcrumb>`}
      >
        <Breadcrumb>
          <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem current>Profile</BreadcrumbItem>
        </Breadcrumb>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With ellipsis</h3>
      <Preview
        center={false}
        code={`<Breadcrumb>
  <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbEllipsis />
  <BreadcrumbSeparator />
  <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem current>Profile</BreadcrumbItem>
</Breadcrumb>`}
      >
        <Breadcrumb>
          <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbEllipsis />
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem current>Profile</BreadcrumbItem>
        </Breadcrumb>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Custom separator</h3>
      <Preview
        center={false}
        code={`<Breadcrumb>
  <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
  <BreadcrumbSeparator>/</BreadcrumbSeparator>
  <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
  <BreadcrumbSeparator>/</BreadcrumbSeparator>
  <BreadcrumbItem current>Profile</BreadcrumbItem>
</Breadcrumb>`}
      >
        <Breadcrumb>
          <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem current>Profile</BreadcrumbItem>
        </Breadcrumb>
      </Preview>
    </>
  );
}
