'use client';

export { cn } from './lib/cn';

export { SegmentedControl } from './components/SegmentedControl/SegmentedControl';
export type { SegmentedControlProps, SegmentedControlOption, SegmentedControlSize } from './components/SegmentedControl/SegmentedControl';

export {
  FormField,
  FormLabel,
  FormControl,
  FormHint,
  FormSection,
  useFormField,
} from './components/FormField/FormField';
export type {
  FormFieldProps,
  FormLabelProps,
  FormControlProps,
  FormHintProps,
  FormSectionProps,
} from './components/FormField/FormField';

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandDialog,
} from './components/Command/Command';
export type {
  CommandProps,
  CommandInputProps,
  CommandGroupProps,
  CommandItemProps,
  CommandDialogProps,
} from './components/Command/Command';

export { Kbd } from './components/Kbd/Kbd';
export type { KbdProps, KbdSize } from './components/Kbd/Kbd';

export { TagInput } from './components/TagInput/TagInput';
export type { TagInputProps, TagInputSize } from './components/TagInput/TagInput';

export { CopyButton } from './components/CopyButton/CopyButton';
export type { CopyButtonProps, CopyButtonSize, CopyButtonVariant } from './components/CopyButton/CopyButton';

export { Collapsible, CollapsibleTrigger, CollapsibleContent } from './components/Collapsible/Collapsible';
export type { CollapsibleProps, CollapsibleTriggerProps, CollapsibleContentProps } from './components/Collapsible/Collapsible';

export { Dropzone } from './components/Dropzone/Dropzone';
export type { DropzoneProps } from './components/Dropzone/Dropzone';

export { Divider } from './components/Divider/Divider';
export type { DividerProps, DividerOrientation } from './components/Divider/Divider';

export { Calendar } from './components/Calendar/Calendar';
export type { CalendarProps } from './components/Calendar/Calendar';

export { DatePicker } from './components/DatePicker/DatePicker';
export type { DatePickerProps, DatePickerSize } from './components/DatePicker/DatePicker';

export { DateRangePicker, RangeCalendar } from './components/DateRangePicker/DateRangePicker';
export type { DateRangePickerProps, DateRangePickerSize, RangeCalendarProps, DateRange } from './components/DateRangePicker/DateRangePicker';

export { Timeline, TimelineItem } from './components/Timeline/Timeline';
export type { TimelineProps, TimelineItemProps } from './components/Timeline/Timeline';

export { DataTable } from './components/DataTable/DataTable';
export type { DataTableProps, ColumnDef, SortDir } from './components/DataTable/DataTable';

export { DataList, DataListItem, DataListLabel, DataListValue } from './components/DataList/DataList';
export type { DataListProps, DataListItemProps, DataListLabelProps, DataListValueProps, DataListOrientation, DataListSize } from './components/DataList/DataList';

export { Slider } from './components/Slider/Slider';
export type { SliderProps, SliderSize } from './components/Slider/Slider';

export { NumberInput } from './components/NumberInput/NumberInput';
export type { NumberInputProps, NumberInputSize } from './components/NumberInput/NumberInput';

export { Stepper } from './components/Stepper/Stepper';
export type { StepperProps, Step, StepStatus, StepperOrientation } from './components/Stepper/Stepper';

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from './components/ContextMenu/ContextMenu';
export type {
  ContextMenuContentProps,
  ContextMenuItemProps,
  ContextMenuCheckboxItemProps,
  ContextMenuRadioItemProps,
} from './components/ContextMenu/ContextMenu';

export { Combobox } from './components/Combobox/Combobox';
export type { ComboboxProps, ComboboxOption, ComboboxGroup, ComboboxSize } from './components/Combobox/Combobox';

export { EmptyState } from './components/EmptyState/EmptyState';
export type { EmptyStateProps } from './components/EmptyState/EmptyState';

export { Stat } from './components/Stat/Stat';
export type { StatProps } from './components/Stat/Stat';

