import { test, expect } from '@playwright/test'

test('home correctly render', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Vite + React + TS')

  const homeLink = page.locator('text=home')
  const expensesLink = page.locator('text=expenses')
  await expect(homeLink).toHaveAttribute('href', '/')
  await expect(expensesLink).toHaveAttribute('href', '/expenses')
})
