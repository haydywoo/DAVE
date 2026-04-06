'use client';

import { RadarChart } from '@dave/charts';
import { Preview } from '@/components/Preview';

const skills = [
  { skill: 'Speed',     alice: 85, bob: 65 },
  { skill: 'Strength',  alice: 70, bob: 90 },
  { skill: 'Endurance', alice: 88, bob: 72 },
  { skill: 'Agility',   alice: 92, bob: 58 },
  { skill: 'Technique', alice: 74, bob: 86 },
  { skill: 'Tactics',   alice: 80, bob: 78 },
];

const product = [
  { area: 'Performance', score: 88 },
  { area: 'Usability',   score: 74 },
  { area: 'Features',    score: 92 },
  { area: 'Support',     score: 68 },
  { area: 'Value',       score: 80 },
];

export function RadarChartDemos() {
  return (
    <>
      <Preview
        code={`<RadarChart
  data={[
    { area: 'Performance', score: 88 },
    { area: 'Usability',   score: 74 },
    { area: 'Features',    score: 92 },
    { area: 'Support',     score: 68 },
    { area: 'Value',       score: 80 },
  ]}
  index="area"
  categories={['score']}
/>`}
      >
        <RadarChart data={product} index="area" categories={['score']} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Multiple series</h3>
      <Preview
        code={`<RadarChart
  data={skills}
  index="skill"
  categories={['alice', 'bob']}
/>`}
      >
        <RadarChart data={skills} index="skill" categories={['alice', 'bob']} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Circle grid</h3>
      <Preview
        code={`<RadarChart
  data={skills}
  index="skill"
  categories={['alice', 'bob']}
  gridType="circle"
/>`}
      >
        <RadarChart data={skills} index="skill" categories={['alice', 'bob']} gridType="circle" />
      </Preview>
    </>
  );
}
