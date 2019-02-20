import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/teachers',
      name: 'teachers',
      meta: { requiresAuth: true },
      component: () => import(/* webpackChunkName: "teachers" */ './views/Teachers.vue')
    },
    {
      path: '/employees',
      name: 'employees',
      meta: { requiresAuth: true },
      component: () => import(/* webpackChunkName: "employees" */ './views/Employees.vue')
    }
  ]
})

router.beforeEach((...args) => {
  const to = args[0], next = args[2]

  const currentUser = localStorage['user']
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next({ name: 'login', query: { from: window.location.pathname } })
  else if (!requiresAuth || currentUser) next()
})

export default router
