<template>
    <div class="fillcontain">
        <head-top></head-top>
        <p class="explain_text">餐馆后台管理系统</p>

        <p class="explain_text">实时了解本店营业状态</p>
        <p class="explain_text">详尽的数据统计信息</p>
        <p class="explain_text">老板娘专用</p>
    </div>
</template>

<script>
	import headTop from '../components/headTop'
    export default {
    	components: {
    		headTop,
    	},
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.explain_text{
		margin-top: 20px;
		text-align: center;
		font-size: 20px;
		color: #333;
	}
</style>
