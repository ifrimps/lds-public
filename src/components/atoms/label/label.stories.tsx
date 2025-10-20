import type { Meta, StoryFn } from '@storybook/react-vite';
import { Label } from './label';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const DefaultLabel = Template.bind({});
DefaultLabel.args = {
  text: 'Default Label',
};
