<template>
	<div class="app-detail-banner swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(banner,index) in goodsListImg">
				<img :src="banner" width="100%" />
			</div>
		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import MyAjax from "@/modules/MyAjax.js"
	export default {
		name: 'app-detail-banner',
		props:["goodsListImg"],
		data: function() {
			return {				
			}
		},
		updated() {
			new Swiper('.app-detail-banner', {
				loop: true,
				autoplay: true,
				pagination: {
					el: '.swiper-pagination',
				}
			})
		}
	}
</script>
<style lang="scss" scoped>
	.swiper-container {
		width: 352px;
		height: 352px;
	}
</style>