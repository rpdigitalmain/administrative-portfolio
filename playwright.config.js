import { defineConfig, devices } from '@playwright/test'
import os from 'node:os'
import path from 'node:path'

const outputRoot = process.env.CI && process.env.RUNNER_TEMP
  ? process.env.RUNNER_TEMP
  : os.tmpdir()
const outputName = `administrative-portfolio-playwright-${process.env.GITHUB_JOB ?? 'local'}-${process.env.GITHUB_RUN_ID ?? process.pid}`
const outputDir = path.join(outputRoot, outputName)

process.env.PLAYWRIGHT_OUTPUT_DIR = outputDir
process.env.PLAYWRIGHT_OUTPUT_ROOT = outputRoot

export default defineConfig({
  testDir: './test/e2e',
  outputDir,
  globalTeardown: './test/e2e/global-teardown.js',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    command: 'node ./node_modules/vite/bin/vite.js --host 127.0.0.1 --port 4173 --strictPort',
    url: 'http://127.0.0.1:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
})
