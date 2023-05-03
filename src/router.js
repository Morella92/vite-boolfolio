import { createRouter, createWebHistory } from "vue-router";

const router= createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
        {
            path: '/about-me',
            name: 'about',
            component: AboutMe,
        }
    ]
})

export {router}