import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import './assets/global.css'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/about', component: () => import('./components/About.vue') },
        { path: '/signup', component: () => import('./components/SignUp.vue') },
        { path: '/', component: () => import('./components/Login.vue') },
        { path: '/mydecks', component: () => import('./components/MyDecks.vue') },
        { path: '/cards/:id', component: () => import('./components/Cards.vue') },
        { path: '/create', component: () => import('./components/Create.vue') },
        { path: '/chart', component: () => import('./components/Chart.vue') },
    ]
})


createApp(App).use(router).mount('#app')