export {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarActions,
  NavbarLink,
  NavbarDivider,
  NavbarSearch,
  NavbarMenuButton,
  NavbarMobileMenu,
  NavbarMobileLink,
} from './components/Navbar/Navbar';
export type {
  NavbarProps,
  NavbarColor,
  NavbarContentProps,
  NavbarActionsProps,
  NavbarLinkProps,
  NavbarSearchProps,
  NavbarMenuButtonProps,
  NavbarMobileMenuProps,
  NavbarMobileLinkProps,
} from './components/Navbar/Navbar';

export { Nav, NavSection, NavItem, NavGroup, NavSeparator } from './components/Nav/Nav';
export type { NavProps, NavSize, NavSectionProps, NavItemProps, NavGroupProps } from './components/Nav/Nav';

export { Drawer, DrawerTrigger, DrawerClose, DrawerContent, DrawerOverlay, DrawerHeader, DrawerTitle, DrawerDescription, DrawerBody, DrawerFooter } from './components/Drawer/Drawer';
export type { DrawerContentProps, DrawerSide } from './components/Drawer/Drawer';

export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbEllipsis } from './components/Breadcrumb/Breadcrumb';
export type { BreadcrumbProps, BreadcrumbItemProps, BreadcrumbLinkProps, BreadcrumbSeparatorProps } from './components/Breadcrumb/Breadcrumb';

export { Button } from './components/Button/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button/Button';

export { Input } from './components/Input/Input';
export type { InputProps, InputSize } from './components/Input/Input';

export { FileInput } from './components/FileInput/FileInput';
export type { FileInputProps, FileInputSize } from './components/FileInput/FileInput';

export { OTPInput } from './components/OTPInput/OTPInput';
export type { OTPInputProps, OTPInputSize } from './components/OTPInput/OTPInput';

export { Rating } from './components/Rating/Rating';
export type { RatingProps, RatingSize } from './components/Rating/Rating';

export { Badge } from './components/Badge/Badge';
export type { BadgeProps, BadgeVariant, BadgeSize } from './components/Badge/Badge';

export { Checkbox } from './components/Checkbox/Checkbox';
export type { CheckboxProps } from './components/Checkbox/Checkbox';


export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardDivider,
  CardImage,
} from './components/Card/Card';
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
  CardImageProps,
} from './components/Card/Card';

export { Callout } from './components/Callout/Callout';
export type { CalloutProps } from './components/Callout/Callout';

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './components/Accordion/Accordion';
export type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from './components/Accordion/Accordion';

export { Alert } from './components/Alert/Alert';
export type { AlertProps, AlertVariant } from './components/Alert/Alert';

export { Banner } from './components/Banner/Banner';
export type { BannerProps, BannerVariant, BannerAction } from './components/Banner/Banner';

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from './components/AlertDialog/AlertDialog';
export type { AlertDialogContentProps, AlertDialogActionProps } from './components/AlertDialog/AlertDialog';

export {
  Avatar,
  AvatarGroup,
} from './components/Avatar/Avatar';
export type {
  AvatarProps,
  AvatarGroupProps,
  AvatarSize,
  AvatarShape,
  AvatarStatus,
} from './components/Avatar/Avatar';

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownLabel,
  DropdownSeparator,
  DropdownGroup,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
} from './components/Dropdown/Dropdown';
export type {
  DropdownContentProps,
  DropdownItemProps,
  DropdownCheckboxItemProps,
  DropdownRadioItemProps,
} from './components/Dropdown/Dropdown';

export { Chip } from './components/Chip/Chip';
export type { ChipProps, ChipVariant, ChipSize } from './components/Chip/Chip';

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
  DialogClose,
} from './components/Dialog/Dialog';
export type { DialogContentProps, DialogSize } from './components/Dialog/Dialog';

export {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectField,
} from './components/Select/Select';
export type { SelectProps, SelectItemProps, SelectFieldProps, SelectSize } from './components/Select/Select';

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './components/Tabs/Tabs';
export type { TabsListProps, TabsTriggerProps, TabsContentProps, TabsVariant } from './components/Tabs/Tabs';

export { RadioGroup, RadioItem } from './components/Radio/Radio';
export type { RadioGroupProps, RadioItemProps } from './components/Radio/Radio';

export { Switch } from './components/Switch/Switch';
export type { SwitchProps, SwitchSize } from './components/Switch/Switch';

