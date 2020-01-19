import Home from '@/views/Home.vue'  /*@代表src*/

export default [
	{
		path: '/',
		alias: '/home+_page', // 别名
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/views/About.vue')
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
]
