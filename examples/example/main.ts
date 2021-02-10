import {Routes} from '../../src/framework/core/route.ts'
import {WelcomeController} from './app/controllers/welcome_controller.ts'

let routes = new Routes()
routes.get("/", WelcomeController.index)

routes.runServer()
