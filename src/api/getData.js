import fetch from '@/config/fetch'



/**
 * api请求量
 */

export const apiCount = date => fetch('/statis/api/' + date + '/count');

/**
 * 所有api请求量
 */

export const apiAllCount = () => fetch('/statis/api/count');


/**
 * 所有api请求信息
 */

export const apiAllRecord = () => fetch('/statis/api/all');

/**
 * 用户注册量
 */

export const userCount = date => fetch('/statis/user/' + date + '/count');

/**
 * 某一天订单数量
 */

export const orderCount = date => fetch('/statis/order/' + date + '/count');


/**
 * 某一天管理员注册量
 */

export const adminDayCount = date => fetch('/statis/admin/' + date + '/count');

/**
 * 管理员列表
 */

export const adminList = data => fetch('/admin/all', data);

/**
 * 管理员数量
 */

export const adminCount = () => fetch('/admin/count');

/**
 * 获取定位城市
 */

export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
});

/**
 * 获取搜索地址
 */

export const searchplace = (cityid, value) => fetch('/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});



/**
 * 添加食品种类
 */

// export const addCategory = data => fetch('/shopping/addcategory', data, 'POST');


/**
 * 添加食品
 */

export const addFood = data => fetch('/shopping/addfood', data, 'POST');


/**
 * category 种类列表
 */

export const foodCategory = (latitude, longitude) => fetch('/shopping/v2/restaurant/category');

/**
 * 获取餐馆列表
 */

// export const getDishList = data => fetch('/dish/list', data,'POST');





/**
 * 获取餐馆详细信息
 */

export const getResturantDetail = restaurant_id => fetch('/shopping/restaurant/' + restaurant_id);

/**
 * 获取餐馆数量
 */

export const getShopCount = () => fetch('/shop/count');



/**
 * 获取食品列表
 */

export const getFoods = data => fetch('/shopping/v2/foods', data);

/**
 * 获取食品数量
 */

export const getFoodsCount = data => fetch('/shopping/v2/foods/count', data);


/**
 * 获取menu列表
 */

export const getMenu = data => fetch('/shopping/v2/menu', data);

/**
 * 获取menu详情
 */

export const getMenuById = category_id => fetch('/shopping/v2/menu/' + category_id);

/**
 * 更新食品信息
 */

export const updateFood = data => fetch('/shopping/v2/updatefood', data, 'POST');

/**
 * 删除食品
 */

export const deleteFood = food_id => fetch('/shopping/v2/food/' + food_id, {}, 'DELETE');


/**
 * 获取用户数量
 */

export const getUserCount = data => fetch('/v1/users/count', data);



/**
 * 获取订单数量
 */

export const getOrderCount = data => fetch('/bos/orders/count', data);

/**
 * 获取用户信息
 */

export const getUserInfo = user_id => fetch('/v1/user/' + user_id);

/**
 * 获取地址信息
 */

export const getAddressById = address_id => fetch('/v1/addresse/' + address_id);

/**
 * 获取用户分布信息
 */

export const getUserCity = () => fetch('/v1/user/city/count');

/**
 * 桌台
 */
export const getDeskList = data => fetch('/desk/list', data,'POST');
export const addDesk = data => fetch('/desk/add', data,'POST');
export const updateDesk = data => fetch('/desk/update', data,'POST');
export const deleteDesk = data => fetch('/desk/delete', data,'POST');

/**
 * 菜品
 */

export const getDishList = data => fetch('/dish/list', data,'POST');
export const addDish = data => fetch('/dish/add', data,'POST');
export const updateDish = data => fetch('/dish/update', data,'POST');
export const deleteDish = data => fetch('/dish/delete', data,'POST');

/***********************************************************************************/

/**
 * 登陆
 */

export const login = data => fetch('/admin/login', data, 'POST');

/**
 * 店铺
 */

export const getShopList = data => fetch('/shop/queryPage', data,'POST');
export const addShop = data => fetch('/shop/add', data,'POST');
export const updateShop = data => fetch('/shop/update', data,'POST');
export const deleteShop = data => fetch('/shop/delete', data,'POST');

/**
 * 分类
 */
export const getAllCategoryList = data => fetch('/category/queryAll', data,'POST');
export const getCategoryList = data => fetch('/category/queryPage', data,'POST');
export const addCategory = data => fetch('/category/add', data,'POST');
export const updateCategory = data => fetch('/category/update', data,'POST');
export const deleteCategory = data => fetch('/category/delete', data,'POST');

/**
 * 标签
 */

export const getAllTagList = data => fetch('/tag/queryAll', data,'POST');
export const getTagList = data => fetch('/tag/queryPage', data,'POST');
export const addTag = data => fetch('/tag/add', data,'POST');
export const updateTag = data => fetch('/tag/update', data,'POST');
export const deleteTag = data => fetch('/tag/delete', data,'POST');

/**
 * goods
 */

export const getGoodsList = data => fetch('/goods/queryPage', data,'POST');
export const addGoods = data => fetch('/goods/add', data,'POST');
export const updateGoods = data => fetch('/goods/update', data,'POST');
export const deleteGoods = data => fetch('/goods/delete', data,'POST');

/**
 * user
 */

export const getUserList = data => fetch('/user/queryPage', data,'POST');
export const updateUser = data => fetch('/user/update', data,'POST');
export const deleteUser = data => fetch('/user/delete', data,'POST');
/**
 * 订单
 */

export const getOrderList = data => fetch('/order/queryPage', data,'POST');
export const updateOrder = data => fetch('/order/update', data,'POST');
export const deleteOrder = data => fetch('/order/delete', data,'POST');
/**
 * image
 */

export const getImageList = data => fetch('/image/queryPage', data,'POST');
export const addImage = data => fetch('/image/add', data,'POST');
export const updateImage = data => fetch('/image/update', data,'POST');
export const deleteImage = data => fetch('/image/delete', data,'POST');
