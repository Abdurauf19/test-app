import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.path === '/login') next();
	!localStorage.getItem('auth') ? next({ path: '/login' }) : next();
});

export default router;
