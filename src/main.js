import './assets/main.css'
import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import store from "@/store";
import App from "./App.vue";
import Welcome from '@/components/Welcome.vue'
import Kanban from '@/components/Kanban.vue'
import SignIn from '@/components/SignIn.vue'
import Boards from '@/components/Boards.vue'

const routes = [{
        path: '/',
        component: Welcome
    },
    {
        path: '/boards/:id',
        component: Kanban
    },
    {
        path: '/boards',
        component: Boards
    },
    {
        path: '/sign-in',
        component: SignIn
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).use(store).mount("#app");