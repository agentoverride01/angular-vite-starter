import { existsSync, readdirSync } from 'node:fs'
import { createRequire } from 'node:module'
import { join, resolve, basename } from 'node:path'

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

export const getComponentPaths = () => {
  const BASE_PATH = join(process.cwd(), 'packages/components/src')
  const folders = readdirSync(BASE_PATH)
  return folders.reduce((p, c: string) => {
    const indexPath = join(BASE_PATH, c, 'index.ts')
    if (existsSync(indexPath)) {
      const importPath = '@bofa/components/' + basename(c) 
      p[importPath] = indexPath
    }
    return p
  }, {} as Record<string, string>)
}