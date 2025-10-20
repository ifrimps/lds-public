import type { Meta, StoryFn } from '@storybook/react-vite';
import { FormField } from './form-field';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof FormField> = (args) => <FormField {...args} />;

export const DefaultFormField = Template.bind({});
DefaultFormField.args = {
  label: 'Form Field Label',
  placeholder: 'Enter value',
};
