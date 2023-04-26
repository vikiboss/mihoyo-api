import { oak } from '../../deps.ts'

const router = new oak.Router({ prefix: '/sr' })

router.get('/', ctx => (ctx.response.body = 'star rail api'))

export default router
