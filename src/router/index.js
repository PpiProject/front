import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginForm from "@/components/LoginForm";
// import MainViev from "@/views/MainView";

const routes = [
  {
    path: '/',
    name: 'start_page',
    component: () => import('../views/StartPage'),
    meta: {
      requiresAuth: false
    }
  },
    {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/home_page',
    name: 'home_page',
    component: () => import('../views/HomePage'),
    meta: {
      requiresAuth: false
    }
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
