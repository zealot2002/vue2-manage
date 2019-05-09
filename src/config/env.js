/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = 'http://172.30.14.202:8030/shop';
let routerMode = 'history';
let baseImgPath = 'http://localhost:8002/files';

// if (process.env.NODE_ENV == 'development') {
// 	//baseUrl = 'http://cangdu.org:8001';
// }else{
// 	baseUrl = 'http://localhost:8080';
// }

export {
	baseUrl,
	routerMode,
	baseImgPath
}
