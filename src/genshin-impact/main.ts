import { RouterContext } from 'oak/mod.ts'
import * as path from 'std/path/mod.ts'

const __filename = path.fromFileUrl(import.meta.url)
const __dirname = path.dirname(path.fromFileUrl(import.meta.url))

const staticDir = path.join(__dirname, 'static')
const files: Map<string, Uint8Array> = new Map()

for await (const { name } of Deno.readDir(staticDir)) {
  const data = await Deno.readFile(path.join(staticDir, name))
  files.set(name, data)
}

export default function () {
  return async (ctx: RouterContext<string>, next: () => Promise<unknown>) => {
    const { pathname } = new URL(ctx.request.url)
    const name = pathname.replace('/', '')

    console.log(name)

    if (files.has(name)) {
      ctx.response.body = files.get(name)
    } else {
      await next()
    }
  }
}
