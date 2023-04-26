import { oak } from '../../deps.ts'
import handleStatic from './handleStatic.ts'

const router = new oak.Router({ prefix: '/gs' })

router.get('/', ctx => {
  return (ctx.response.body = {
    code: 0,
    msg: 'Genshin Impact Api',
    data: ''
  })
})

router.get('/static/:filename', handleStatic)

export default router
