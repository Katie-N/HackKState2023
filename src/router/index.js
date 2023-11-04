import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ElectricGuitarLevel from '../views/ElectricGuitarLevel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/electricGuitarLevel',
      name: 'Electric Guitar Level',
      component: ElectricGuitarLevel
    },
  ]
})

export default router
