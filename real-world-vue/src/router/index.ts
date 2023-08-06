import { createRouter, createWebHistory } from 'vue-router'
import PassegerListView from '@/views/PassengerListView.vue'
import PassengerView from '@/views/PassengerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'passenger-list',
      component: PassegerListView
    },
    {
      path: '/passenger',
      name: 'passenger',
      component: PassengerView
    }
  ]
})

export default router
