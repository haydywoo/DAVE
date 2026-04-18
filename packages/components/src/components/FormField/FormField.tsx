import * as React from 'react';
import { cn } from '../../lib/cn';

// ─── Context ──────────────────────────────────────────────────────────────────

interface FormFieldContextValue {
  id: string;
  error: boolean;
  required: boolean;
}

const FormFieldContext = React.createContext<FormFieldContextValue>({
  id: '',
  error: false,
  required: false,
});

export function useFormField() {
  return React.useContext(FormFieldContext);
}

// ─── FormField ────────────────────────────────────────────────────────────────

export interface FormFieldProps {
  children: React.ReactNode;
  /** Unique id used to wire label htmlFor and input id. Auto-generated if omitted. */
  id?: string;
  /** Applies error styles to label, hint, and exposes error state to children via context. */
  error?: boolean;
  /** Marks the field as required — adds an asterisk to the label. */
  required?: boolean;
  className?: string;
}

export function FormField({ children, id, error = false, required = false, className }: FormFieldProps) {
  const generatedId = React.useId();
  const fieldId = id ?? generatedId;

  return (
    <FormFieldContext.Provider value={{ id: fieldId, error, required }}>
      <div className={cn('flex flex-col gap-1.5', className)}>
        {children}
      </div>
    </FormFieldContext.Provider>
  );
}

// ─── FormLabel ────────────────────────────────────────────────────────────────

export interface FormLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function FormLabel({ children, className }: FormLabelProps) {
  const { id, error, required } = useFormField();
  return (
    <label
      htmlFor={id}
      className={cn(
        'text-sm font-semibold',
        error ? 'text-error-foreground' : 'text-foreground',
        className,
      )}
    >
      {children}
      {required && <span className="ml-0.5 text-error" aria-hidden="true">*</span>}
    </label>
  );
}

// ─── FormControl ──────────────────────────────────────────────────────────────
// Clones the child and injects id, aria-invalid, aria-describedby

export interface FormControlProps {
  children: React.ReactElement;
}

export function FormControl({ children }: FormControlProps) {
  const { id, error } = useFormField();
  const hintId = `${id}-hint`;

  return React.cloneElement(children, {
    ...(children.props as Record<string, unknown>),
    id,
    'aria-invalid': error || undefined,
    'aria-describedby': hintId,
  } as React.HTMLAttributes<HTMLElement>);
}

// ─── FormHint ─────────────────────────────────────────────────────────────────

export interface FormHintProps {
  children: React.ReactNode;
  className?: string;
}

export function FormHint({ children, className }: FormHintProps) {
  const { id, error } = useFormField();
  return (
    <p
      id={`${id}-hint`}
      className={cn('text-xs', error ? 'text-error-foreground' : 'text-fg-secondary', className)}
    >
      {children}
    </p>
  );
}

// ─── FormSection ──────────────────────────────────────────────────────────────
// Groups multiple FormFields with an optional heading

export interface FormSectionProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export function FormSection({ children, title, description, className }: FormSectionProps) {
  return (
    <div className={cn('flex flex-col gap-5', className)}>
      {(title || description) && (
        <div className="flex flex-col gap-1">
          {title && <h3 className="text-sm font-semibold text-foreground">{title}</h3>}
          {description && <p className="text-xs text-fg-secondary">{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
