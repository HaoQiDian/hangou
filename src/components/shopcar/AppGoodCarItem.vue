<template>
	<div class="app-good-car-item">
		<div class="nctouch-cart-container">
			<dl class="nctouch-cart-store">
				<dt><span class="store-check">
							<input class="store_checkbox" v-model="info.isSelected" type="checkbox">
						</span>
						<i class="icon-store"></i>
						恩施云创特色馆						
					</dt>

			</dl>
			<ul class="nctouch-cart-item">
				<li cart_id="102369" class="cart-litemw-cnt">
					<div class="goods-check">
						<input v-model="info.isSelected" type="checkbox">
					</div>
					<div class="goods-pic">
						<a href="##">
							<img :src="info.image">
						</a>
					</div>
					<dl class="goods-info">
						<dt class="goods-name"> <a href="##"> {{info.title}}</a></dt>
						<dd class="goods-type"></dd>
					</dl>
					<div class="goods-del"  @click="removeGood(info.id)">
						<a href="javascript:void(0);"></a>
					</div>
					<div class="goods-subtotal"> <span class="goods-price">￥<em>{{info.price}}</em></span>
						<span class="goods-sale">
							
							</span>
						<div class="value-box">
							<span class="minus" @click="reduceGood({id:info.id})">
									<i class="fa fa-minus"></i>
								</span>
							<span>
									<input type="text" pattern="[0-9]*" readonly="" class="buy-num buynum" :value="info.num">
								</span>
							<span class="add" @click="addGood({id:info.id,price:info.price,title:info.title,image:info.image})">
									<i class="fa fa-plus"></i>
								</span>
						</div>
					</div>
				</li>
			</ul>

		</div>
	</div>
</template>
<script>
	import MyAjax from "@/modules/MyAjax.js"
	import { mapActions } from 'vuex'
	export default {
		props:['info'],
		name:'app-good-car-item',
		 methods:{
    ...mapActions(['addGood','reduceGood','removeGood'])
  }
	}
</script>
<style lang="scss" scoped>
	
	.nctouch-cart-container {
		display: block;
		clear: both;
		background-color: #FFF;
		margin-bottom: 0.05rem;
		border: solid #EEE;
		border-width: 0.01rem;
	}
	
	.nctouch-cart-store {
		display: block;
		border-bottom: solid 0.01rem #EEE;
	}
	
	.nctouch-cart-store dt {
		position: relative;
		z-index: 1;
		display: block;
		height: 0.42rem;
		padding: 0.05rem;
		font-size: 0.16rem;
		line-height: 0.42rem;
	}
	
	.nctouch-cart-store dt .store-check {
		display: inline-block;
		vertical-align: top;
		margin-right: 0.02rem;
	}
	
	.nctouch-cart-store dt i.icon-store {
		display: inline-block;
		width: 0.18rem;
		height: 0.19rem;
		margin-right: 0.02rem;
		vertical-align: middle;
		background: url(http://www.hangowa.com/wap/images/store_b.png) no-repeat 50% 50%;
		background-size: 90%;
		opacity: 0.8;
	}
	
	.nctouch-cart-item {
		background-color: #FFF;
		border-bottom: solid 0.01rem #EEE;
	}
	
	.nctouch-cart-item li {
		display: block;
		position: relative;
		z-index: 1;
		margin-left: 0.05rem;
		padding: 0.05rem 0;
	}
	
	.nctouch-cart-item li .goods-check {
		position: absolute;
		top: .26rem;
	}
	
	.nctouch-cart-item li .goods-pic {
		display: block;
		width: .6rem;
		height: .6rem;
		padding: 0.02rem;
		position: absolute;
		z-index: 1;
		top: 0.05rem;
		left: .2rem;
		border: solid 0.01rem #EEE;
		border-radius: 0.02rem;
	}
	
	.nctouch-cart-item li .goods-pic a {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.nctouch-cart-item li .goods-pic a img {
		width: 100%;
		height: 100%;
		border-radius: 0.02rem;
	}
	
	.nctouch-cart-item li .goods-info {
		display: block;
		vertical-align: top;
		height: 48px;
		width: 218px;
		margin-left: 90px;
		position: relative;
		z-index: 1;
	}
	
	.nctouch-cart-item li .goods-info dt.goods-name {
		display: block;
	}
	
	.nctouch-cart-item li .goods-info dt.goods-name a {
		display: block;
		height: 30px;
		font-size: 0.12rem;
		color: #111;
		line-height: 0.15rem;
		overflow: hidden;
	}
	
	.nctouch-cart-item li .goods-del {
		display: block;
		position: absolute;
		z-index: 1;
		top: 0.03rem;
		right: 0.05rem;
		width: .22rem;
		height: .22rem;
	}
	
	.nctouch-cart-item li .goods-del a {
		display: block;
		width: 100%;
		height: 100%;
		background-image: url(http://www.hangowa.com/wap/images/del_b.png);
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-size: 60%;
		opacity: 0.4;
	}
	
	.nctouch-cart-item li .goods-subtotal {
		display: block;
		height: .22rem;
		margin: 0 0 0 .9rem;
		line-height: .22rem;
		font-size: 0.12rem;
		position: relative;
		z-index: 1;
	}
	
	.nctouch-cart-item li .goods-subtotal .goods-price {
		color: #DB4453;
		font-size: 0.16rem;
		font-weight: 600;
	}
	
	.nctouch-cart-item li .goods-subtotal .goods-price em {
		font-size: 0.16rem;
	}
	
	.nctouch-cart-item li .value-box {
		position: absolute;
		z-index: 1;
		bottom: 0;
		right: 0;
	}
	
	.value-box span.minus {
		text-align: center;
		line-height: 26px;
		float: left;
		background-color: #FAFAFA;
		border: 1px solid #ccc;
		width: 26px;
		height: 26px;
		display: block;
		border-radius: 0.02rem 0 0 0.02rem;
	}
	
	.value-box span.minus i {}
	
	.value-box span .buy-num {
		float: left;
		width: .27rem;
		height: .26rem;
		padding: 0;
		font-size: 0.12rem;
		font-weight: lighter;
		line-height: .26rem;
		text-align: center;
		border: solid #CCC;
		border-width: 0 0.01rem;
		border-radius: 0;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	
	.value-box span.add {
		text-align: center;
		float: left;
		border: 1px solid #ccc;
		width: 26px;
		height: 26px;
		line-height: 26px;
		display: block;
		background-color: #FAFAFA;
		border-radius: 0 0.02rem 0.02rem 0;
	}
	
	.value-box span.add i {}
</style>