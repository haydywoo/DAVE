import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Components' };

const sections = [
  {
    title: 'Layout',
    items: [
      { name: 'Accordion',   href: '/docs/components/accordion/',   desc: 'Expandable sections with animated height transition.' },
      { name: 'Card',        href: '/docs/components/card/',        desc: 'Surface container for grouping related content.' },
      { name: 'Collapsible', href: '/docs/components/collapsible/', desc: 'Toggle visibility of any content with smooth animation.' },
      { name: 'Divider',     href: '/docs/components/divider/',     desc: 'Horizontal or vertical separator with optional label.' },
      { name: 'Tabs',        href: '/docs/components/tabs/',        desc: 'Switch between views within the same context.' },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { name: 'Breadcrumb',  href: '/docs/components/breadcrumb/',  desc: 'Shows the current page location within the hierarchy.' },
      { name: 'Nav',         href: '/docs/components/nav/',         desc: 'Sidebar navigation with sections, groups, and badges.' },
      { name: 'Navbar',      href: '/docs/components/navbar/',      desc: 'Top-bar navigation with brand, links, and mobile menu.' },
      { name: 'Pagination',  href: '/docs/components/pagination/',  desc: 'Page controls for navigating large datasets.' },
      { name: 'Stepper',     href: '/docs/components/stepper/',     desc: 'Multi-step progress indicator for wizards and flows.' },
    ],
  },
  {
    title: 'Forms',
    items: [
      { name: 'Button',            href: '/docs/components/button/',             desc: 'Triggers an action or event.' },
      { name: 'Form Field',        href: '/docs/components/form-field/',         desc: 'Wires label, input, hint, and error into one accessible unit.' },
      { name: 'Checkbox',          href: '/docs/components/checkbox/',           desc: 'Boolean selection input with indeterminate support.' },
      { name: 'Chip',              href: '/docs/components/chip/',               desc: 'Compact filter or selection pill.' },
      { name: 'Combobox',          href: '/docs/components/combobox/',           desc: 'Searchable select with grouped options.' },
      { name: 'Copy Button',       href: '/docs/components/copy-button/',        desc: 'One-click clipboard copy with confirmation state.' },
      { name: 'Date Picker',       href: '/docs/components/date-picker/',        desc: 'Calendar popover for selecting a single date.' },
      { name: 'Date Range Picker', href: '/docs/components/date-range-picker/',  desc: 'Calendar popover for selecting a start and end date.' },
      { name: 'Dropzone',          href: '/docs/components/dropzone/',           desc: 'Drag-and-drop file upload area.' },
      { name: 'Input',             href: '/docs/components/input/',              desc: 'Text input with addons, icons, and clear button.' },
      { name: 'Number Input',      href: '/docs/components/number-input/',       desc: 'Numeric input with increment and decrement controls.' },
      { name: 'Radio',             href: '/docs/components/radio/',              desc: 'Single-choice selection within a group.' },
      { name: 'Segmented Control', href: '/docs/components/segmented-control/',  desc: 'Button group for switching between mutually exclusive views.' },
      { name: 'Select',            href: '/docs/components/select/',             desc: 'Native-feeling dropdown for picking one option.' },
      { name: 'Slider',            href: '/docs/components/slider/',             desc: 'Drag control for selecting a value within a range.' },
      { name: 'Switch',            href: '/docs/components/switch/',             desc: 'Toggle between on and off states.' },
      { name: 'Tag Input',         href: '/docs/components/tag-input/',          desc: 'Multi-value input for creating and removing tags.' },
      { name: 'Textarea',          href: '/docs/components/textarea/',           desc: 'Multi-line text input with optional character count.' },
    ],
  },
  {
    title: 'Overlays',
    items: [
      { name: 'Alert Dialog',  href: '/docs/components/alert-dialog/',  desc: 'Modal confirmation for irreversible or destructive actions.' },
      { name: 'Command',       href: '/docs/components/command/',       desc: 'Keyboard-first command palette for searching and navigation.' },
      { name: 'Context Menu',  href: '/docs/components/context-menu/',  desc: 'Right-click contextual action menu.' },
      { name: 'Dialog',        href: '/docs/components/dialog/',        desc: 'Focused modal panel for forms and detail views.' },
      { name: 'Drawer',        href: '/docs/components/drawer/',        desc: 'Side panel that slides in from any edge.' },
      { name: 'Dropdown',      href: '/docs/components/dropdown/',      desc: 'Positioned action menu triggered by a button.' },
      { name: 'Popover',       href: '/docs/components/popover/',       desc: 'Floating panel anchored to a trigger element.' },
      { name: 'Tooltip',       href: '/docs/components/tooltip/',       desc: 'Short label revealed on hover or focus.' },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { name: 'Alert',    href: '/docs/components/alert/',    desc: 'Inline status message for info, success, warning, or error.' },
      { name: 'Progress', href: '/docs/components/progress/', desc: 'Linear bar showing completion percentage.' },
      { name: 'Skeleton', href: '/docs/components/skeleton/', desc: 'Loading placeholder that mimics content shape.' },
      { name: 'Spinner',  href: '/docs/components/spinner/',  desc: 'Circular loading indicator.' },
      { name: 'Toast',    href: '/docs/components/toast/',    desc: 'Ephemeral notification that appears in a viewport corner.' },
    ],
  },
  {
    title: 'Data Display',
    items: [
      { name: 'Avatar',       href: '/docs/components/avatar/',       desc: 'User or entity image with fallback and presence status.' },
      { name: 'Badge',        href: '/docs/components/badge/',        desc: 'Compact label for status, category, or count.' },
      { name: 'DataTable',    href: '/docs/components/data-table/',   desc: 'Sortable, filterable table with pagination and row selection.' },
      { name: 'Empty State',  href: '/docs/components/empty-state/',  desc: 'Zero-content placeholder with icon, message, and action.' },
      { name: 'Kbd',          href: '/docs/components/kbd/',          desc: 'Keyboard shortcut label.' },
      { name: 'Stat',         href: '/docs/components/stat/',         desc: 'KPI card with value, label, and trend indicator.' },
      { name: 'Table',        href: '/docs/components/table/',        desc: 'Semantic HTML table with sort and zebra-stripe support.' },
      { name: 'Timeline',     href: '/docs/components/timeline/',     desc: 'Chronological activity feed or audit log.' },
    ],
  },
];

export default function ComponentsPage() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl text-foreground mb-2">Components</h1>
      <p className="text-sm text-fg-secondary leading-relaxed mb-10 max-w-xl">
        Over 50 production-ready components built on Radix UI primitives and Tailwind CSS. All components use semantic design tokens so they adapt automatically to any theme.
      </p>

      {sections.map(section => (
        <div key={section.title} className="mt-10 pt-8 border-t border-border first:mt-0 first:pt-0 first:border-0">
          <h2 className="font-display font-extrabold text-xl text-foreground mb-4">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {section.items.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-[4px] border border-border bg-card p-4 hover:bg-surface hover:border-border-strong transition-colors"
              >
                <p className="text-sm font-semibold text-foreground mb-1">{item.name}</p>
                <p className="text-xs text-fg-secondary leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
