import Stripe from "stripe"

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder", {
  apiVersion: "2025-02-24.acacia",
})

export const STRIPE_PLANS = {
  nomad_monthly: process.env.STRIPE_NOMAD_MONTHLY_PRICE_ID ?? "price_nomad_monthly",
  nomad_annual: process.env.STRIPE_NOMAD_ANNUAL_PRICE_ID ?? "price_nomad_annual",
  borderless_monthly: process.env.STRIPE_BORDERLESS_MONTHLY_PRICE_ID ?? "price_borderless_monthly",
  borderless_annual: process.env.STRIPE_BORDERLESS_ANNUAL_PRICE_ID ?? "price_borderless_annual",
}
