import { defineConfig } from 'vite';
export default defineConfig({
  plugins: [
    // ...
  ],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if(id.toString().split('node_modules/')[1].split('/')[0].includes("ant-design-vue")) {
              return "ant-design-vue";

            } else {
              return "wq";
            }
            // console.log("----", id.toString().split('node_modules/')[1].split('/')[0].toString());
            // return "11111";
          }
        }
      }
    }
  }
});