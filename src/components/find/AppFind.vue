<template>
	<div class="app-find app-box">
		<header id="header" class="fixed fixed-Width">
			<div class="header-wrap">
				<div class="header-l">
					<a href="javascript:history.go(-1)"> <i class="fa fa-angle-left"></i> </a>
				</div>
				<div class="header-title">
					<h5>发现</h5>
				</div>
				<div class="header-r">
					<a id="header-nav"></a>
				</div>
			</div>
			<div class="nctouch-nav-layout">
				<div class="nctouch-nav-menu">
					<div @click="toggleNav" class="dot">
						<i class="iconfont">&#xe67c;</i>
					</div>
					<ul v-if="isNavShow" class="mynav">
						<li>
							<router-link to="/"><i class="iconfont">&#xe601;</i>首页</router-link>
						</li>
						<li>
							<router-link to=""><i class="iconfont">&#xe602;</i>搜索</router-link>
						</li>
						<li>
							<router-link to="/shopcar"><i class="iconfont">&#xe603;</i>购物车<sup></sup></router-link>
						</li>
						<li>
							<router-link to="/mine"><i class="iconfont">&#xe62c;</i>我的商城</router-link>
						</li>
						<li>
							<a href="javascript:void(0);"><i class="iconfont">&#xe61b;</i>消息<sup></sup></a>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<app-banner></app-banner>
		<div class="nctouch-home-block">

			<div class="tit-bar">专题精选</div>

			<ul class="item-pic-list">

				<li style="width:33.33%">
					<a href="http://www.hangowa.com/?act=special&amp;op=show&amp;special_id=34"><img shopwwi-url="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05314836019389148.jpg" src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05314836019389148.jpg" alt="" style="display: inline;"></a>
				</li>

				<li style="width:33.33%">
					<a href="http://www.hangowa.com/wap/tmpl/product_detail.html?goods_id=101739"><img shopwwi-url="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05336599045227408.jpg" src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05336599045227408.jpg" alt="" style="display: inline;"></a>
				</li>

				<li style="width:33.33%">
					<a href="http://www.hangowa.com/wap/special.html?special_id=15"><img shopwwi-url="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05314837549337028.jpg" src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05314837549337028.jpg" alt="" style="display: inline;"></a>
				</li>

			</ul>
		</div>
		<div class="nctouch-home-block">

			<ul class="item-pic-list">

				<li style="width:50%">
					<a href="http://www.hangowa.com/wap/tmpl/product_detail.html?goods_id=101112"><img shopwwi-url="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05349393377278294.jpg" src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05349393377278294.jpg" alt="" style="display: inline;"></a>
				</li>

				<li style="width:50%">
					<a href="http://www.hangowa.com/wap/tmpl/product_detail.html?goods_id=101732"><img shopwwi-url="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05349393790488027.jpg" src="http://www.hangowa.com/data/upload/mobile/special/s1/s1_05349393790488027.jpg" alt="" style="display: inline;"></a>
				</li>

			</ul>
		</div>
		<div class="nctouch-home-block item-goods">

			<div class="tit-bar">精选专题商品</div>

			<ul class="goods-list">

				<li v-for="good1 in goodsList1">
					<router-link :to="{name:'detail',query:{goodsID:good1.goods_id}}">
						<div class="goods-pic"><img :src="good1.goods_image" style="display: inline;"></div>
						<dl class="goods-info">
							<dt class="goods-name">{{good1.goods_name}}</dt>
							<dd class="goods-price">￥<em>{{good1.goods_promotion_price}}</em></dd>
						</dl>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="nctouch-home-block item-goods">
	
		<div class="tit-bar">全球精选</div>
	
		<ul class="goods-list">
		
			<li v-for="good2 in goodsList2">
				<router-link :to="{name:'detail',query:{goodsID:good2.goods_id}}">
					<div class="goods-pic"><img :src="good2.goods_image" style="display: inline;"></div>
					<dl class="goods-info">
						<dt class="goods-name">{{good2.goods_name}}</dt>
						<dd class="goods-price">￥<em>{{good2.goods_promotion_price}}</em></dd>
					</dl>
				</router-link>
			</li>		
		</ul>
	</div>
		<app-message></app-message>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from '../footer/AppFooter'
	import AppMessage from "../common/AppMessage"
	import AppBanner from "./AppBanner"
	import MyAjax from "@/modules/MyAjax.js"
	export default {
		name: 'app-find',
		data: function() {
			return {
				isNavShow: false,
				goodsList1:[],
				goodsList2:[]
			}
		},
		methods: {
			toggleNav() {
				this.isNavShow = !this.isNavShow
			}
		},
		components: {
			AppBanner,
			AppMessage,
			AppFooter
		},
		mounted() {
			var that = this;			
			var url = "http://www.hangowa.com/mo_bile/index.php?act=index&op=special&special_id=1"
			MyAjax.fetchJsonp(url, (data) => {
//				console.log(data.datas.list[3].goods.item)
                that.goodsList1=data.datas.list[3].goods.item;
                that.goodsList2=data.datas.list[4].goods.item;
                console.log(that.goodsList1)
                
			})
		}
	}
