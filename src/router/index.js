import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Classify from '../views/Classify.vue'
import Mine from '../views/Mine.vue'
import Cart from '../views/Cart.vue'
import Detail from '../views/Detail.vue'
import FootBar from '../components/FootBar.vue'
Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default:Home,
      'foot-bar':FootBar
    }
  },
  {
    path: '/classify',
    name: 'Classify',
    components: {
      default:Classify,
      'foot-bar':FootBar
    }
  },
  {
    path: '/mine',
    name: 'Mine',
    components: {
      default:Mine,
      'foot-bar':FootBar
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    components: {
      default:Cart,
      'foot-bar':FootBar
    }
  },
  {
    path:'/detail',
    name:'Detail',
    component:Detail,
  }


]

const router = new VueRouter({
  routes
})

export default router
