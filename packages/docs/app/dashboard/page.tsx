'use client';

import * as React from 'react';
import {
  Card, CardHeader, CardTitle, CardContent,
  Stat,
  Badge,
  Avatar,
  Button,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Select, SelectItem,
  Alert,
  Progress,
  Timeline, TimelineItem,
  Input,
  SegmentedControl,
  DateRangePicker,
  DataTable,
} from '@dave/react';
import type { DateRange, ColumnDef } from '@dave/react';
import { AreaChart, BarChart, DonutChart, Sparkline } from '@dave/charts';

// ─── Mock data ────────────────────────────────────────────────────────────────

const revenueWeekly = [
  { date: 'Mon', Revenue: 12400, Target: 11000 },
  { date: 'Tue', Revenue: 15800, Target: 13000 },
  { date: 'Wed', Revenue: 13200, Target: 13000 },
  { date: 'Thu', Revenue: 17900, Target: 14000 },
  { date: 'Fri', Revenue: 21300, Target: 15000 },
  { date: 'Sat', Revenue: 19100, Target: 14000 },
  { date: 'Sun', Revenue: 16400, Target: 12000 },
];

const revenueMonthly = [
  { date: 'Jan', Revenue: 98000,  Target: 90000  },
  { date: 'Feb', Revenue: 112000, Target: 95000  },
  { date: 'Mar', Revenue: 107000, Target: 100000 },
  { date: 'Apr', Revenue: 134000, Target: 110000 },
  { date: 'May', Revenue: 128000, Target: 115000 },
  { date: 'Jun', Revenue: 149000, Target: 120000 },
  { date: 'Jul', Revenue: 162000, Target: 130000 },
  { date: 'Aug', Revenue: 155000, Target: 135000 },
  { date: 'Sep', Revenue: 171000, Target: 140000 },
  { date: 'Oct', Revenue: 184000, Target: 150000 },
  { date: 'Nov', Revenue: 178000, Target: 155000 },
  { date: 'Dec', Revenue: 203000, Target: 160000 },
];

const revenueQuarterly = [
  { date: 'Q1', Revenue: 317000, Target: 285000 },
  { date: 'Q2', Revenue: 411000, Target: 345000 },
  { date: 'Q3', Revenue: 488000, Target: 405000 },
  { date: 'Q4', Revenue: 565000, Target: 465000 },
];

const channelData = [
  { channel: 'Organic', Revenue: 48200, Leads: 1240 },
  { channel: 'Paid',    Revenue: 37100, Leads: 890  },
  { channel: 'Email',   Revenue: 28400, Leads: 620  },
  { channel: 'Social',  Revenue: 19800, Leads: 410  },
  { channel: 'Direct',  Revenue: 14600, Leads: 290  },
];

const sourceData = [
  { name: 'Organic Search', value: 38 },
  { name: 'Paid Ads',       value: 27 },
  { name: 'Email',          value: 18 },
  { name: 'Social',         value: 11 },
  { name: 'Direct',         value: 6  },
];

const sparkRevenue  = [8200, 9100, 8700, 10400, 12100, 11600, 13200, 14800, 13900, 15800, 16400, 18200];
const sparkUsers    = [420, 390, 445, 480, 510, 490, 530, 570, 555, 600, 625, 668];
const sparkConv     = [2.1, 2.3, 2.0, 2.4, 2.6, 2.5, 2.8, 2.7, 2.9, 3.0, 2.8, 3.1];
const sparkAvgOrder = [142, 138, 151, 147, 155, 160, 158, 163, 169, 165, 172, 168];

type Transaction = {
  id: string;
  customer: string;
  avatar: string;
  email: string;
  status: 'completed' | 'pending' | 'failed';
  amount: number;
  category: string;
  date: string;
};

