import { expect, test } from '@playwright/test'

test.describe('Administrative portfolio', () => {
  test('renders the portfolio content and primary sections', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle('Administrative Portfolio')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('[Your Name]')
    await expect(page.getByRole('navigation', { name: 'Main actions' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Summary' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Education & certifications' })).toBeVisible()
    await expect(page.getByText('Years of experience')).toHaveCount(0)
  })

  test('navigates to the WhatsApp call to action', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'WhatsApp' }).click()

    await expect(page).toHaveURL(/#whatsapp$/)
    await expect(page.locator('#whatsapp')).toBeInViewport()
    await expect(page.getByRole('heading', { name: 'Let’s talk' })).toBeVisible()
  })

  test('keeps the WhatsApp action disabled until a number is configured', async ({ page }) => {
    await page.goto('/')

    await expect(
      page.getByRole('button', { name: 'Add your number in portfolio.js to activate WhatsApp' }),
    ).toBeDisabled()
  })

  test('provides a downloadable resume link', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('link', { name: 'Download resume' }))
      .toHaveAttribute('href', '/resume.pdf')
    await expect(page.getByRole('link', { name: 'Download resume' })).toHaveAttribute('download', '')
  })

  test('fits a narrow mobile viewport without horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')

    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
    )
    expect(hasHorizontalOverflow).toBe(false)
  })

  test('shows a helpful not-found page for unknown routes', async ({ page }) => {
    await page.goto('/unknown-page')

    await expect(page.getByRole('heading', { name: 'We couldn’t find that page.' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Return to the portfolio' })).toHaveAttribute('href', '/')
  })
})
