import analog from '@analogjs/platform';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    publicDir: 'src/assets',
    plugins: [ 
      analog({ 
        ssr: false, 
        static: true,
        vite: {
          tsconfig: resolve('./src/tsconfig.app.json'),
          inlineStylesExtension: 'scss'
        }
      }) 
    ]
  }
});