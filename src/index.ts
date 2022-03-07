import { config } from "dotenv";
config();
import { PORT } from './shared/config'
import App from './shared/app'

async function init() {
    const app = new App([], PORT)
    app.listen();
    app.listenGraphql(null,null)
}
init();