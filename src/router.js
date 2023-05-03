import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import AboutMe from './pages/AboutMe.vue'
// import ProjectsIndex from './pages/projects/Projects.index.vue'

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
        },
        // {
		// 	path: '/projects',
		// 	name: 'projects.index',
		// 	component: ProjectsIndex,
		// },
    ]
})

export {router}