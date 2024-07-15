import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  define: {
    'process.env': { ...process.env }
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      external: ['@fingerprintjs/fingerprintjs-pro'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': ".vitepress"
    },
  }
});