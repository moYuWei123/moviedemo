import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
var _this = this
const routes = [
	
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: 'home',
		component: Home,
		meta: {
			isfootshow: true
		}
	},
	{
		path: '/collect',
		name: 'collect',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/collect.vue'),
		meta: {
			isfootshow: true
		},

		beforeEnter(to, from, next) {


			if (localStorage.getItem("key")) {
				next();
			} else {
				alert("请登录")

				next("/me")
			}
		}
	},
	{
		path: '/me',
		name: 'me',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/me.vue'),
		meta: {
			isfootshow: true
		}
	},
	{
		path: '/info',
		name: 'info',
		component: () => import('../views/info.vue'),
		meta: {
			isfootshow: false
		},
		scrollBehavior(to, from, savedPosition) {
			if (savedPosition) {
				return savedPosition
			} else {
				return {
					x: 0,
					y: 0
				}
			}
		}
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

export default router
