// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/Skills.vue')
  },
  {
    path: '/strategy',
    name: 'Strategy',
    component: () => import('../views/Strategy.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
