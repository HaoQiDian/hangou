<template>
	<div class="app-shop-box">
		<div class="nctouch-home-layout" id="main-container2">
			<div class="nctouch-home-block item-goods" v-for='(shop,index) in shops'>
				<div class="tit-bar">{{shop.goods.title}}</div>
				<div class="desc"><span class="time">小编向您推荐以下商品</span></div>
				<ul class="goods-list">
					<li v-for="good in shop.goods.item">
						<router-link :to="{name:'detail',query:{goodsID:good.goods_id}}">
							<div class="goods-pic">
								<img :src="good.goods_image" alt="" />
							</div>
							<dl class="goods-info">
								<dt class="goods-name">{{good.goods_name}}</dt>
								<dd class="goods-price">￥<em>{{good.goods_promotion_price}}</em></dd>
							</dl>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>

</template>

<script>
	import axios from 'axios'
	import MyAjax from "@/modules/MyAjax.js"
	export default {
		name: 'app-shop-box',
		data: function() {
			return {
				shops: []
			}
		},
		methods: {
			getShops() {
				let that = this
				let url = "http://www.hangowa.com/mo_bile/index.php?act=index"
				MyAjax.fetchJsonp(url, (data) => {
					var list = data.datas.list
					var arr = []
					for(var i = 1; i < 4; i++) {
						arr.push(list[i])
					}
					that.shops = arr;
				})
			}
		},
		mounted() {
			this.getShops()
		}
	}
</script>
<style lang="scss" scoped>
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
.item-goods ul.goods-list li img{
    width:100%;
    height:100%
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