import { defineConfig } from "@playwright/test"

export default defineConfig({
  testDir: "./tests/e2e",
  baseURL: "https://bordermath.ashketing.com",
  use: {
    headless: true,
    screenshot: "only-on-failure",
  },
})
