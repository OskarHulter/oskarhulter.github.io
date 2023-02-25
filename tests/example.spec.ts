import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Oskar Hulter/)
})

test('about link', async ({ page }) => {
  await page.goto('/')

  // Click the about link.
  await page.getByRole('link', { name: 'About' }).click()

  // Expects the URL to contain about.
  await expect(page).toHaveURL(/.*about/)
})
