import { rm } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'

export default async function globalTeardown() {
  if (process.env.CI) return

  const outputDir = process.env.PLAYWRIGHT_OUTPUT_DIR
  const outputRoot = path.resolve(process.env.PLAYWRIGHT_OUTPUT_ROOT ?? os.tmpdir())

  if (!outputDir) return

  const resolvedOutputDir = path.resolve(outputDir)
  const isExpectedTempFolder =
    path.dirname(resolvedOutputDir) === outputRoot &&
    path.basename(resolvedOutputDir).startsWith('administrative-portfolio-playwright-local-')

  if (!isExpectedTempFolder) {
    throw new Error('Refusing to remove a Playwright output folder outside the expected temp directory.')
  }

  await rm(resolvedOutputDir, { recursive: true, force: true })
}
