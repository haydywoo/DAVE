import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { Pagination, PageSizeSelect } from '@haydywoo/dave-react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    page:      { control: { type: 'number', min: 1 } },
    pageCount: { control: { type: 'number', min: 1 } },
    siblings:  { control: { type: 'number', min: 0, max: 3 } },
  },
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

function Controlled({ initial = 1, pageCount = 10, ...props }: Partial<typeof Pagination extends React.ComponentType<infer P> ? P : never> & { initial?: number; pageCount?: number }) {
  const [page, setPage] = React.useState(initial);
  return <Pagination page={page} pageCount={pageCount} onPageChange={setPage} {...(props as any)} />;
}

export const Default: Story = {
  render: () => <Controlled pageCount={10} />,
};

export const FewPages: Story = {
  render: () => <Controlled pageCount={4} />,
};

export const ManyPages: Story = {
  render: () => <Controlled pageCount={50} initial={25} />,
};

export const WithEdges: Story = {
  render: () => <Controlled pageCount={20} initial={10} showEdges />,
};

export const WideSiblings: Story = {
  render: () => <Controlled pageCount={20} initial={10} siblings={2} />,
};

export const WithPageSize: Story = {
  render: function Story() {
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const total = 248;
    const pageCount = Math.ceil(total / pageSize);

    function handlePageSizeChange(size: number) {
      setPageSize(size);
      setPage(1);
    }

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center justify-between w-full max-w-lg gap-4">
          <PageSizeSelect
            pageSize={pageSize}
            onPageSizeChange={handlePageSizeChange}
            total={total}
          />
          <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
        </div>
      </div>
    );
  },
};