export { Spinner } from './components/Spinner/Spinner';
export type { SpinnerProps, SpinnerSize } from './components/Spinner/Spinner';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from './components/Table/Table';
export type {
  TableProps,
  TableRowProps,
  TableHeadProps,
  TableCellProps,
  SortDirection,
} from './components/Table/Table';

export { Skeleton } from './components/Skeleton/Skeleton';
export type { SkeletonProps } from './components/Skeleton/Skeleton';

export { List, ListItem } from './components/List/List';
export type { ListProps, ListItemProps, ListSize } from './components/List/List';

export { Pagination, PageSizeSelect } from './components/Pagination/Pagination';
export type { PaginationProps, PageSizeSelectProps } from './components/Pagination/Pagination';

export { Progress } from './components/Progress/Progress';
export type { ProgressProps, ProgressSize, ProgressVariant } from './components/Progress/Progress';

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  PopoverAnchor,
} from './components/Popover/Popover';
export type { PopoverContentProps, PopoverSide, PopoverAlign } from './components/Popover/Popover';

export { Tooltip } from './components/Tooltip/Tooltip';
export type { TooltipProps, TooltipSide } from './components/Tooltip/Tooltip';

export { Textarea } from './components/Textarea/Textarea';
export type { TextareaProps } from './components/Textarea/Textarea';

export {
  ToastProvider,
  ToastProviderWithHook,
  ToastViewport,
  Toast,
  ToastAction,
  useToast,
} from './components/Toast/Toast';
export type { ToastProps, ToastVariant, ToastOptions, ToastActionProps } from './components/Toast/Toast';

// ─── AI Components ────────────────────────────────────────────────────────────

export { CodeBlock } from './components/ai/CodeBlock/CodeBlock';
export type { CodeBlockProps } from './components/ai/CodeBlock/CodeBlock';

export { StreamingText } from './components/ai/StreamingText/StreamingText';
export type { StreamingTextProps } from './components/ai/StreamingText/StreamingText';

export { ThinkingBlock } from './components/ai/ThinkingBlock/ThinkingBlock';
export type { ThinkingBlockProps } from './components/ai/ThinkingBlock/ThinkingBlock';

export { ToolCall, ToolResult } from './components/ai/ToolCall/ToolCall';
export type { ToolCallProps, ToolResultProps, ToolStatus } from './components/ai/ToolCall/ToolCall';

export { FileAttachment } from './components/ai/FileAttachment/FileAttachment';
export type { FileAttachmentProps } from './components/ai/FileAttachment/FileAttachment';

export { FeedbackBar } from './components/ai/FeedbackBar/FeedbackBar';
export type { FeedbackBarProps } from './components/ai/FeedbackBar/FeedbackBar';

export { SuggestionChips } from './components/ai/SuggestionChips/SuggestionChips';
export type { SuggestionChipsProps, SuggestionChip } from './components/ai/SuggestionChips/SuggestionChips';

export { ModelSelector } from './components/ai/ModelSelector/ModelSelector';
export type { ModelSelectorProps, AIModel, ModelGroup } from './components/ai/ModelSelector/ModelSelector';

export { SourceCard } from './components/ai/SourceCard/SourceCard';
export type { SourceCardProps } from './components/ai/SourceCard/SourceCard';

export { ApprovalGate } from './components/ai/ApprovalGate/ApprovalGate';
export type { ApprovalGateProps } from './components/ai/ApprovalGate/ApprovalGate';

export { Message } from './components/ai/Message/Message';
export type { MessageProps, MessageRole } from './components/ai/Message/Message';

export { MessageInput } from './components/ai/MessageInput/MessageInput';
export type { MessageInputProps, AttachedFile } from './components/ai/MessageInput/MessageInput';

export { ChatContainer } from './components/ai/ChatContainer/ChatContainer';
export type { ChatContainerProps } from './components/ai/ChatContainer/ChatContainer';

export { ConversationList } from './components/ai/ConversationList/ConversationList';
export type { ConversationListProps, Conversation, ConversationGroup } from './components/ai/ConversationList/ConversationList';
