<template>
	<div class="app-detail-header app-box">
		<header id="header">
			<div class="header">
				<span @click="back()"> <i class = "fa fa-angle-left"></i></span>
				<span> <i class = "iconfont icon-unie644"></i></span>
			</div>
		</header>
	</div>
</template>

<script>
	import MyAjax from "@/modules/MyAjax.js"
	export default {
		name: 'app-detail-header',
		methods: {
			back() {
				history.back();
			}
		}
	}
</script>
<style lang="scss" scoped>
	#header {
		width: 100%;
		position: fixed;
		z-index: 100;
		background: rgba(0, 0, 0, 0) !important;
		.header {
			width: 100%;
			height: 43px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			span {
				line-height: 33px;
				text-align: center;
				width: 33px;
				height: 33px;
				border-radius: 50%;
				display: inline-block;
				background: rgba(0, 0, 0, 0.2);
				color: #000;
				background: #fff;
				i{
					font-size: 0.2rem;
				}
				
			}
		}
	}
</style>