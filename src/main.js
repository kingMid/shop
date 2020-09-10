import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//完全引入
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)

//按需引入

import {SubmitBar,Card,GoodsAction, GoodsActionIcon, GoodsActionButton ,PullRefresh,List,Calendar , Swipe,SwipeItem,Lazyload,Icon,Button ,Cell,CellGroup,NavBar, Tabbar, TabbarItem, Col, Row ,Tab, Tabs,NumberKeyboard ,Field} from 'vant';
import {Sidebar, SidebarItem,Pagination,Toast,Uploader   } from 'vant';
Vue.use(Calendar).use(Swipe).use(SwipeItem).use(Lazyload).use(Button).use(Cell).use(CellGroup).use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Col).use(Row).use(Tab).use(Tabs).use(NumberKeyboard).use(Field);
Vue.use(Sidebar).use(Toast).use(SidebarItem).use(Pagination).use(Uploader).use(List).use(PullRefresh);
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Card).use(SubmitBar);
Vue.config.productionTip = false
import '@/assets/css/rest.css'
import '@/assets/js/rem.js'
import '@/mock/mock.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
