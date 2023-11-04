import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ElectricGuitarLevel from '../views/ElectricGuitarLevel.vue'
import PianoLevel from '../views/PianoLevel.vue'

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
    {
      path: '/pianoLevel',
      name: 'Piano Level',
      component: PianoLevel
    },
  ]
})

export default router
