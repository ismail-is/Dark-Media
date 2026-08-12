import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/Dark-Media/",
  nitro: false,
  tanstackStart: {
    server: { entry: "src/server.ts" },
    spa: {
      enabled: true,
    },
  },
});