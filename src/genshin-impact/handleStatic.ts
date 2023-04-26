import { oak, path } from '../../deps.ts'

const __dirname = path.dirname(path.fromFileUrl(import.meta.url))

const staticDir = path.join(__dirname, 'static')
const files: Map<string, Uint8Array> = new Map()

for await (const { name } of Deno.readDir(staticDir)) {
  const data = await Deno.readFile(path.join(staticDir, name))
  files.set(name, data)
}

export default async (ctx: oak.RouterContext<string>, next: () => Promise<unknown>) => {
  const { filename = '' } = ctx.params

  if (files.has(filename)) {
    ctx.response.body = files.get(filename)
  } else {
    await next()
  }
}
