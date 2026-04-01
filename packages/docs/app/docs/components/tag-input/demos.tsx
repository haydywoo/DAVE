'use client';

import { useState } from 'react';
import { TagInput } from '@dave/react';
import { Preview } from '@/components/Preview';

export function TagInputDemos() {
  const [tags, setTags] = useState<string[]>(['React', 'TypeScript']);

  return (
    <>
      <Preview
        center={false}
        code={`<TagInput
  label="Tags"
  defaultValue={['design', 'system']}
  hint="Press Enter or comma to add."
/>`}
      >
        <div className="w-80">
          <TagInput
            label="Tags"
            defaultValue={['design', 'system']}
            hint="Press Enter or comma to add."
          />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Controlled</h3>
      <Preview
        center={false}
        code={`const [tags, setTags] = useState(['React', 'TypeScript']);

<TagInput
  label="Skills"
  value={tags}
  onChange={setTags}
/>`}
      >
        <div className="w-80 space-y-2">
          <TagInput label="Skills" value={tags} onChange={setTags} />
          <p className="text-xs text-fg-secondary">{tags.length} tag{tags.length !== 1 ? 's' : ''}: {tags.join(', ')}</p>
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">With max</h3>
      <Preview
        center={false}
        code={`<TagInput
  label="Labels"
  max={3}
  hint="Maximum 3 labels."
  defaultValue={['bug', 'urgent']}
/>`}
      >
        <div className="w-80">
          <TagInput label="Labels" max={3} hint="Maximum 3 labels." defaultValue={['bug', 'urgent']} />
        </div>
      </Preview>

      <h3 className="font-semibold text-base text-foreground mt-8 mb-3">Sizes</h3>
      <Preview
        center={false}
        code={`<TagInput size="sm" label="Small"  defaultValue={['tag']} />
<TagInput size="md" label="Medium" defaultValue={['tag']} />
<TagInput size="lg" label="Large"  defaultValue={['tag']} />`}
      >
        <div className="w-80 flex flex-col gap-4">
          <TagInput size="sm" label="Small"  defaultValue={['tag']} />
          <TagInput size="md" label="Medium" defaultValue={['tag']} />
          <TagInput size="lg" label="Large"  defaultValue={['tag']} />
        </div>
      </Preview>
    </>
  );
}
