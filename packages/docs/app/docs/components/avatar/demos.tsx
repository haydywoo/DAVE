'use client';

import { Avatar, AvatarGroup } from '@dave/react';
import { Preview } from '@/components/Preview';

const IMG = 'https://i.pravatar.cc/150?img=11';

export function AvatarDemos() {
  return (
    <>
      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Image, initials, icon</h3>
      <Preview
        code={`<Avatar src="https://i.pravatar.cc/150?img=11" alt="Haydn Phillips" />
<Avatar fallback="HP" />
<Avatar />`}
      >
        <Avatar src={IMG} alt="Haydn Phillips" />
        <Avatar fallback="HP" />
        <Avatar />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        code={`<Avatar src="..." size="xs" />
<Avatar src="..." size="sm" />
<Avatar src="..." size="md" />
<Avatar src="..." size="lg" />
<Avatar src="..." size="xl" />`}
      >
        <div className="flex items-end gap-4">
          <Avatar src={IMG} alt="User" size="xs" />
          <Avatar src={IMG} alt="User" size="sm" />
          <Avatar src={IMG} alt="User" size="md" />
          <Avatar src={IMG} alt="User" size="lg" />
          <Avatar src={IMG} alt="User" size="xl" />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Shape</h3>
      <Preview
        code={`<Avatar src="..." shape="circle" />
<Avatar src="..." shape="square" />
<Avatar fallback="HP" shape="square" />`}
      >
        <Avatar src={IMG} alt="User" shape="circle" size="lg" />
        <Avatar src={IMG} alt="User" shape="square" size="lg" />
        <Avatar fallback="HP" shape="square" size="lg" />
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Status</h3>
      <Preview
        code={`<Avatar src="..." status="online"  size="lg" />
<Avatar src="..." status="busy"    size="lg" />
<Avatar src="..." status="away"    size="lg" />
<Avatar src="..." status="offline" size="lg" />`}
      >
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <Avatar src={IMG} alt="User" status="online"  size="lg" />
            <span className="text-[10px] text-fg-secondary">Online</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar src={IMG} alt="User" status="busy"    size="lg" />
            <span className="text-[10px] text-fg-secondary">Busy</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar src={IMG} alt="User" status="away"    size="lg" />
            <span className="text-[10px] text-fg-secondary">Away</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar src={IMG} alt="User" status="offline" size="lg" />
            <span className="text-[10px] text-fg-secondary">Offline</span>
          </div>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Group</h3>
      <Preview
        code={`<AvatarGroup>
  <Avatar src="..." alt="User 1" />
  <Avatar src="..." alt="User 2" />
  <Avatar src="..." alt="User 3" />
</AvatarGroup>

{/* With overflow */}
<AvatarGroup max={3}>
  <Avatar src="..." alt="User 1" />
  <Avatar src="..." alt="User 2" />
  <Avatar src="..." alt="User 3" />
  <Avatar src="..." alt="User 4" />
  <Avatar src="..." alt="User 5" />
</AvatarGroup>`}
      >
        <div className="flex flex-col gap-6">
          <AvatarGroup>
            <Avatar src="https://i.pravatar.cc/150?img=11" alt="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=22" alt="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=33" alt="User 3" />
          </AvatarGroup>

          <AvatarGroup max={3}>
            <Avatar src="https://i.pravatar.cc/150?img=11" alt="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=22" alt="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=33" alt="User 3" />
            <Avatar src="https://i.pravatar.cc/150?img=44" alt="User 4" />
            <Avatar src="https://i.pravatar.cc/150?img=55" alt="User 5" />
          </AvatarGroup>
        </div>
      </Preview>
    </>
  );
}
