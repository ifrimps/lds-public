import type { Preview } from '@storybook/react-vite';
import { ThemeDecorator } from './decorators/theme-decorator';
import '../src/index.css';

export const decorators = [ThemeDecorator];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'white-label',
    toolbar: {
      icon: 'paintbrush',
      title: 'Theme',
      items: [
        { value: 'white-label', icon: 'box', title: 'White Label' },
        { value: 'dc', icon: 'star', title: 'DC' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
};

export default preview;
