import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue'
import Project from './components/Project.vue'
import AboutMe from './pages/AboutMe.vue'
import ProjectsShow from './pages/projects/Project.show.vue'

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
			path: '/blog/:id',
			name: 'projects.show',
			component: ProjectsShow,
			props: true,
		},
        {
            path: '/about-me',
            name: 'about',
            component: AboutMe,
        },
    ]
})

export {router}