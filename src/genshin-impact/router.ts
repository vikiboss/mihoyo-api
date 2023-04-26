import { Router } from 'oak/mod.ts'
import handleStatic from './handleStatic.ts'

const router = new Router({ prefix: '/gs' })

router.get('/', ctx => {
  return (ctx.response.body = {
    code: 0,
    msg: 'Genshin Impact Api',
    data: ''
  })
})

router.get('/static/:filename', handleStatic)

export default router