const ALL_TRANSACTIONS: Transaction[] = [
  { id: 'TXN-0091', customer: 'Mara Hoffman',     avatar: 'MH', email: 'mara@example.com',    status: 'completed', amount: 1240.00, category: 'Enterprise', date: '18 Apr 2026' },
  { id: 'TXN-0090', customer: 'James Okafor',     avatar: 'JO', email: 'james@example.com',   status: 'completed', amount:  389.00, category: 'Pro',        date: '18 Apr 2026' },
  { id: 'TXN-0089', customer: 'Lena Schwartz',    avatar: 'LS', email: 'lena@example.com',    status: 'pending',   amount:  820.00, category: 'Enterprise', date: '17 Apr 2026' },
  { id: 'TXN-0088', customer: 'Tom Birch',        avatar: 'TB', email: 'tom@example.com',     status: 'completed', amount:   49.00, category: 'Starter',    date: '17 Apr 2026' },
  { id: 'TXN-0087', customer: 'Priya Nair',       avatar: 'PN', email: 'priya@example.com',   status: 'failed',    amount:  720.00, category: 'Pro',        date: '16 Apr 2026' },
  { id: 'TXN-0086', customer: 'Carlos Mendez',    avatar: 'CM', email: 'carlos@example.com',  status: 'completed', amount: 1240.00, category: 'Enterprise', date: '16 Apr 2026' },
  { id: 'TXN-0085', customer: 'Yuki Tanaka',      avatar: 'YT', email: 'yuki@example.com',    status: 'completed', amount:  389.00, category: 'Pro',        date: '15 Apr 2026' },
  { id: 'TXN-0084', customer: 'Fatima Al-Rashid', avatar: 'FA', email: 'fatima@example.com',  status: 'pending',   amount:  820.00, category: 'Enterprise', date: '15 Apr 2026' },
  { id: 'TXN-0083', customer: 'Noah Bergmann',    avatar: 'NB', email: 'noah@example.com',    status: 'failed',    amount:  389.00, category: 'Pro',        date: '14 Apr 2026' },
  { id: 'TXN-0082', customer: 'Amara Diallo',     avatar: 'AD', email: 'amara@example.com',   status: 'completed', amount:   49.00, category: 'Starter',    date: '14 Apr 2026' },
  { id: 'TXN-0081', customer: 'Kenji Watanabe',   avatar: 'KW', email: 'kenji@example.com',   status: 'completed', amount: 1240.00, category: 'Enterprise', date: '13 Apr 2026' },
  { id: 'TXN-0080', customer: 'Sofia Reyes',      avatar: 'SR', email: 'sofia@example.com',   status: 'pending',   amount:  389.00, category: 'Pro',        date: '13 Apr 2026' },
];

const statusVariant: Record<Transaction['status'], 'success' | 'warning' | 'error'> = {
  completed: 'success',
  pending:   'warning',
  failed:    'error',
};

