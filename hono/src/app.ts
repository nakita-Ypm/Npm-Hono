import { Context, Hono } from 'hono'
import {logger} from 'hono/logger'

import { PingHandler } from './handler/ping_handler'


export class App {
    static init(): Hono {
        const app = new Hono()

        app.use('*', logger())

        app.use('*', (c: Context, next: any) => {
            console.log(`  ::: ${c.req.method} ${c.req.url}`)
            return next()
        })
        return this.apply_handlers(app)
    }

    static apply_handlers(app: Hono): Hono{
        PingHandler.apply(app)

        return app
    }
}