import axios from 'npm:axios@^1.3.2'

export { md5 } from 'https://cdn.skypack.dev/hash-wasm'
export * as path from 'https://deno.land/std@0.184.0/path/mod.ts'
export * as oak from 'https://deno.land/x/oak@v12.1.0/mod.ts'

export const req = axios.create({
  validateStatus: () => true,
  headers: {
    referer: 'https://webstatic.mihoyo.com/'
  }
})

req.interceptors.request.use(config => {
  const url = new URL(config.url!)
  const host = url.host

  url.hostname = 'proxy.viki.moe'
  url.searchParams.set('proxy-host', host)

  config.url = url.href

  console.log(config.url)

  return config
})
