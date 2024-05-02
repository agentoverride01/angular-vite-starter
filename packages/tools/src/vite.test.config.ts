/// <reference types="vitest" />

import { defineConfig } from 'vite'
import { join } from 'node:path'

import angular from '@analogjs/vite-plugin-angular'
import { viteTsPaths } from './utils'

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: viteTsPaths()
  },
  plugins: [
    angular({
      tsconfig: join(process.cwd(), 'tsconfig.spec.json'),
      inlineStylesExtension: 'scss'
    })
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
