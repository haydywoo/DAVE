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
  { title: 'Nav',          href: '/docs/components/nav',          group: 'Navigation',   keywords: 'nav menu sidebar navigation vertical items sections groups collapsible icons badges' },
  { title: 'Navbar',       href: '/docs/components/navbar',       group: 'Navigation',   keywords: 'navbar navigation bar header nav links brand logo sticky search mobile hamburger' },
  { title: 'Pagination',   href: '/docs/components/pagination',   group: 'Navigation',   keywords: 'pages paging next previous page numbers' },
  { title: 'Stepper',      href: '/docs/components/stepper',      group: 'Navigation',   keywords: 'stepper steps wizard progress multi-step flow onboarding' },

  // Forms
  { title: 'Button',       href: '/docs/components/button',       group: 'Forms',        keywords: 'button click action primary secondary ghost link cta submit' },
  { title: 'Form Field',   href: '/docs/components/form-field',   group: 'Forms',        keywords: 'form field label hint error required control wrapper validation accessibility' },
  { title: 'Calendar',     href: '/docs/components/calendar',     group: 'Forms',        keywords: 'calendar date pick month grid day week navigation' },
  { title: 'Date Picker',        href: '/docs/components/date-picker',        group: 'Forms', keywords: 'date picker datepicker input calendar popover format date-fns' },
  { title: 'Date Range Picker', href: '/docs/components/date-range-picker', group: 'Forms', keywords: 'date range picker daterangepicker from to interval calendar popover date-fns' },
  { title: 'Copy Button',  href: '/docs/components/copy-button',  group: 'Forms',        keywords: 'copy button clipboard copy-to-clipboard code snippet text' },
  { title: 'Dropzone',     href: '/docs/components/dropzone',     group: 'Forms',        keywords: 'dropzone file upload drag drop input attachment document image' },
  { title: 'Combobox',     href: '/docs/components/combobox',     group: 'Forms',        keywords: 'combobox searchable select autocomplete filter dropdown grouped options' },
  { title: 'Checkbox',     href: '/docs/components/checkbox',     group: 'Forms',        keywords: 'checkbox tick check boolean toggle input form' },
  { title: 'Chip',         href: '/docs/components/chip',         group: 'Forms',        keywords: 'chip tag filter pill label removable selectable' },
  { title: 'Input',        href: '/docs/components/input',        group: 'Forms',        keywords: 'input text field form email search password addon icon' },
  { title: 'Number Input', href: '/docs/components/number-input', group: 'Forms',        keywords: 'number input increment decrement stepper quantity counter spin' },
  { title: 'Radio',        href: '/docs/components/radio',        group: 'Forms',        keywords: 'radio button select one option group choice' },
  { title: 'Segmented Control', href: '/docs/components/segmented-control', group: 'Forms', keywords: 'segmented control toggle button group radio switch view mode filter tabs' },
  { title: 'Select',       href: '/docs/components/select',       group: 'Forms',        keywords: 'select dropdown pick option list choose' },
  { title: 'Slider',       href: '/docs/components/slider',       group: 'Forms',        keywords: 'slider range input drag thumb track min max value' },
  { title: 'Switch',       href: '/docs/components/switch',       group: 'Forms',        keywords: 'switch toggle on off boolean enable disable' },
  { title: 'Tag Input',    href: '/docs/components/tag-input',    group: 'Forms',        keywords: 'tag input multi-value tags tokens chips labels add remove paste' },
  { title: 'Textarea',     href: '/docs/components/textarea',     group: 'Forms',        keywords: 'textarea multiline text input long form message' },

  // Overlays
  { title: 'Alert Dialog',  href: '/docs/components/alert-dialog',  group: 'Overlays',     keywords: 'alert dialog modal confirm destructive delete warning interrupt' },
  { title: 'Command',       href: '/docs/components/command',       group: 'Overlays',     keywords: 'command palette spotlight search cmdk keyboard shortcut actions navigation dialog' },
  { title: 'Context Menu',  href: '/docs/components/context-menu',  group: 'Overlays',     keywords: 'context menu right-click actions contextual surface trigger' },
  { title: 'Dialog',       href: '/docs/components/dialog',       group: 'Overlays',     keywords: 'dialog modal overlay popup form detail' },
  { title: 'Drawer',       href: '/docs/components/drawer',       group: 'Overlays',     keywords: 'drawer side panel slide settings filter detail sheet mobile navigation' },
  { title: 'Dropdown',     href: '/docs/components/dropdown',     group: 'Overlays',     keywords: 'dropdown menu context actions list items' },
  { title: 'Popover',      href: '/docs/components/popover',      group: 'Overlays',     keywords: 'popover floating panel tooltip-like content anchor' },
  { title: 'Tooltip',      href: '/docs/components/tooltip',      group: 'Overlays',     keywords: 'tooltip hint label hover description' },

  // Feedback
  { title: 'Alert',        href: '/docs/components/alert',        group: 'Feedback',     keywords: 'alert banner message info warning error success notification' },
  { title: 'Banner',       href: '/docs/components/banner',       group: 'Feedback',     keywords: 'banner announcement notification outage maintenance warning system status dismissable fixed top' },
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
  { title: 'DataList',    href: '/docs/components/data-list',    group: 'Data Display', keywords: 'datalist data list label value pairs key metadata description' },
  { title: 'List',        href: '/docs/components/list',         group: 'Data Display', keywords: 'list items rows unordered ordered bulleted divided settings activity feed inbox' },
  { title: 'File Input',  href: '/docs/components/file-input',   group: 'Forms',        keywords: 'file input upload browse attachment select document image' },
  { title: 'OTP Input',   href: '/docs/components/otp-input',    group: 'Forms',        keywords: 'otp one-time password pin code verification input 2fa auth' },
  { title: 'Rating',      href: '/docs/components/rating',       group: 'Forms',        keywords: 'rating stars score review feedback vote' },

  // Charts
  { title: 'Bar Chart',    href: '/docs/charts/bar-chart',    group: 'Charts', keywords: 'bar chart column grouped stacked horizontal vertical comparison' },
  { title: 'Line Chart',   href: '/docs/charts/line-chart',   group: 'Charts', keywords: 'line chart trend over time series continuous data' },
  { title: 'Area Chart',   href: '/docs/charts/area-chart',   group: 'Charts', keywords: 'area chart filled line cumulative stacked trend' },
  { title: 'Donut Chart',  href: '/docs/charts/donut-chart',  group: 'Charts', keywords: 'donut chart pie ring proportion percentage distribution' },
  { title: 'Sparkline',    href: '/docs/charts/sparkline',    group: 'Charts', keywords: 'sparkline mini chart inline trend small compact' },
  { title: 'Scatter Plot', href: '/docs/charts/scatter-plot', group: 'Charts', keywords: 'scatter plot correlation data points xy bubble distribution' },
  { title: 'Combo Chart',  href: '/docs/charts/combo-chart',  group: 'Charts', keywords: 'combo chart combined bar line dual axis mixed' },
  { title: 'Radar Chart',  href: '/docs/charts/radar-chart',  group: 'Charts', keywords: 'radar spider web chart comparison multi-axis polygon' },
  { title: 'Funnel Chart', href: '/docs/charts/funnel-chart', group: 'Charts', keywords: 'funnel chart conversion pipeline stages drop-off' },

  // AI
  { title: 'Chat Container',    href: '/docs/ai/chat-container',    group: 'AI', keywords: 'chat container scroll messages list auto-scroll jump bottom' },
  { title: 'Message',           href: '/docs/ai/message',           group: 'AI', keywords: 'message chat bubble user assistant system role markdown avatar' },
  { title: 'Message Input',     href: '/docs/ai/message-input',     group: 'AI', keywords: 'message input chat send textarea auto-grow stop attachments toolbar' },
  { title: 'Conversation List', href: '/docs/ai/conversation-list', group: 'AI', keywords: 'conversation list sidebar history past chats grouped delete unread' },
  { title: 'Code Block',        href: '/docs/ai/code-block',        group: 'AI', keywords: 'code block syntax highlight copy language label ai output' },
  { title: 'Streaming Text',    href: '/docs/ai/streaming-text',    group: 'AI', keywords: 'streaming text cursor blinking animation typewriter generation' },
  { title: 'Thinking Block',    href: '/docs/ai/thinking-block',    group: 'AI', keywords: 'thinking block reasoning collapsible model chain of thought' },
  { title: 'Approval Gate',     href: '/docs/ai/approval-gate',     group: 'AI', keywords: 'approval gate human in the loop confirm tool call agent action' },
  { title: 'File Attachment',   href: '/docs/ai/file-attachment',   group: 'AI', keywords: 'file attachment chip thumbnail remove upload ai message' },
  { title: 'Source Card',       href: '/docs/ai/source-card',       group: 'AI', keywords: 'source card citation reference link favicon domain snippet rag' },
  { title: 'Tool Call',         href: '/docs/ai/tool-call',         group: 'AI', keywords: 'tool call function result collapsible agent action status' },
  { title: 'Feedback Bar',      href: '/docs/ai/feedback-bar',      group: 'AI', keywords: 'feedback bar thumbs up down copy regenerate assistant message actions' },
  { title: 'Model Selector',    href: '/docs/ai/model-selector',    group: 'AI', keywords: 'model selector dropdown ai switch gpt claude gemini llm badge group' },
  { title: 'Suggestion Chips',  href: '/docs/ai/suggestion-chips',  group: 'AI', keywords: 'suggestion chips prompts quick actions pill input starters' },
];
