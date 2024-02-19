import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/CustomersView.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../views/MoviesView.vue')
    },
    {
      path: '/rentals',
      name: 'rentals',
      component: () => import('../views/RentalsView.vue')
    }
  ]
})

router.beforeEach((to) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn')

  if (to.path !== '/') {
    if (!isAuthenticated) {
      return false
    }
  }
})

export default router
