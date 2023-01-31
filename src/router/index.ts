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
    },
		{
			path: '/app',
			name: 'template',
			redirect: 'app/dashboard',
			component: () => import('../pages/layout/DashboardLayout.vue'),
			children: [
				{
					path: "dashboard",
					name: "Dashboard",
					component: () => import("../pages/Overview.vue"),
				}
			]
		}
  ]
})

export default router
