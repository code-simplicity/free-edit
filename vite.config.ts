import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import vitePluginEslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    legacy({ targets: ['defaults', 'not IE 11'] }),
    vitePluginEslint({ failOnError: false }),
  ],
});
