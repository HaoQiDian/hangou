<template>
	<div class="app-banner swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(banner,index) in banners">
				<img :src="banner.image" width="100%" />
			</div>
		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	</div>
</template>

<script>
	import MyAjax from "@/modules/MyAjax.js"
	import Swiper from 'swiper'
	import axios from 'axios'
	export default {
		name: 'app-banner',
		data: function() {
			return {
				banners: []
			}
		},
		mounted() {
			var that = this;
			var classID = this.$route.params.classID;
			var url = "http://www.hangowa.com/mo_bile/index.php?act=index&op=special&special_id=1";
			MyAjax.fetchJsonp(url, (data) => {
				that.banners=data.datas.list[0].adv_list.item				
			})
		},
		updated() {
			new Swiper('.app-banner', {
				loop: true,
				autoplay:true
			})
		}
	}
</script>

<style>

</style>