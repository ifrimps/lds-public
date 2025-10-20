import { UserProfile } from './user-profile';
import type { Meta, StoryFn } from '@storybook/react-vite';

const meta: Meta<typeof UserProfile> = {
  title: 'Organisms/UserProfile',
  component: UserProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<{
  name: string;
  age: number;
  user: { name: string; imageSrc: string; bio: string };
  onFollow: () => void;
  onMessage: () => void;
}> = (args) => <UserProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  age: 30,
  user: {
    name: 'John Doe',
    imageSrc:
      'https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=200',
    bio: 'Software Engineer with 10 years of experience.',
  },
  onFollow: () => alert('Followed!'),
  onMessage: () => alert('Message sent!'),
};
