import type { Meta, StoryObj } from '@storybook/react';
import { RadarChart } from '@dave/charts';

const meta: Meta<typeof RadarChart> = {
  title: 'Charts/RadarChart',
  component: RadarChart,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof RadarChart>;

const skills = [
  { skill: 'Speed',      alice: 85, bob: 65 },
  { skill: 'Strength',   alice: 70, bob: 90 },
  { skill: 'Endurance',  alice: 88, bob: 72 },
  { skill: 'Agility',    alice: 92, bob: 58 },
  { skill: 'Technique',  alice: 74, bob: 86 },
  { skill: 'Tactics',    alice: 80, bob: 78 },
];

const product = [
  { area: 'Performance', score: 88 },
  { area: 'Usability',   score: 74 },
  { area: 'Features',    score: 92 },
  { area: 'Support',     score: 68 },
  { area: 'Value',       score: 80 },
];

export const Default: Story = {
  args: {
    data: product,
    index: 'area',
    categories: ['score'],
    height: 320,
  },
};

export const MultiSeries: Story = {
  args: {
    data: skills,
    index: 'skill',
    categories: ['alice', 'bob'],
    height: 320,
  },
};

export const CircleGrid: Story = {
  args: {
    data: skills,
    index: 'skill',
    categories: ['alice', 'bob'],
    gridType: 'circle',
    height: 320,
  },
};

export const HighFill: Story = {
  args: {
    data: product,
    index: 'area',
    categories: ['score'],
    fillOpacity: 0.35,
    height: 320,
  },
};
