// @ts-ignore
import {createStore, Store} from "vuex";
import {AuthModelStateType} from "../../types/models/auth/auth-model-state.type";

export const authState: Store<AuthModelStateType> = createStore({
    state: () => (<AuthModelStateType>{}),
})
