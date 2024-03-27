import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import * as dotenv from 'dotenv'

export class NodeAdapter {
  static serveApp(app: Hono) {
    const defaultPort = 3001

    dotenv.config()
    
    const port = process.env.PORT !== undefined ? parseInt(process.env.PORT) : defaultPort

    console.log(`Listening on port ${port}`)

    serve({ fetch: app.fetch, port: port })
  }
}