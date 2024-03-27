import { App } from './app'
import { NodeAdapter } from './adapter/node_adapter'

const app = App.init()

NodeAdapter.serveApp(app)

if (process.pid) {
    console.log('This process is server pid ' + process.pid)
}