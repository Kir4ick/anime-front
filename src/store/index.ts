// @ts-ignore
import {createStore, Store} from "vuex";
import {authClient} from "../api/auth/auth-client";

export const store: Store<object> = createStore({
    modules: {
        auth: authClient
    }
})
