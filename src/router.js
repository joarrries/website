import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: Home
    },
]

function scrollBehavior(to, from, savedPosition) {
    if (to.hash && document.querySelector(to.hash)) {
        return { selector: to.hash };
    }
    if (savedPosition) {
        return savedPosition;
    }
    return false;
}

var router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior,
})
export default router;