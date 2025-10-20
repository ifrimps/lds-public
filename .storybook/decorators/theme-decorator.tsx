import { useEffect } from 'react';
import type { Decorator } from '@storybook/react';

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme = (context.globals.theme as string) || 'white-label';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <Story />;
};
