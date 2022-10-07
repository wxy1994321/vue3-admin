import { createRouter, createWebHistory } from 'vue-router'
import localCache from 'utils/localCache';
import { firstMenu } from 'utils/filterMenu';

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import('views/login')
  },
  {
    path: "/main",
    name: "main",
    component: () => import('views/main'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, form) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }
  if (to.path == "/main") {
    return firstMenu.url
  }
})

export default router
