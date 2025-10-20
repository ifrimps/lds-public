import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    libInjectCss(),
    dts({
      exclude: ['**/*.stories.tsx'],
      tsconfigPath: 'tsconfig.app.json',
      outDir: 'dist',
      entryRoot: 'src',
    }),
    istanbul({
      cypress: true,
      include: 'src/*',
      exclude: ['node_modules', '*.spec.tsx', 'dist'],
      extension: ['.js', '.ts', '.tsx'],
      requireEnv: false,
      forceBuildInstrument: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  server: {
    watch: {
      ignored: [
        '**/coverage/**',
        '**/.nyc_output/**',
        '**/cypress/coverage/**',
      ],
    },
  },
});
