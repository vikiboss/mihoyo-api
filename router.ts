import { Router } from 'oak/mod.ts'
import gsRouter from './src/genshin-impact/router.ts'

const router = new Router({ prefix: '/v1' })

router.use(gsRouter.routes())

export default router
