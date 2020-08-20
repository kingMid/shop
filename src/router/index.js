import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/Classify.vue'
import Mine from '../views/Mine.vue'
import Cart from '../views/Cart.vue'
Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: Classify,
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },


]

const router = new VueRouter({
  routes
})

export default router
