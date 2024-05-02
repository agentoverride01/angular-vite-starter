import { existsSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join, resolve } from 'node:path'

const require$ = createRequire(import.meta.url)
const TSConfigPath = join(process.cwd(), 'tsconfig.json')

const getCompilerOptions = () => {
  const tsconfig = require$(TSConfigPath)
  const compilerOptions = tsconfig.compilerOptions as import('typescript').CompilerOptions
  return (compilerOptions?.paths ?? null) as Record<string, string[]>
}

export const getTsPaths = () => {
  return existsSync(TSConfigPath) ? getCompilerOptions(): null
}

export const viteTsPaths = () => {
  const paths = getTsPaths() as Record<string, string[]>
  return Object.keys(paths ?? {}).reduce((p, c) => {
    const value = paths[c].at(0)
    if (value) p[c] = resolve(value) as string
    return p
  }, {} as Record<string, string>)
}