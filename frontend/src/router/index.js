import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../pages/home.vue'
import tablePage from '../pages/table.vue'
import authorizationField from '../pages/authorizationFieldPage.vue'
import notDone from '../pages/notDone.vue'
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/home',
			component: homePage
		}, 
		{
			path: '/table',
			component: tablePage
		},
		{
			path: '/authorizationField',
			component: authorizationField
		},
		{
			path: '/notDone',
			component: notDone
		}
	]
})

export default router
