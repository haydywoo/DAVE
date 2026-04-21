export interface NavItem {
  title: string;
  href: string;
  badge?: 'new' | 'updated';
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const standardNavigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/getting-started' },
      { title: 'Theming',      href: '/docs/getting-started/theming' },
    ],
  },
  {
    title: 'Foundations',
    items: [
      { title: 'Colours',    href: '/docs/foundations/colours' },
      { title: 'Typography', href: '/docs/foundations/typography' },
      { title: 'Tokens',     href: '/docs/foundations/tokens' },
    ],
  },
  {
    title: 'Layout',
    items: [
      { title: 'Accordion',   href: '/docs/components/accordion' },
      { title: 'Card',        href: '/docs/components/card' },
      { title: 'Collapsible', href: '/docs/components/collapsible' },
      { title: 'Divider',     href: '/docs/components/divider' },
      { title: 'Tabs',        href: '/docs/components/tabs' },
    ],
  },
  {
    title: 'Navigation',
    items: [
      { title: 'Breadcrumb', href: '/docs/components/breadcrumb' },
      { title: 'Nav',        href: '/docs/components/nav' },
      { title: 'Navbar',     href: '/docs/components/navbar' },
      { title: 'Pagination', href: '/docs/components/pagination' },
      { title: 'Stepper',    href: '/docs/components/stepper' },
    ],
  },
  {
    title: 'Forms',
    items: [
      { title: 'Button',            href: '/docs/components/button' },
      { title: 'Form Field',        href: '/docs/components/form-field' },
      { title: 'Calendar',          href: '/docs/components/calendar' },
      { title: 'Checkbox',          href: '/docs/components/checkbox' },
      { title: 'Chip',              href: '/docs/components/chip' },
      { title: 'Combobox',          href: '/docs/components/combobox' },
      { title: 'Copy Button',       href: '/docs/components/copy-button' },
      { title: 'Date Picker',       href: '/docs/components/date-picker' },
      { title: 'Date Range Picker', href: '/docs/components/date-range-picker' },
      { title: 'Dropzone',          href: '/docs/components/dropzone' },
      { title: 'File Input',        href: '/docs/components/file-input' },
      { title: 'Input',             href: '/docs/components/input' },
      { title: 'Number Input',      href: '/docs/components/number-input' },
      { title: 'OTP Input',         href: '/docs/components/otp-input' },
      { title: 'Rating',            href: '/docs/components/rating' },
      { title: 'Radio',             href: '/docs/components/radio' },
      { title: 'Segmented Control', href: '/docs/components/segmented-control' },
      { title: 'Select',            href: '/docs/components/select' },
      { title: 'Slider',            href: '/docs/components/slider' },
      { title: 'Switch',            href: '/docs/components/switch' },
      { title: 'Tag Input',         href: '/docs/components/tag-input' },
      { title: 'Textarea',          href: '/docs/components/textarea' },
    ],
  },
  {
    title: 'Overlays',
    items: [
      { title: 'Alert Dialog', href: '/docs/components/alert-dialog' },
      { title: 'Command',      href: '/docs/components/command' },
      { title: 'Context Menu', href: '/docs/components/context-menu' },
      { title: 'Dialog',       href: '/docs/components/dialog' },
      { title: 'Drawer',       href: '/docs/components/drawer' },
      { title: 'Dropdown',     href: '/docs/components/dropdown' },
      { title: 'Popover',      href: '/docs/components/popover' },
      { title: 'Tooltip',      href: '/docs/components/tooltip' },
    ],
  },
  {
    title: 'Feedback',
    items: [
      { title: 'Alert',    href: '/docs/components/alert' },
      { title: 'Banner',   href: '/docs/components/banner',  badge: 'new' },
      { title: 'Progress', href: '/docs/components/progress' },
      { title: 'Skeleton', href: '/docs/components/skeleton' },
      { title: 'Spinner',  href: '/docs/components/spinner' },
      { title: 'Toast',    href: '/docs/components/toast' },
    ],
  },
  {
    title: 'Data Display',
    items: [
      { title: 'Avatar',      href: '/docs/components/avatar' },
      { title: 'Badge',       href: '/docs/components/badge',   badge: 'updated' },
      { title: 'DataList',    href: '/docs/components/data-list' },
      { title: 'DataTable',   href: '/docs/components/data-table' },
      { title: 'Empty State', href: '/docs/components/empty-state' },
      { title: 'Kbd',         href: '/docs/components/kbd' },
      { title: 'Stat',        href: '/docs/components/stat' },
      { title: 'Table',       href: '/docs/components/table' },
      { title: 'Timeline',    href: '/docs/components/timeline' },
    ],
  },
];

