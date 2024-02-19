import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    env: { NEXT_PUBLIC_BASE_URL: "http://localhost:3000" },
  },
});
