import type { Meta, StoryFn } from '@storybook/react-vite';
import { Input } from './input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  placeholder: 'Enter text',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: 'password',
  placeholder: 'Enter password',
};
