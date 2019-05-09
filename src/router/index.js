import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addCommodity = r => require.ensure([], () => r(require('@/page/addCommodity')), 'addCommodity');
// const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');


const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const categoryList = r => require.ensure([], () => r(require('@/page/categoryList')), 'categoryList');
const tagList = r => require.ensure([], () => r(require('@/page/tagList')), 'tagList');
const goodsList = r => require.ensure([], () => r(require('@/page/goodsList')), 'goodsList');
const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');


const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/userList',
			component: userList,
			meta: ['数据管理', '用户'],
		},{
			path: '/categoryList',
			component: categoryList,
			meta: ['数据管理', '分类'],
		},{
			path: '/tagList',
			component: tagList,
			meta: ['数据管理', '标签'],
		},{
			path: '/goodsList',
			component: goodsList,
			meta: ['数据管理', '商品'],
		},{
			path: '/ orderList',
			component: orderList,
			meta: ['数据管理', '订单'],
		},{
			path: '/explain',
			component: explain,
			meta: ['说明', '说明'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