</script>
<style lang="scss" scoped>
.item-pic-list{
	li{
		float: left;
	}
	img{
		width: 100%;
		}
}


	#header {
		background: #e7e7e9;
		padding: 10px;
		height: .72rem;
		position: relative;
		.header-wrap {
			width: 64.6%;
			float: left;
			height: 45px;
			line-height: 45px;
			float: left;
			display: block;
			max-width: 320px;
			max-width: 640px;
			margin: 0;
			text-align: center;
			h5 {
				font-size: .22rem;
				font-weight: normal;
			}
		}
		.mynav {
			position: absolute;
			bottom: -1.85rem;
			right: 0.1rem;
			z-index: 455;
			li {
				width: 1.1rem;
				height: .41rem;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				background: #000000;
				opacity: .9;
				color: #fff;
				border-bottom: 1px solid #ccc;
				a {
					margin-left: .1rem;
					color: #fff;
				}
			}
		}
		.header-l {
			width: .42rem;
			height: .42rem;
			line-height: .42rem;
			float: left;
			font-size: .28rem;
		}
		.nctouch-nav-layout {
			float: right;
			margin-left: 20px;
			.dot {
				margin-left: .5rem;
				width: .53rem;
				height: .42rem;
				text-align: center;
				line-height: .42rem;
				i {
					font-size: .3rem;
				}
			}
		}
	}
	.nctouch-home-layout {
		display: block;
		max-width: 640px;
		margin: 0 auto;
		overflow: hidden;
		position: relative;
		z-index: 0;
	}
	
	.item-goods {
		background-color: #fff;
	}
	
	.nctouch-home-block {
		width: 100%;
		clear: both;
		margin: 0;
		background: #fff;
	}
	
	.item-goods .tit-bar {
		font-size: 0.14rem;
		font-weight: normal;
		padding: 0.05rem 0 0;
		text-align: center;
		line-height: 0.25rem;
		border-left: 0;
		color: #333;
	}
	
	.item-goods .desc {
		font-size: 0.12rem;
		font-weight: normal;
		text-align: center;
		line-height: 0.17rem;
		border-left: 0;
		color: #333;
	}
	
	.item-goods .time {
		color: #999;
		display: inline-block;
		position: relative;
	}
	
	.item-goods .time:before {
		content: '';
		display: block;
		width: 0.176rem;
		height: 0.01rem;
		background: #ddd;
		position: absolute;
		top: 0.07rem;
		left: -0.275rem;
	}
	
	.item-goods .time:after {
		content: '';
		display: block;
		width: 0.176rem;
		height: 0.01rem;
		background: #ddd;
		position: absolute;
		top: 0.07rem;
		right: -0.275rem;
	}
	
	.item-goods ul.goods-list {
		font-size: 0;
		margin-bottom: 0.11rem;
		margin-top: 0.11rem;
	}
	
	.item-goods ul.goods-list li {
		background-color: #FFF;
		vertical-align: top;
		display: inline-block;
		width: 47%;
		overflow: hidden;
		border-radius: 0.04rem;
	}
	
	.item-goods ul.goods-list li img {
		width: 100%;
		height: 100%
	}
	
	.item-goods ul.goods-list li:nth-child(even) {
		margin: 0.11rem 2% 0 1%;
	}
	
	.item-goods ul.goods-list li:nth-child(odd) {
		margin: 0.11rem 1% 0 2%;
	}
	
	.item-goods ul.goods-list li .goods-pic {
		width: 100%;
	}
	
	.item-goods ul.goods-list li dl {
		padding: 0.044rem;
	}
	
	.item-goods ul.goods-list li dt.goods-name {
		display: block;
		font-size: 0.14rem;
		line-height: 0.17rem;
		color: #000;
		height: 0.35rem;
		overflow: hidden;
	}
	
	.item-goods ul.goods-list li dd.goods-price {
		display: block;
		font-size: 0.12rem;
		line-height: 0.32rem;
		height: 0.32rem;
		margin-top: 0.09rem;
		padding-top: 0.09rem;
		color: #DB4453;
		border-top: solid 0.02rem #EEE;
	}
</style>