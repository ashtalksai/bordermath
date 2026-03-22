import { test, expect } from "@playwright/test"

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1280, height: 800 },
]

const pages = ["/", "/about", "/pricing", "/contact"]

for (const vp of viewports) {
  for (const path of pages) {
    test(`${path} renders at ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height })
      await page.goto(path)
      await expect(page.locator("body")).toBeVisible()
      // No horizontal scroll
      const hasHScroll = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth
      )
      expect(hasHScroll).toBeFalsy()
    })
  }
}

test("login page responsive at 375px", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/login")
  await expect(page.getByRole("heading", { name: /welcome back/i })).toBeVisible()
})

test("signup page responsive at 375px", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/signup")
  await expect(page.getByRole("heading")).toBeVisible()
})
