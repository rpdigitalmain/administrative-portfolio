import { readFile } from 'node:fs/promises'

const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'))
const tag = process.argv[2] ?? process.env.GITHUB_REF_NAME

if (!tag) {
  console.error('Provide a release tag, for example: npm run check:release -- v1.0.0')
  process.exitCode = 1
} else if (tag !== `v${packageJson.version}`) {
  console.error(`Release tag ${tag} does not match package version ${packageJson.version}.`)
  process.exitCode = 1
} else {
  console.log(`Release tag ${tag} matches package version ${packageJson.version}.`)
}