import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// Setting up routes and configuring their website path
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/CreateComponent')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListComponent')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditComponent')
  }
]

// A new instance of VueRouter is created
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
