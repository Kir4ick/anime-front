import { createApp } from 'vue'
// @ts-ignore
import App from "./App.vue";
import {store} from "./store";
import {router} from "./router";

const app = createApp(App)
app.mount('#app')
app.use(store)
app.use(router)
