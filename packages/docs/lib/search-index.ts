export interface SearchItem {
  title: string;
  href: string;
  group: string;
  keywords: string;
}

export const searchIndex: SearchItem[] = [
  // Layout
  { title: 'Accordion',    href: '/docs/components/accordion',    group: 'Layout',       keywords: 'collapse expand collapsible disclosure panels sections' },
  { title: 'Collapsible',  href: '/docs/components/collapsible',  group: 'Layout',       keywords: 'collapsible toggle show hide expand collapse faq panel section' },
  { title: 'Divider',      href: '/docs/components/divider',      group: 'Layout',       keywords: 'divider separator line horizontal vertical rule section label' },
  { title: 'Card',         href: '/docs/components/card',         group: 'Layout',       keywords: 'container surface panel box wrapper' },
  { title: 'Tabs',         href: '/docs/components/tabs',         group: 'Layout',       keywords: 'tab panel switcher segmented sections' },

  // Navigation
  { title: 'Breadcrumb',   href: '/docs/components/breadcrumb',   group: 'Navigation',   keywords: 'breadcrumb trail path navigation location hierarchy' },
  { title: 'Navbar',       href: '/docs/components/navbar',       group: 'Navigation',   keywords: 'navbar navigation bar header nav links brand logo sticky' },
  { title: 'Pagination',   href: '/docs/components/pagination',   group: 'Navigation',   keywords: 'pages paging next previous page numbers' },
  { title: 'Stepper',      href: '/docs/components/stepper',      group: 'Navigation',   keywords: 'stepper steps wizard progress multi-step flow onboarding' },

  // Forms
  { title: 'Button',       href: '/docs/components/button',       group: 'Forms',        keywords: 'button click action primary secondary ghost link cta submit' },
  { title: 'Calendar',     href: '/docs/components/calendar',     group: 'Forms',        keywords: 'calendar date pick month grid day week navigation' },
  { title: 'Date Picker',  href: '/docs/components/date-picker',  group: 'Forms',        keywords: 'date picker datepicker input calendar popover format date-fns' },
  { title: 'Copy Button',  href: '/docs/components/copy-button',  group: 'Forms',        keywords: 'copy button clipboard copy-to-clipboard code snippet text' },
  { title: 'Dropzone',     href: '/docs/components/dropzone',     group: 'Forms',        keywords: 'dropzone file upload drag drop input attachment document image' },
  { title: 'Combobox',     href: '/docs/components/combobox',     group: 'Forms',        keywords: 'combobox searchable select autocomplete filter dropdown grouped options' },
  { title: 'Checkbox',     href: '/docs/components/checkbox',     group: 'Forms',        keywords: 'checkbox tick check boolean toggle input form' },
  { title: 'Chip',         href: '/docs/components/chip',         group: 'Forms',        keywords: 'chip tag filter pill label removable selectable' },
  { title: 'Input',        href: '/docs/components/input',        group: 'Forms',        keywords: 'input text field form email search password addon icon' },
  { title: 'Number Input', href: '/docs/components/number-input', group: 'Forms',        keywords: 'number input increment decrement stepper quantity counter spin' },
  { title: 'Radio',        href: '/docs/components/radio',        group: 'Forms',        keywords: 'radio button select one option group choice' },
  { title: 'Select',       href: '/docs/components/select',       group: 'Forms',        keywords: 'select dropdown pick option list choose' },
  { title: 'Slider',       href: '/docs/components/slider',       group: 'Forms',        keywords: 'slider range input drag thumb track min max value' },
  { title: 'Switch',       href: '/docs/components/switch',       group: 'Forms',        keywords: 'switch toggle on off boolean enable disable' },
  { title: 'Tag Input',    href: '/docs/components/tag-input',    group: 'Forms',        keywords: 'tag input multi-value tags tokens chips labels add remove paste' },
  { title: 'Textarea',     href: '/docs/components/textarea',     group: 'Forms',        keywords: 'textarea multiline text input long form message' },

  // Overlays
  { title: 'Alert Dialog',  href: '/docs/components/alert-dialog',  group: 'Overlays',     keywords: 'alert dialog modal confirm destructive delete warning interrupt' },
  { title: 'Context Menu',  href: '/docs/components/context-menu',  group: 'Overlays',     keywords: 'context menu right-click actions contextual surface trigger' },
  { title: 'Dialog',       href: '/docs/components/dialog',       group: 'Overlays',     keywords: 'dialog modal overlay popup form detail' },
  { title: 'Drawer',       href: '/docs/components/drawer',       group: 'Overlays',     keywords: 'drawer side panel slide settings filter detail sheet mobile navigation' },
  { title: 'Dropdown',     href: '/docs/components/dropdown',     group: 'Overlays',     keywords: 'dropdown menu context actions list items' },
  { title: 'Popover',      href: '/docs/components/popover',      group: 'Overlays',     keywords: 'popover floating panel tooltip-like content anchor' },
  { title: 'Tooltip',      href: '/docs/components/tooltip',      group: 'Overlays',     keywords: 'tooltip hint label hover description' },

  // Feedback
  { title: 'Alert',        href: '/docs/components/alert',        group: 'Feedback',     keywords: 'alert banner message info warning error success notification' },
  { title: 'Progress',     href: '/docs/components/progress',     group: 'Feedback',     keywords: 'progress bar loading percent complete track' },
  { title: 'Skeleton',     href: '/docs/components/skeleton',     group: 'Feedback',     keywords: 'skeleton loading placeholder shimmer pulse ghost' },
  { title: 'Spinner',      href: '/docs/components/spinner',      group: 'Feedback',     keywords: 'spinner loading indicator busy wait' },
  { title: 'Toast',        href: '/docs/components/toast',        group: 'Feedback',     keywords: 'toast notification snackbar message success error' },

  // Data Display
  { title: 'Avatar',       href: '/docs/components/avatar',       group: 'Data Display', keywords: 'avatar user profile picture initials image group' },
  { title: 'Kbd',          href: '/docs/components/kbd',          group: 'Data Display', keywords: 'kbd keyboard key shortcut hotkey combo binding' },
  { title: 'DataTable',   href: '/docs/components/data-table',   group: 'Data Display', keywords: 'datatable data table grid sort filter pagination selection rows columns' },
  { title: 'Badge',        href: '/docs/components/badge',        group: 'Data Display', keywords: 'badge label tag status pill count number indicator' },
  { title: 'Empty State',  href: '/docs/components/empty-state',  group: 'Data Display', keywords: 'empty state placeholder no results blank zero content missing' },
  { title: 'Stat',         href: '/docs/components/stat',         group: 'Data Display', keywords: 'stat metric kpi number trend change dashboard analytics card' },
  { title: 'Table',        href: '/docs/components/table',        group: 'Data Display', keywords: 'table data grid rows columns sort zebra select pagination' },
  { title: 'Timeline',     href: '/docs/components/timeline',     group: 'Data Display', keywords: 'timeline activity feed audit log events history chronological track' },
];
