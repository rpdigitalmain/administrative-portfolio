import { expect, test } from '@playwright/test'

test.describe('Administrative portfolio', () => {
  test('renders the portfolio content and primary sections', async ({ page }) => {
    await page.goto('/')

    await expect(page).toHaveTitle('Portfólio Administrativo')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ruan Pablo')
    await expect(page.getByRole('navigation', { name: 'Ações principais' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Resumo' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Competências' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Experiência' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Formação e aprendizado independente' })).toBeVisible()
    const skills = page.getByRole('list', { name: 'Competências profissionais' })
    await expect(skills.getByRole('listitem')).toHaveCount(8)
    await expect(skills.locator('svg')).toHaveCount(8)
    const tools = page.getByRole('list', { name: 'Ferramentas' })
    await expect(tools.getByRole('listitem')).toHaveCount(3)
    await expect(tools.locator('svg')).toHaveCount(3)
    const languages = page.getByRole('list', { name: 'Idiomas' })
    await expect(languages.getByRole('listitem')).toHaveCount(2)
    await expect(languages.locator('svg')).toHaveCount(2)
    await expect(page.getByText('Years of experience')).toHaveCount(0)
  })

  test('navigates from the WhatsApp button to the social links card', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'WhatsApp' }).click()

    await expect(page).toHaveURL(/#social-links$/)
    await expect(page.locator('#social-links')).toBeInViewport()
    await expect(page.getByRole('heading', { name: 'Redes sociais' })).toBeVisible()
    await expect(page.getByRole('navigation', { name: 'Redes sociais' }).getByRole('link'))
      .toHaveCount(3)
  })

  test('generates and downloads a resume PDF from portfolio data', async ({ page }) => {
    await page.goto('/')

    const downloadPromise = page.waitForEvent('download')
    await page.getByRole('button', { name: 'Baixar currículo' }).click()
    const download = await downloadPromise

    expect(download.suggestedFilename()).toBe('ruan-pablo-curriculo.pdf')
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

    await expect(page.getByRole('heading', { name: 'Não encontramos esta página.' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Voltar ao portfólio' })).toHaveAttribute('href', '/')
  })
})
