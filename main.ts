import { serve } from 'https://deno.land/std@0.155.0/http/server.ts'

const files: Map<string, Uint8Array> = new Map()

for await (const { name } of Deno.readDir('./static')) {
  const data = await Deno.readFile(`./static/${name}`)
  files.set(name, data)
}

function handleRequest(request: Request): Response {
  const { pathname } = new URL(request.url)
  const name = pathname.replace('/', '')

  if (files.has(name)) {
    return new Response(files.get(name), {
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    })
  }

  return new Response('404', {
    headers: {
      'content-type': 'text/plain; charset=utf-8'
    }
  })
}

serve(handleRequest)
