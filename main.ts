import { serve } from 'https://deno.land/std@0.178.0/http/server.ts'

const files: Map<string, Uint8Array> = new Map()

for await (const { name } of Deno.readDir('./static')) {
  const data = await Deno.readFile(`./static/${name}`)
  files.set(name, data)
}

const headers = { 'Content-Type': 'application/json; charset=utf-8' }
const notFoundRes = JSON.stringify({ code: 404, msg: 'not found', data: '' })

function handleRequest(request: Request): Response {
  const { pathname } = new URL(request.url)
  const name = pathname.replace('/', '')

  if (files.has(name)) {
    return new Response(files.get(name), { headers })
  }

  return new Response(notFoundRes, { headers })
}

serve(handleRequest)
