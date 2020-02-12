import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignIn from "../views/SignInFlow/SignIn";
import Request from "../views/SignInFlow/Request";
import Recover from "../views/SignInFlow/Recover";
import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/signin",
        name: "signin",
        component: SignIn
    },
    {
        path: "/request",
        name: "request",
        component: Request
    },
    {
        path: "/recover",
        name: "recover",
        component: Recover
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const currentUser = netlifyIdentityWidget.currentUser();
    const requiresAuth = to.matched.some(record => {
        return record.meta.requiresAuth;
    });

    if (requiresAuth && !currentUser) {
        next("signin");
    } else {
        next();
    }
});
export default router;