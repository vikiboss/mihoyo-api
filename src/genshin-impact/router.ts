import { Router } from 'oak/mod.ts'

const router = new Router({ prefix: '/gs' })

router.get('/', ctx => (ctx.response.body = 'genshin impact api'))

export default router
