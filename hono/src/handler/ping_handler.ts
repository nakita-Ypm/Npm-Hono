import { Context, Hono } from 'hono'

export class PingHandler {
    static apply(app: Hono) {
        app.get('/', PingHandler.hello)
        app.get('/ping', PingHandler.ping)
    }

    static hello(c: Context) {
        return c.text('Hello World!')
    }

    static ping(c: Context) {
        return c.json({ message: 'pong' })
    }
}