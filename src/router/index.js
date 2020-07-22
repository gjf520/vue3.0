import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'

const routes = [
{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/about',
  name: 'About',
  // route level code-splitting  路由级代码拆分
  // this generates a separate chunk (about.[hash].js) for this route 这将为此路由生成一个单独的块（about.[hash].js）
  // which is lazy-loaded when the route is visited. 当访问路由时延迟加载。
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
},{
  path:'/test',
  name:'test',
  component:()=> import(/* webpackChunkName: "about" */ '../views/test.vue')
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
