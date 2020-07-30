import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import UserLayout from '@/views/Layouts/UserLayout'
import { getToken } from '@/api/token'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: 'Login' */ '@/views/Login')
    },
    {
      path: '/',
      name: 'UserLayout',
      redirect: { name: 'Home' },
      component: UserLayout,
      meta: {
        isLogin: true
      },
      children: routes
    }
  ]
})

// 是否登录
const isLogin = () => !!getToken()

// 设置网站title
const setDocumentTitle = route => {
  window.document.title = route?.meta?.menu?.text ?? route.name
}

router.beforeEach((to, _from, next) => {
  setDocumentTitle(to)

  if (to.matched.some(record => record.meta.isLogin)) {
    if (isLogin()) {
      next()
    } else {
      next({ name: 'Login' })
    }

    return true
  }

  next()
})

export default router
