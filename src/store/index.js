import { createStore } from 'vuex'
import auth from "./modules/auth.modules"
import boards from "./modules/boards.modules"
// Create a new store instance.
export default createStore({
    modules: {
        auth,
        boards
    }
})