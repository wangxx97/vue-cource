import Home from '@/views/Home.vue'  /*@代表src*/
import Layout from '@/views/layout.vue'

export default [
	{
		path: '/',
		alias: '/home+_page', // 别名
		name: 'home',
		component: Layout,
		// meta: {
		// 	title: '首页'
		// },
		children: [
			{
				path: 'home_index',
				name: 'home_index',
				meta: {
					title: '首页'
				},
				component: Home
			}
		]
		// props: route => ({
		// 	food: route.query.food
		// }),
		// beforeEnter: (to, from, next) => {
		// 	// if (from.name === 'about') alert('这是从about页来的')
		// 	// else alert('这不是从about页面来的')
		// 	next()
		// }
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/About.vue'),
		props: {
			food: 'banana'
		},
		meta: {
			title: '关于'
		}
	},
	{
		path: '/argu/:name',
		name: 'argu',
		component: () => import('@/views/argu.vue'),
		props: true
	},
	{
		path: '/count-to',
		name: 'count_to',
		component: () => import('@/views/count-to.vue')
	},
	{
		path: '/menu_ page',
		name: 'menu_page',
		component: () => import('@/views/menu-page.vue')
	},
	{
		path: '/render_page',
		name: 'render_page',
		meta: {
			title: 'render_page'
		},
		component: () => import('@/views/render-page.vue')
	},
	{
		path: '/split-pane',
		name: 'split_pane',
		component: () => import('@/views/split-pane.vue')
	},
	{
		path: '/parent',
		name: 'parent',
		component: () => import('@/views/parent.vue'),
		children: [
			{
				path: 'child',
				component: () => import('@/views/child.vue')
			}
		]
	},
	{
		path: '/named_view',
		components: {
			default: () => import('@/views/child.vue'),
			email: () => import('@/views/email.vue'),
			tel: () => import('@/views/tel.vue')
		}
	},
	{
		// 重定项
		path: '/main',
		redirect: {
			name: to => '/'
		}
	},
	{
		path: '/store',
		component: () => import('@/views/store.vue')
	},
	{
		path: '*',
		component: () => import('@/views/error_404.vue')
	}
]
