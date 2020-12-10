import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@c/layout/layout.vue'
// import NProgress from 'nprogress'
import { getStorage } from '@/util/util'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Home,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@v/home/home.vue')
      },
      {
        path: '/userlist',
        name: 'userlist',
        meta: {
          title: '用户列表'
        },
        component: () => import('@v/user/userlist.vue')
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          title: '个人中心'
        },
        component: () => import('@v/user/user.vue')
      },
      {
        path: '/changepass',
        name: 'changepass',
        meta: {
          title: '修改密码'
        },
        component: () => import('@v/user/changepass.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@v/login/login.vue')
  },
  {
    path: '/nofind',
    name: 'nofind',
    meta: {
      title: '404'
    },
    component: () => import('@v/error/nofind.vue')
  }
]

const router = new VueRouter({
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title === undefined ? '后台管理系统' : to.meta.title
  const token = getStorage('token')
  if (to.path === '/login' || to.path === '/register') {
    next()
  } else {
    if (token) {
      // NProgress.start()
      if (to.matched.length === 0) {
        next('/nofind')
      }
      next()
    } else {
      next('/login')
    }
  }
})
// router.afterEach(() => {
//   NProgress.done()
// })

export default router
