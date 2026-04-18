import type { Metadata } from 'next';
import { PropsTable } from '@/components/PropsTable';
import { FormFieldDemos } from './demos';

export const metadata: Metadata = { title: 'FormField' };

const fieldProps = [
  { name: 'id', type: 'string', description: 'Unique id wired to the label htmlFor and control id. Auto-generated if omitted.' },
  { name: 'error', type: 'boolean', default: 'false', description: 'Applies error colour to the label and hint, and sets aria-invalid on the control.' },
  { name: 'required', type: 'boolean', default: 'false', description: 'Adds a red asterisk to the FormLabel.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'FormLabel, FormControl, FormHint.' },
  { name: 'className', type: 'string', description: 'Additional classes on the wrapper.' },
];

const controlProps = [
  { name: 'children', type: 'ReactElement', required: true, description: 'A single form control (Input, Textarea, Select, etc.). Receives id, aria-invalid, and aria-describedby automatically.' },
];

const hintProps = [
  { name: 'children', type: 'ReactNode', required: true, description: 'Helper or error text. Colour follows the error state of the parent FormField.' },
];

const sectionProps = [
  { name: 'title', type: 'string', description: 'Section heading rendered above the fields.' },
  { name: 'description', type: 'string', description: 'Supporting text rendered below the title.' },
  { name: 'children', type: 'ReactNode', required: true, description: 'FormField elements.' },
  { name: 'className', type: 'string', description: 'Additional classes.' },
];

export default function FormFieldPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">FormField</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Composable wrapper that wires label, control, and hint together with consistent spacing, accessibility attributes, and error state — without imposing a specific form library.
      </p>

      <h3 className="text-sm text-fg-secondary mb-2">Anatomy</h3>
      <pre className="font-code text-xs text-fg-secondary bg-surface border border-border rounded-[3px] p-4 mb-8 leading-relaxed overflow-x-auto">{`<FormField id="email" error required>
  <FormLabel>Email</FormLabel>        {/* label, asterisk, error colour */}
  <FormControl>
    <Input />                         {/* receives id + aria attrs */}
  </FormControl>
  <FormHint>Invalid email.</FormHint> {/* error or helper text */}
</FormField>

<FormSection title="Profile" description="Visible to others.">
  <FormField>…</FormField>
  <FormField>…</FormField>
</FormSection>`}</pre>

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Examples</h2>
      <FormFieldDemos />

      <h2 className="font-display font-extrabold text-xl text-foreground mt-12 mb-4 pt-8 border-t border-border">Props</h2>
      <h3 className="font-semibold text-sm text-foreground mb-3">FormField</h3>
      <PropsTable props={fieldProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">FormLabel</h3>
      <p className="text-xs text-fg-secondary mb-3">Renders a <code className="font-code">{'<label>'}</code> wired to the parent FormField id.</p>
      <PropsTable props={[{ name: 'children', type: 'ReactNode', required: true, description: 'Label text.' }, { name: 'className', type: 'string', description: 'Additional classes.' }]} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">FormControl</h3>
      <PropsTable props={controlProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">FormHint</h3>
      <PropsTable props={hintProps} />
      <h3 className="font-semibold text-sm text-foreground mt-8 mb-3">FormSection</h3>
      <PropsTable props={sectionProps} />
    </div>
  );
}
