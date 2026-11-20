import { expect, test } from '@playwright/test'

test.describe('Administrative portfolio', () => {
  test('renders the portfolio content and primary sections', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle('Administrative Portfolio')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Camila Oliveira')
    await expect(page.getByRole('navigation', { name: 'Main actions' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Summary' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Experience' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Education & certifications' })).toBeVisible()
    const skills = page.getByRole('list', { name: 'Professional skills' })
    await expect(skills.getByRole('listitem')).toHaveCount(4)
    await expect(skills.locator('svg')).toHaveCount(4)
    const tools = page.getByRole('list', { name: 'Tools' })
    await expect(tools.getByRole('listitem')).toHaveCount(3)
    await expect(tools.locator('svg')).toHaveCount(3)
    const languages = page.getByRole('list', { name: 'Languages' })
    await expect(languages.getByRole('listitem')).toHaveCount(2)
    await expect(languages.locator('svg')).toHaveCount(2)
    await expect(page.getByText('Years of experience')).toHaveCount(0)
  })

  test('navigates from the WhatsApp button to the social links card', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'WhatsApp' }).click()

    await expect(page).toHaveURL(/#social-links$/)
    await expect(page.locator('#social-links')).toBeInViewport()
    await expect(page.getByRole('heading', { name: 'Social links' })).toBeVisible()
    await expect(page.getByRole('navigation', { name: 'Social media' }).getByRole('link'))
      .toHaveCount(3)
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
