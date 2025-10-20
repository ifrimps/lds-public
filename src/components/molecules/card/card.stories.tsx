import type { Meta, StoryFn } from '@storybook/react-vite';
import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<{
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  description: string;
}> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  children: 'Card content goes here.',
  imageSrc:
    'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=200',
  description: 'This is a description for the card.',
};