export const chartsNavigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Overview', href: '/docs/charts/overview' },
    ],
  },
  {
    title: 'Chart Types',
    items: [
      { title: 'Bar Chart',    href: '/docs/charts/bar-chart' },
      { title: 'Line Chart',   href: '/docs/charts/line-chart' },
      { title: 'Area Chart',   href: '/docs/charts/area-chart' },
      { title: 'Donut Chart',  href: '/docs/charts/donut-chart' },
      { title: 'Sparkline',    href: '/docs/charts/sparkline' },
      { title: 'Scatter Plot', href: '/docs/charts/scatter-plot' },
      { title: 'Combo Chart',  href: '/docs/charts/combo-chart' },
      { title: 'Radar Chart',  href: '/docs/charts/radar-chart' },
      { title: 'Funnel Chart', href: '/docs/charts/funnel-chart' },
    ],
  },
  {
    title: 'Experimental',
    items: [
      { title: 'Observable Plot',  href: '/docs/charts/observable-plot',         badge: 'new' },
      { title: 'Plot — Bar',       href: '/docs/charts/observable-plot/bar',      badge: 'new' },
      { title: 'Plot — Line',      href: '/docs/charts/observable-plot/line',     badge: 'new' },
      { title: 'Plot — Scatter',   href: '/docs/charts/observable-plot/scatter',  badge: 'new' },
      { title: 'Plot — Heatmap',   href: '/docs/charts/observable-plot/heatmap',  badge: 'new' },
    ],
  },
];

export const aiNavigation: NavSection[] = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Overview', href: '/docs/ai/overview' },
    ],
  },
  {
    title: 'Chat & Messaging',
    items: [
      { title: 'Chat Container',    href: '/docs/ai/chat-container' },
      { title: 'Message',           href: '/docs/ai/message' },
      { title: 'Message Input',     href: '/docs/ai/message-input' },
      { title: 'Conversation List', href: '/docs/ai/conversation-list' },
    ],
  },
  {
    title: 'Streaming & Generation',
    items: [
      { title: 'Code Block',     href: '/docs/ai/code-block' },
      { title: 'Streaming Text', href: '/docs/ai/streaming-text' },
      { title: 'Thinking Block', href: '/docs/ai/thinking-block' },
    ],
  },
  {
    title: 'Tools & Actions',
    items: [
      { title: 'Approval Gate',   href: '/docs/ai/approval-gate' },
      { title: 'File Attachment', href: '/docs/ai/file-attachment' },
      { title: 'Source Card',     href: '/docs/ai/source-card' },
      { title: 'Tool Call',       href: '/docs/ai/tool-call' },
    ],
  },
  {
    title: 'Controls',
    items: [
      { title: 'Feedback Bar',     href: '/docs/ai/feedback-bar' },
      { title: 'Model Selector',   href: '/docs/ai/model-selector' },
      { title: 'Suggestion Chips', href: '/docs/ai/suggestion-chips' },
    ],
  },
];

export function flatNav(sections: NavSection[]): NavItem[] {
  return sections.flatMap(s => s.items);
}
