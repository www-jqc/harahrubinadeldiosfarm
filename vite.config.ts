import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  base: '/harahrubinadeldiosfarm/',
  plugins: [svelte()],
  resolve: {
    alias: {
      '@': '/src'
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['svelte'],
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['@sveltejs/vite-plugin-svelte'],
  },
}); 