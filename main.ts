import { serve } from 'https://deno.land/std@0.155.0/http/server.ts'

const files = [...Deno.readDirSync('./static')]

async function handleRequest(request: Request): Promise<Response> {
  const { pathname } = new URL(request.url)

  for (const file of files) {
    if (file.name === pathname.replace('/', '')) {
      const file = await Deno.readFile(`./static${pathname}`)

      return new Response(file, {
        headers: {
          'content-type': 'application/json; charset=utf-8'
        }
      })
    }
  }

  return new Response('404', {
    headers: {
      'content-type': 'text/plain; charset=utf-8'
    }
  })
}

serve(handleRequest)
