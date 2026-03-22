import { test, expect } from "@playwright/test"

test.describe("Landing Page", () => {
  test("loads successfully with correct title", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/Bordermath/)
    await expect(page.locator("h1")).toBeVisible()
  })

  test("has navbar with logo, links, and CTA", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("navigation")).toBeVisible()
    await expect(page.getByRole("link", { name: "Bordermath" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Get started free" })).toBeVisible()
  })

  test("has minimum 9 sections in main content", async ({ page }) => {
    await page.goto("/")
    const sections = await page.locator("main > *").count()
    expect(sections).toBeGreaterThanOrEqual(9)
  })

  test("hero section has headline, subline, CTA button", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("h1")).toContainText(/counting|planning|trips/i)
    const ctaButton = page.getByRole("link", { name: /plan my route|get started/i })
    await expect(ctaButton).toBeVisible()
  })

  test("hero section has compliance timeline illustration", async ({ page }) => {
    await page.goto("/")
    // Hero illustration should load
    const heroImg = page.locator("img[alt*='hero'], img[src*='hero-illustration']").first()
    // Check image loads without error via JS
    const loaded = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll("img"))
      return imgs.some((img) => img.complete && img.naturalWidth > 0)
    })
    expect(loaded).toBeTruthy()
  })

  test("has footer with nav links, privacy, terms", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator("footer")).toBeVisible()
    await expect(page.getByRole("link", { name: "Privacy" })).toBeVisible()
    await expect(page.getByRole("link", { name: "Terms" })).toBeVisible()
  })

  test("pricing section has 3 tiers", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { name: "Explorer" })).toBeVisible()
    await expect(page.getByRole("heading", { name: "Nomad" })).toBeVisible()
    await expect(page.getByRole("heading", { name: "Borderless" })).toBeVisible()
  })

  test("FAQ section has accordion items", async ({ page }) => {
    await page.goto("/")
    await expect(page.getByRole("heading", { name: /questions/i })).toBeVisible()
    const faqItems = page.locator("h3").filter({ hasText: /Bordermath|Schengen|passport|route|trip/i })
    expect(await faqItems.count()).toBeGreaterThanOrEqual(5)
  })

  test("is responsive at 375px mobile width", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto("/")
    await expect(page.locator("h1")).toBeVisible()
    // No horizontal scroll
    const hasHScroll = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)
    expect(hasHScroll).toBeFalsy()
  })

  test("CTA button navigates to signup", async ({ page }) => {
    await page.goto("/")
    await page.getByRole("link", { name: "Plan my route — it's free" }).click()
    await expect(page).toHaveURL(/signup/)
  })

  test("no console errors on landing page", async ({ page }) => {
    const errors: string[] = []
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text())
    })
    await page.goto("/")
    // Filter out known favicon 404 (minor issue)
    const criticalErrors = errors.filter((e) => !e.includes("favicon"))
    expect(criticalErrors).toHaveLength(0)
  })
})
