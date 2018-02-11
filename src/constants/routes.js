/**
 * Created by cjy on 16/11/23.
 */
const routes = {
	register: '/register',
	login: '/login',
	home: '/',
	setting: '/setting',
	item: '/item/:itemId',
	password: '/password',
	favour: '/favour',
	create: '/item/create',
}

export const getRoute = (key, params = {}) => {
	let finalRoute = routes[key];
	Object.keys(params).forEach(key => finalRoute = finalRoute.replace(':' + key, params[key]));
	return finalRoute;
}

export default routes;