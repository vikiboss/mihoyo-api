import { oak } from './deps.ts'
import gsRouter from './src/genshin-impact/router.ts'

const router = new oak.Router({ prefix: '/v1' })

router.all('/', ctx => {
  ctx.response.body = {
    code: 0,
    msg: 'apis v1',
    data: ''
  }
})

router.use(gsRouter.routes())

export default router
