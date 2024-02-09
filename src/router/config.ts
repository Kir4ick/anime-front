import {createWebHistory, RouterOptions} from "vue-router";
import {routeList} from "./route-list";

export const configRouter: RouterOptions = {
    history: createWebHistory(),
    routes: routeList
}
