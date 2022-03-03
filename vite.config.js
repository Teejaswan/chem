import { defineConfig } from "vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        page1: resolve(__dirname, "pages/page1/index.html"),
        page2: resolve(__dirname, "pages/page2/index.html"),
        page3: resolve(__dirname, "pages/page3/index.html"),
        page4: resolve(__dirname, "pages/page4/index.html"),
        page5: resolve(__dirname, "pages/page5/index.html"),
      },
    },
  },
});
