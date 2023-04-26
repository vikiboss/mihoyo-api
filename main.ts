import { oak } from './deps.ts'
import router from './router.ts'

const app = new oak.Application()

app.use(async (ctx, next) => {
  ctx.response.headers.set('content-type', 'application/json; charset=utf-8')
  await next()
})

app.use(async (ctx, next) => {
  const isHome = ctx.request.url.pathname === '/'

  if (isHome) {
    ctx.response.redirect('/v1')
  } else {
    await next()
  }
})

app.use(router.routes())

console.log('running at http://localhost:8000')

await app.listen({ port: 8000 })
