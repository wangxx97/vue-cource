import Home from '@/views/Home.vue'  /*@代表src*/

export default [
	{
		path: '/',
		alias: '/home+_page', // 别名
		name: 'home',
		component: Home,
		props: route => ({
			food: route.query.food
		}),
		beforeEnter: (to, from, next) => {
			// if (from.name === 'about') alert('这是从about页来的')
			// else alert('这不是从about页面来的')
			next()
		}
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
