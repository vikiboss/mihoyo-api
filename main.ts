import { Application } from 'oak/mod.ts'
import router from './router.ts'

const app = new Application()

app.use(router.routes())

console.log('running at http://localhost:8000')

await app.listen({ port: 8000 })
