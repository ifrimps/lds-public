import { defineConfig } from 'cypress';
import codeCoverageTask from '@cypress/code-coverage/task';
// const { installPlugin } = require('@chromatic-com/cypress');

export default defineConfig({
  component: {
    specPattern: 'src/**/*.test.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);
      // installPlugin(on, config);
      return config;
    },
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    env: {
      codeCoverage: {
        all: true,
        include: ['src/**/*.{js,jsx,ts,tsx}'],
        expectBackendCoverageOnly: false,
        printSummary: false,
      },
    },
  },
});
