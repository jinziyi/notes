/**
 * Created by cjy on 16/11/23.
 */
const routes = {
	login: '/login',
	group: '/',
	add: '/add',
	itemNew: '/item/new',
	favour: '/favour',
	setting: '/setting',
	groupList: '/group/:groupId'
}

export const getRoute = (key, params = {}) => {
	let finalRoute = routes[key];
	Object.keys(params).forEach(key => finalRoute = finalRoute.replace(':' + key, params[key]));
	return finalRoute;
}

export default routes;