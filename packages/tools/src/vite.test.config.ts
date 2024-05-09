/// <reference types="vitest" />

import { defineConfig } from 'vite'
import path, { join, resolve } from 'node:path'

import angular from '@analogjs/vite-plugin-angular'

export default defineConfig(({ mode }) => ({
  resolve: {
    mainFields: ['module']
  },
  plugins: [
    angular({
      tsconfig: join(process.cwd(), 'tsconfig.spec.json'),
      inlineStylesExtension: 'scss'
    }),
    {
      name: '@storybook/angular',
      transform(code) {
        if (code.includes(`'@bofa/components/content'`)) {
          const PATH = join(process.cwd(), 'packages/components/src/content/index.ts')
          return code.replace(/\'@bofa\/components\/content\'/g, `\"${PATH}\"`);
        }
        return;
      }
    }
  ],            
  test: {
    globals: true,
    setupFiles: [ join(__dirname, 'test-setup.ts') ],
    include: [ 
      'src/**/*.{test,spec}.{js,ts,jsx,tsx}',
      'packages/components/**/*.{test,spec}.{js,ts,jsx,tsx}' 
    ],
    reporters: [ 'basic' ],
    environment: 'happy-dom',
    disableConsoleIntercept: true      
  },
  define: {
    'import.meta.vitest': mode !== 'production'
  },
}));