const columns: ColumnDef<Transaction>[] = [
  {
    key: 'customer',
    header: 'Customer',
    cell: (row) => (
      <div className="flex items-center gap-2.5">
        <Avatar fallback={row.avatar} size="sm" />
        <div className="min-w-0">
          <p className="font-medium text-foreground truncate">{row.customer}</p>
          <p className="text-xs text-fg-secondary truncate">{row.email}</p>
        </div>
      </div>
    ),
  },
  {
    key: 'id',
    header: 'Transaction',
    cell: (row) => <span className="font-code text-xs text-fg-secondary">{row.id}</span>,
  },
  {
    key: 'category',
    header: 'Plan',
    cell: (row) => <span className="text-foreground">{row.category}</span>,
  },
  {
    key: 'status',
    header: 'Status',
    cell: (row) => (
      <Badge variant={statusVariant[row.status]} size="sm">
        {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
      </Badge>
    ),
  },
  {
    key: 'amount',
    header: 'Amount',
    align: 'right',
    sortable: true,
    cell: (row) => (
      <span className="font-semibold text-foreground tabular-nums">
        ${row.amount.toFixed(2)}
      </span>
    ),
  },
  {
    key: 'date',
    header: 'Date',
    cell: (row) => <span className="text-fg-secondary">{row.date}</span>,
  },
];

// ─── Goals data ───────────────────────────────────────────────────────────────

const goals = [
  { label: 'Annual revenue',     current: 1781000, target: 2000000, format: (v: number) => `$${(v / 1000).toFixed(0)}k`, variant: 'default'  as const },
  { label: 'New customers',      current: 412,      target: 600,     format: (v: number) => `${v}`,                       variant: 'default'  as const },
  { label: 'Churn rate',         current: 2.1,      target: 3.0,     format: (v: number) => `${v}%`,                      variant: 'success'  as const, inverse: true },
  { label: 'NPS score',          current: 61,       target: 70,      format: (v: number) => `${v}`,                       variant: 'default'  as const },
];

// ─── Activity feed data ───────────────────────────────────────────────────────

const activityItems = [
  { color: 'success' as const, title: 'Enterprise plan purchased', description: 'Mara Hoffman upgraded from Pro', time: '2m ago' },
  { color: 'error'   as const, title: 'Payment failed',            description: 'Priya Nair — $720.00 declined',  time: '18m ago' },
  { color: 'info'    as const, title: 'New user signup',           description: 'noah@bergmann.io joined',        time: '1h ago' },
  { color: 'success' as const, title: 'Milestone reached',         description: 'April MRR exceeded target',      time: '2h ago' },
  { color: 'warning' as const, title: 'Subscription expiring',     description: 'Fatima Al-Rashid — renews in 3d', time: '3h ago' },
  { color: 'info'    as const, title: 'Feature flag enabled',      description: 'New onboarding flow live',       time: '5h ago' },
  { color: 'error'   as const, title: 'Refund processed',          description: 'Tom Birch — $49.00 refunded',   time: '7h ago' },
  { color: 'success' as const, title: 'API integration connected', description: 'Kenji Watanabe linked Stripe',   time: 'Yesterday' },
];

// ─── Dashboard ────────────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [period, setPeriod]               = React.useState('monthly');
  const [channelMetric, setChannelMetric] = React.useState('Revenue');
  const [alertDismissed, setAlertDismissed] = React.useState(false);
  const [dateRange, setDateRange]         = React.useState<DateRange>({
    from: new Date(2026, 0, 1),
    to:   new Date(2026, 3, 19),
  });
  const [txSearch, setTxSearch]           = React.useState('');
  const [txStatus, setTxStatus]           = React.useState('all');

  const revenueData =
    period === 'weekly'    ? revenueWeekly :
    period === 'quarterly' ? revenueQuarterly :
    revenueMonthly;

  const filteredTransactions = ALL_TRANSACTIONS.filter(tx => {
    const matchesStatus = txStatus === 'all' || tx.status === txStatus;
    const q = txSearch.toLowerCase();
    const matchesSearch = !q || tx.customer.toLowerCase().includes(q) || tx.id.toLowerCase().includes(q) || tx.email.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-10">

        {/* Alert strip */}
        {!alertDismissed && (
          <div className="mb-6">
            <Alert
              variant="success"
              title="Q1 revenue target hit"
              onDismiss={() => setAlertDismissed(true)}
            >
              You exceeded the Q1 target by 11.2% — $317k vs $285k goal. Keep it up.
            </Alert>
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display font-extrabold text-2xl text-foreground">Overview</h1>
            <p className="text-sm text-fg-secondary mt-0.5">All figures in USD</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <DateRangePicker
              value={dateRange}
              onChange={r => r && setDateRange(r)}
              size="sm"
            />
            <Button variant="secondary" size="sm">Export</Button>
            <Button variant="primary" size="sm">+ New Report</Button>
          </div>
        </div>

        {/* KPI stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          <Stat label="Total Revenue"   value="$203,412" change={12.4}  changeLabel="vs prev period" sparkline={<Sparkline data={sparkRevenue}  height={32} width={80} type="line" />} />
          <Stat label="Active Users"    value="668"      change={8.1}   changeLabel="vs prev period" sparkline={<Sparkline data={sparkUsers}    height={32} width={80} type="line" />} />
          <Stat label="Conversion Rate" value="3.1%"     change={2.3}   changeLabel="vs prev period" sparkline={<Sparkline data={sparkConv}     height={32} width={80} type="line" />} />
          <Stat label="Avg Order Value" value="$168"     change={-1.2}  changeLabel="vs prev period" sparkline={<Sparkline data={sparkAvgOrder} height={32} width={80} type="line" />} />
        </div>

        {/* Goals / progress */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Annual goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
              {goals.map(goal => {
                const pct = goal.inverse
                  ? Math.round((1 - goal.current / goal.target) * 100 + 70)
                  : Math.round((goal.current / goal.target) * 100);
                return (
                  <div key={goal.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-medium text-foreground">{goal.label}</span>
                      <span className="text-xs text-fg-secondary tabular-nums">
                        {goal.format(goal.current)} <span className="text-fg-disabled">/ {goal.format(goal.target)}</span>
                      </span>
                    </div>
                    <Progress
                      value={pct}
                      size="sm"
                      variant={pct >= 90 ? 'success' : pct >= 60 ? 'default' : 'warning'}
                    />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Revenue chart */}
        <Card className="mb-6">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-0">
            <CardTitle>Revenue over time</CardTitle>
            <Tabs value={period} onValueChange={setPeriod}>
              <TabsList>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="pt-4">
            <AreaChart
              data={revenueData}
              index="date"
              categories={['Revenue', 'Target']}
              height={260}
              valueFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              showLegend
            />
          </CardContent>
        </Card>

        {/* Channel + donut */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
          <Card className="lg:col-span-3">
            <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-0">
              <CardTitle>Channel performance</CardTitle>
              <Select value={channelMetric} onValueChange={setChannelMetric} size="sm">
                <SelectItem value="Revenue">Revenue</SelectItem>
                <SelectItem value="Leads">Leads</SelectItem>
              </Select>
            </CardHeader>
            <CardContent className="pt-4">
              <BarChart
                data={channelData}
                index="channel"
                categories={[channelMetric]}
                height={220}
                valueFormatter={channelMetric === 'Revenue' ? (v) => `$${(v / 1000).toFixed(0)}k` : (v) => v.toLocaleString()}
              />
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader className="pb-0"><CardTitle>Traffic sources</CardTitle></CardHeader>
            <CardContent className="pt-4">
              <DonutChart
                data={sourceData}
                height={220}
                valueFormatter={(v) => `${v}%`}
                showLegend
                centerLabel={
                  <div className="text-center">
                    <p className="text-xl font-bold text-foreground">100%</p>
                    <p className="text-[10px] text-fg-secondary">of sessions</p>
                  </div>
                }
              />
            </CardContent>
          </Card>
        </div>

        {/* Transactions + activity feed */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Transactions */}
          <Card className="xl:col-span-2">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <CardTitle>Recent transactions</CardTitle>
                <SegmentedControl
                  value={txStatus}
                  onValueChange={setTxStatus}
                  size="sm"
                  options={[
                    { value: 'all',       label: 'All'       },
                    { value: 'completed', label: 'Completed' },
                    { value: 'pending',   label: 'Pending'   },
                    { value: 'failed',    label: 'Failed'    },
                  ]}
                />
              </div>
              <div className="mt-3">
                <Input
                  placeholder="Search customer, ID or email…"
                  value={txSearch}
                  onChange={e => setTxSearch(e.target.value)}
                  size="sm"
                  leftIcon={
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                    </svg>
                  }
                  clearable
                />
              </div>
            </CardHeader>
            <CardContent className="pt-0 px-0 pb-0">
              <DataTable
                data={filteredTransactions}
                columns={columns}
                emptyMessage="No transactions found"
                size="sm"
                bordered={false}
              />
            </CardContent>
          </Card>

          {/* Activity feed */}
          <Card className="xl:col-span-1">
            <CardHeader className="pb-3"><CardTitle>Activity</CardTitle></CardHeader>
            <CardContent className="pt-2">
              <Timeline>
                {activityItems.map((item, i) => (
                  <TimelineItem
                    key={i}
                    color={item.color}
                    title={item.title}
                    description={item.description}
                    timestamp={item.time}
                    last={i === activityItems.length - 1}
                  />
                ))}
              </Timeline>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
