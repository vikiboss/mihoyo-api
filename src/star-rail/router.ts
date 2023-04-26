import { Router } from 'oak/mod.ts'

const router = new Router({ prefix: '/sr' })

router.get('/', ctx => (ctx.response.body = 'star rail api'))

export default router
