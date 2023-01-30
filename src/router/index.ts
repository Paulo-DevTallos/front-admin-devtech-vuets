import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
		{
			path: "/",
			name: "login",
			redirect: "/login",
		},
    {
      path: "/login",
      name: "login",
      component: () => import('../pages/Login.vue'),
    }
  ]
})

export default router
