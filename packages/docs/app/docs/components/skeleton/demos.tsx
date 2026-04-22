'use client';

import { Skeleton, Card } from '@haydywoo/dave-react';
import { Preview } from '@/components/Preview';

export function SkeletonDemos() {
  return (
    <>
      <Preview code={`<Skeleton height={16} width={200} />`}>
        <Skeleton height={16} width={200} />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Text block</h3>
      <Preview code={`<div className="flex flex-col gap-2 w-64">
  <Skeleton height={16} className="w-3/4" />
  <Skeleton height={12} className="w-full" />
  <Skeleton height={12} className="w-5/6" />
</div>`}>
        <div className="flex flex-col gap-2 w-64">
          <Skeleton height={16} className="w-3/4" />
          <Skeleton height={12} className="w-full" />
          <Skeleton height={12} className="w-5/6" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Card</h3>
      <Preview code={`<Card noPadding className="w-72 p-4 flex flex-col gap-4">
  <Skeleton height={160} className="w-full" />
  <div className="flex gap-3 items-center">
    <Skeleton width={36} height={36} rounded="full" />
    <div className="flex flex-col gap-1.5 flex-1">
      <Skeleton height={14} className="w-2/3" />
      <Skeleton height={11} className="w-1/2" />
    </div>
  </div>
  <div className="flex flex-col gap-2">
    <Skeleton height={12} className="w-full" />
    <Skeleton height={12} className="w-4/5" />
  </div>
</Card>`}>
        <Card noPadding className="w-72 p-4 flex flex-col gap-4">
          <Skeleton height={160} className="w-full" />
          <div className="flex gap-3 items-center">
            <Skeleton width={36} height={36} rounded="full" />
            <div className="flex flex-col gap-1.5 flex-1">
              <Skeleton height={14} className="w-2/3" />
              <Skeleton height={11} className="w-1/2" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton height={12} className="w-full" />
            <Skeleton height={12} className="w-4/5" />
            <Skeleton height={12} className="w-3/5" />
          </div>
        </Card>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">List rows</h3>
      <Preview code={`{Array.from({ length: 4 }).map((_, i) => (
  <div key={i} className="flex items-center gap-4">
    <Skeleton width={32} height={32} rounded="full" />
    <div className="flex flex-col gap-1.5 flex-1">
      <Skeleton height={13} className="w-1/2" />
      <Skeleton height={11} className="w-1/3" />
    </div>
    <Skeleton height={22} width={60} rounded="full" />
  </div>
))}`}>
        <div className="flex flex-col gap-3 w-80">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton width={32} height={32} rounded="full" />
              <div className="flex flex-col gap-1.5 flex-1">
                <Skeleton height={13} className="w-1/2" />
                <Skeleton height={11} className="w-1/3" />
              </div>
              <Skeleton height={22} width={60} rounded="full" />
            </div>
          ))}
        </div>
      </Preview>
    </>
  );
}
