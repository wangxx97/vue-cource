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
		}
	},
	{
		path: '/argu/:name',
		name: 'argu',
		component: () => import('@/views/argu.vue'),
		props: true
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
		path: '*',
		component: () => import('@/views/error_404.vue')
	}
]
