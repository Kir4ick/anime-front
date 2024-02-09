import {RouteRecordRaw} from "vue-router";
// @ts-ignore
import HelloWorld from "../components/pages/HelloWorld.vue";

export const routeList: Array<RouteRecordRaw> = [
    {path: '/', name: 'index', component: HelloWorld}
]
