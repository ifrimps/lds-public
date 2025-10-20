import type { Meta, StoryFn } from '@storybook/react-vite';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  theme: 'primary',
  onClick: () => alert('Button clicked!'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  theme: 'secondary',
  onClick: () => alert('Button clicked!'),
};
