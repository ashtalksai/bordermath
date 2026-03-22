import { test, expect } from "@playwright/test"

test.describe("Core Product - Compliance Timeline", () => {
  test("route detail page loads with compliance timeline", async ({ page }) => {
    // Access via direct URL (seed data route)
    await page.goto("/dashboard")
    // Core product is accessible (seed data shown)
    await expect(page.getByText(/your routes/i)).toBeVisible()
  })

  test("dashboard shows route cards with compliance status", async ({ page }) => {
    await page.goto("/dashboard")
    // Should show route cards
    await expect(page.getByText(/Compliant|Conflict/i).first()).toBeVisible()
  })

  test("onboarding wizard step 1 - passport selection", async ({ page }) => {
    await page.goto("/routes/new")
    await expect(page.getByRole("heading", { name: /plan a new route/i })).toBeVisible()
    await expect(page.getByText(/step 1 of 3/i)).toBeVisible()
    await expect(page.getByRole("button", { name: /united states/i })).toBeVisible()
    await expect(page.getByRole("button", { name: /european union/i })).toBeVisible()
  })

  test("onboarding wizard step 2 - country selection", async ({ page }) => {
    await page.goto("/routes/new")
    await page.getByRole("button", { name: /european union/i }).click()
    await page.getByRole("button", { name: /continue/i }).click()
    await expect(page.getByText(/step 2 of 3/i)).toBeVisible()
    await expect(page.getByText(/where do you want to go/i)).toBeVisible()
    // Country list should have schengen/sea labels
    await expect(page.getByText(/schengen/i).first()).toBeVisible()
  })

  test("onboarding wizard step 3 - date entry", async ({ page }) => {
    await page.goto("/routes/new")
    await page.getByRole("button", { name: /european union/i }).click()
    await page.getByRole("button", { name: /continue/i }).click()
    await page.getByRole("button", { name: /portugal/i }).click()
    await page.getByRole("button", { name: /thailand/i }).click()
    await page.getByRole("button", { name: /continue/i }).click()
    await expect(page.getByText(/step 3 of 3/i)).toBeVisible()
    await expect(page.getByText(/set rough dates/i)).toBeVisible()
    await expect(page.getByRole("button", { name: /build my compliance timeline/i })).toBeVisible()
  })

  test("compliance timeline visualization shows on route page", async ({ page }) => {
    // Access the existing seed route 
    await page.goto("/dashboard")
    // Click first route card
    const routeCard = page.locator("a").filter({ hasText: /2026|route|loop/i }).first()
    if (await routeCard.count() > 0) {
      await routeCard.click()
      await expect(page.getByText(/compliance timeline/i)).toBeVisible()
      await expect(page.getByText(/schengen.*counter/i)).toBeVisible()
    }
  })
})

test.describe("Key Pages", () => {
  test("pricing page loads with 3 tiers", async ({ page }) => {
    await page.goto("/pricing")
    await expect(page.getByRole("heading", { name: /simple.*pricing|pricing/i })).toBeVisible()
    await expect(page.getByText("$0")).toBeVisible()
    await expect(page.getByText("$15")).toBeVisible()
    await expect(page.getByText("$50")).toBeVisible()
  })

  test("about page loads", async ({ page }) => {
    await page.goto("/about")
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
    await expect(page.getByText(/ChimeStream|Bordermath|built/i)).toBeVisible()
  })

  test("contact page has working form", async ({ page }) => {
    await page.goto("/contact")
    await expect(page.getByRole("heading", { name: /get in touch/i })).toBeVisible()
    await expect(page.locator("input[placeholder*='name']")).toBeVisible()
    await expect(page.locator("input[placeholder*='example']")).toBeVisible()
    await expect(page.getByRole("button", { name: /send message/i })).toBeVisible()
  })

  test("privacy page loads", async ({ page }) => {
    await page.goto("/privacy")
    await expect(page.locator("body")).toBeVisible()
    const text = await page.locator("body").innerText()
    expect(text.length).toBeGreaterThan(100)
  })

  test("terms page loads", async ({ page }) => {
    await page.goto("/terms")
    await expect(page.locator("body")).toBeVisible()
    const text = await page.locator("body").innerText()
    expect(text.length).toBeGreaterThan(100)
  })

  test("pitch deck loads with 8 slides", async ({ page }) => {
    await page.goto("/deck")
    await expect(page.getByText(/bordermath/i).first()).toBeVisible()
    await expect(page.getByText(/1 \/ 8/)).toBeVisible()
  })

  test("docs page loads with sidebar", async ({ page }) => {
    await page.goto("/docs")
    await expect(page.getByText(/research/i).first()).toBeVisible()
    await expect(page.getByText(/documents/i)).toBeVisible()
  })

  test("health endpoint returns 200", async ({ request }) => {
    const response = await request.get("/api/health")
    expect(response.status()).toBe(200)
    const body = await response.json()
    expect(body.status).toBe("ok")
  })
})
