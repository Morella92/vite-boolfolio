import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue'
import Project from './components/Project.vue'
import AboutMe from './pages/AboutMe.vue'

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
            component: Project, //richiamo il componente che fa la chiamata axios
        },
        {
            path: '/about-me',
            name: 'about',
            component: AboutMe,
        },
    ]
})

export {router}