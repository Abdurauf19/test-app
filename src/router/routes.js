export const routes = [
	{
		path: '/',
		meta: { title: 'index', layout: 'LDefault' },
		component: () => import('~/pages/index.vue'),
	},
	{
		path: '/login',
		meta: { title: 'login', layout: 'LEmpty' },
		component: () => import('~/pages/auth/login.vue'),
	},
	{
		path: '/students',
		meta: { title: 'students', layout: 'LDefault' },
		component: () => import('~/pages/students/index.vue'),
	},
	{
		path: '/tests/:id',
		meta: { title: 'tests/add', layout: 'LDefault' },
		component: () => import('~/pages/tests/add.vue'),
	},
	{
		path: '/tests/add',
		meta: { title: 'tests/add', layout: 'LDefault' },
		component: () => import('~/pages/tests/add.vue'),
	},
	{
		path: '/tests/solve',
		meta: { title: 'tests/solve', layout: 'LDefault' },
		component: () => import('~/pages/tests/solve.vue'),
	},
	{
		path: '/:path(.*)',
		meta: { title: '404', layout: 'L404' },
		component: () => import('~/pages/404.vue'),
	},
];
