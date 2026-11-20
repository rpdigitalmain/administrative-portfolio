import assert from 'node:assert/strict'
import test from 'node:test'
import { PDFDocument } from 'pdf-lib'
import { createResumePdf, getResumeFileName } from '../../src/services/resumePdf.js'

test('creates a readable PDF when optional portfolio sections are absent', async () => {
  const bytes = await createResumePdf(
    { name: 'Ruan Pablo' },
    'https://portfolio.example',
  )
  const document = await PDFDocument.load(bytes)

  assert.equal(Buffer.from(bytes).subarray(0, 5).toString(), '%PDF-')
  assert.equal(document.getTitle(), 'Ruan Pablo - Currículo')
  assert.equal(document.getPageCount(), 1)
})

test('adds pages when experience content exceeds one page', async () => {
  const experience = Array.from({ length: 35 }, (_, index) => ({
    title: `Independent project ${index + 1}`,
    company: 'Personal projects',
    period: '2020 – Present',
    result: 'Organized records and developed repeatable workflows. '.repeat(18),
  }))
  const bytes = await createResumePdf(
    { name: 'Ruan Pablo', experience },
    'https://portfolio.example',
  )
  const document = await PDFDocument.load(bytes)

  assert.ok(document.getPageCount() > 1)
})

test('creates safe PDF filenames from names with accents or missing values', () => {
  assert.equal(getResumeFileName({ name: 'João da Silva' }), 'joao-da-silva-curriculo.pdf')
  assert.equal(getResumeFileName({ name: '!!!' }), 'curriculo.pdf')
  assert.equal(getResumeFileName(), 'curriculo.pdf')
})
