<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>数据管理</template>
						<el-menu-item index="userList">用户管理</el-menu-item>
						<el-menu-item index="shopList">店铺管理</el-menu-item>
						<el-menu-item index="categoryList">分类管理</el-menu-item>
						<el-menu-item index="tagList">标签管理</el-menu-item>
						<el-menu-item index="goodsList">商品管理</el-menu-item>
						<el-menu-item index="orderList">订单管理</el-menu-item>
						<el-menu-item index="imageList">图片管理</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain">说明</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{

	}
</style>
