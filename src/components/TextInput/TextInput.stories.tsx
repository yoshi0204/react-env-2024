import type { Meta, StoryObj } from '@storybook/React';

import TextInput from './Textinput';

const meta = {
  title: 'TextInput',
  component: TextInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
