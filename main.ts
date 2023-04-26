import { oak } from './deps.ts'
import router from './router.ts'

const app = new oak.Application()

app.use(router.routes())

console.log('running at http://localhost:8000')

await app.listen({ port: 8000 })
