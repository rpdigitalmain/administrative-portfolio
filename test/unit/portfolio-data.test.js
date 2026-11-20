import assert from 'node:assert/strict'
import test from 'node:test'
import { portfolio } from '../../src/data/portfolio.js'
import { portfolioIcons } from '../../src/icons/portfolioIcons.js'

test('every configured skill, tool, language, and social link has an icon', () => {
  const records = [
    ...portfolio.skills,
    ...portfolio.tools,
    ...portfolio.languages,
    ...portfolio.socialLinks,
  ]

  for (const record of records) {
    assert.ok(portfolioIcons[record.icon], `Missing Font Awesome icon for ${record.label}`)
  }
})

test('portfolio contact and experience data are complete', () => {
  const whatsapp = portfolio.socialLinks.find((link) => link.icon === 'whatsapp')
  const currentExperience = portfolio.experience.find((item) => item.current)

  assert.equal(whatsapp?.phoneNumber, '5535999182635')
  assert.equal(currentExperience?.period, '2020 – Atual')
  assert.equal(currentExperience?.company, 'Projetos próprios')
})
