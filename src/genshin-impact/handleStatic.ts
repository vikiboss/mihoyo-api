import { oak, path } from '../../deps.ts'

const __dirname = path.dirname(path.fromFileUrl(import.meta.url))

const staticDir = path.join(__dirname, 'static')
const files: Map<string, Uint8Array> = new Map()

for await (const { name } of Deno.readDir(staticDir)) {
  const data = await Deno.readFile(path.join(staticDir, name))
  files.set(name, data)
}

const NotFound = {
  code: 404,
  msg: 'not found',
  data: ''
}

export default (ctx: oak.RouterContext<string>) => {
  const { filename = '' } = ctx.params
  const ext = path.extname(filename)
  const exist = files.has(filename)

  if (ext === '.json' && exist) {
    ctx.response.headers.set('content-type', 'application/json; charset=utf-8')
  }

  ctx.response.body = exist ? files.get(filename) : NotFound
}
