import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolveStyleConfig } from "@chakra-ui/react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //   define: {
  //     "process.env": process.env,
  //   },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/config": path.resolve(__dirname, "src/config"),
      "@/queries": path.resolve(__dirname, "src/queries"),
      "@/utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
