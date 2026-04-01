import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbEllipsis } from '@dave/react';

const meta: Meta = {
  title: 'Components/Breadcrumb',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem current>Profile</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const WithEllipsis: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbEllipsis />
      <BreadcrumbSeparator />
      <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem current>Profile</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
      <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator>/</BreadcrumbSeparator>
      <BreadcrumbItem current>Profile</BreadcrumbItem>
    </Breadcrumb>
  ),
};

export const SingleLevel: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem current>Dashboard</BreadcrumbItem>
    </Breadcrumb>
  ),
};
