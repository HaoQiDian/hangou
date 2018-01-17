<template>
	<div class="app-detail app-box">
		<app-detail-header></app-detail-header>
		<app-detail-banner :goodsListImg="goodsListImg"></app-detail-banner>

		<div class="goods-con">
			<div class="goods-detail-name">
				<dl>
					<dt>{{goodsTitle.goods_name}}</dt>
					<dd>{{goodsTitle.goods_jingle}}</dd>
				</dl>
			</div>
			<div class="goods-detail-price">
				<dl>
					<dt>￥<em>{{goodsTitle.goods_price}}</em></dt>
				</dl>
				<span class="sold">销量：{{goodsTitle.goods_salenum}}件</span>
			</div>
			<div class="goods-detail-item">
				<div class="itme-name">送至</div>
				<div class="item-con">
					<dl class="goods-detail-freight">
						<dt>
		   	    	 	 <span id="get_area_selected_name">{{goodsinfo.area_name}}</span>
		   	    	 	 <strong id="get_area_selected_whether">{{goodsinfo.if_store_cn}}</strong>
	   	    	        </dt>
						<dd id="get_area_selected_content">{{goodsinfo.content}}</dd>
					</dl>
					<i class="iconfont icon-shouhuodizhi"></i>
				</div>
			</div>
			<div class="goods-detail-item" id="goods_spec_selected" style="border: 0;">
				<div class="itme-name">已选</div>
				<div class="item-con">
					<dl class="goods-detail-sel">
						<dt>					
							<span>默认</span>
							<i class="fa fa-angle-right"></i>
				       </dt>
					</dl>
				</div>
				<div class="item-more"></div>
			</div>
			<div class="goods-detail-comment" id="goodsEvaluation1">
				<div class="title">
					<a id="goodsEvaluation1" href="javascript:void(0);">商品评价<span class="rate">好评率<em>100%</em></span><span class="rate-num">（18人评价）</span>
						<i class="fa fa-angle-right"></i>
					</a>
				</div>
				<div class="comment-info">

				</div>
			</div>
			<div class="goods-detail-store">
				<a href="##">
					<div class="store-name"><i class="iconfont">&#xe624;</i>恩施云创特色馆<i class="fa fa-angle-right"></i></div>
					<div class="store-rate">
						<span class="">描述相符
					<em>4.8</em>
					<i></i>
				</span>
						<span class="">服务态度
					<em>4.9</em>
					<i></i>
				</span>
						<span class="">发货速度
					<em>4.9</em>
					<i></i>
				</span>
					</div>

				</a>
			</div>
			<div class="goods-detail-recom">
				<h4>店铺推荐</h4>
				<ul>
					<li>
						<a href="##">
							<div class="pic"><img src="http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05423736452472697_240.jpg"></div>
							<dl>
								<dt>恩施鹤峰高山黄豆 鹤燕食品精制干豆皮500g*2包精制腐竹包邮</dt>
								<dd>￥<em>12.90</em></dd>
							</dl>
						</a>
					</li>

					<li>
						<a href="##">
							<div class="pic"><img src="http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05421118501895868_240.jpg"></div>
							<dl>
								<dt>恩施鹤峰高山黄豆 鹤燕食品精制干豆皮500g*1包精制腐竹包邮</dt>
								<dd>￥<em>8.90</em></dd>
							</dl>
						</a>
					</li>

					<li>
						<a href="product_detail.html?goods_id=102385">
							<div class="pic"><img src="http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05422882417013735_240.jpg"></div>
							<dl>
								<dt>湖北恩施鹤峰高山精制红薯粉条400g/袋包邮</dt>
								<dd>￥<em>9.90</em></dd>
							</dl>
						</a>
					</li>

					<li>
						<a href="##">
							<div class="pic"><img src="http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05422885158972865_240.jpg"></div>
							<dl>
								<dt>湖北恩施鹤峰高山精制红薯粉条粉丝400g*2袋包邮</dt>
								<dd>￥<em>13.90</em></dd>
							</dl>
						</a>
					</li>

					<li>
						<a href="##">
							<div class="pic"><img src="http://www.hangowa.com/data/upload/shop/store/goods/48/2016/48_05259557383095809_240.jpg"></div>
							<dl>
								<dt>农家手工自制 麻辣瘦肉香肠500g/袋  慢熏微辣 包邮 高山土猪腊肠</dt>
								<dd>￥<em>42.90</em></dd>
							</dl>
						</a>
					</li>

					<li>
						<a href="##">
							<div class="pic"><img src="http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05624327675335880_240.jpg"></div>
							<dl>
								<dt>湖北恩施鹤峰高山精制土豆细粉400g袋包邮</dt>
								<dd>￥<em>9.90</em></dd>
							</dl>
						</a>
					</li>

					<li>
						<a href="##">
							<div class="pic"><img src="http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05666447386175098_240.jpg"></div>
							<dl>
								<dt>农家自种恩施鹤峰铁炉椪柑新鲜水果5斤装包邮</dt>
								<dd>￥<em>19.90</em></dd>
							</dl>
						</a>
					</li>

					<li>
						<a href="##">
							<div class="pic"><img src="http://www.hangowa.com/data/upload/shop/store/goods/48/2017/48_05624136223874422_240.jpg"></div>
							<dl>
								<dt>湖北恩施鹤峰高山精制土豆细粉 400g*2袋包邮</dt>
								<dd>￥<em>13.90</em></dd>
							</dl>
						</a>
					</li>

				</ul>
			</div>

		</div>
		<div class="goods-detail-foot">
			<div class="otreh-handle">
				<a href="javascript:void(0);" class="kefu"><i class="fa fa-user-circle"></i>
					<p>客服</p>
				</a>
				<router-link to="/shopcar" class="cart"><i></i>
					<span class="iconfont">&#xe603;</span>
					<p>购物车</p>
				</router-link>
			</div>
			<div class="buy-handle">
				<div class="animation-up buy-now" @click="toggleCar">立即购买</div>
				<div class="animation-up add-cart" @click="toggleCar">加入购物车</div>
			</div>
		</div>
		<AppGoodsTocar :toggleCar='toggleCar' v-if="isShow" :goodsTitle="goodsTitle" :goodsimage="goodsimage" :goodsID = "$route.query.goodsID"></AppGoodsTocar>
	</div>

</template>

<script>
	import MyAjax from "@/modules/MyAjax.js"
	import AppDetailHeader from "../detail/AppDetailHeader"
	import AppDetailBanner from "../detail/AppDetailBanner"
	import AppGoodsTocar from "../detail/AppGoodsTocar"
	export default {
		name: 'app-detail',
		data: function() {
			return {
				goodsTitle: [],
				goodsinfo: [],
				goodsimage:[],
				goodsListImg: [],
				isShow: false
			}
		},
		methods: {
			toggleCar() {
				this.isShow = !this.isShow
			}
		},

		mounted() {
			var that = this;
			var goodsID = this.$route.query.goodsID;
			var url = "http://www.hangowa.com/mo_bile/index.php?act=goods&op=goods_detail&goods_id=" + goodsID;
			MyAjax.fetchJsonp(url, (data) => {
				that.goodsTitle = data.datas.goods_info;
				that.goodsinfo = data.datas.goods_hair_info;
				var images = data.datas.goods_image;
				that.goodsListImg = images.split(',');
//				console.log(that.goodsTitle)
				that.goodsimage=data.datas.goods_commend_list[0]
			})
		},
		components: {
			AppDetailHeader,
			AppDetailBanner,
			AppGoodsTocar
		}
	}
</script>
<style lang="scss" scoped>
.goods-detail-foot {
	 width: 100%;
		height: .44rem;
		.otreh-handle{
			width: 1.16rem;
			height:44px;
			float:left;
			.kefu {
				text-align: center;
				height: 44px;
				width: .58rem;
				display: block;
				color: #888;
				float: left;
				border-top: 1px solid #ccc;
				border-right: 1px solid #ccc;
			}
			.cart {
				text-align: center;
				height: 44px;
				width: .58rem;
				display: block;
				color: #888;
				float: left;
				border-top: 1px solid #ccc;
			}
		}
		.buy-handle{
			width: 2.59rem;
			height: 44px;
			float: right;
			.buy-now {
				background-color: #ED5564;
				width: 1.14rem;
				line-height: 44px;
				text-align: center;
				float: left;
				color: #fff;
				font-weight: bolder;
				font-size: 14px;
			}
			.add-cart {
				width: 1.45rem;
				height: 44px;
				float: left;
				background-color: #FB6E52;
				line-height: 44px;
				text-align: center;
				color: #fff;
				font-weight: bolder;
				font-size: 14px;
			}
		}
		
		
	}
	.app-detail {
		background: #fff;
	}
	
	.goods-con {
		padding: 0.1rem 0.15rem 0.05rem 0.15rem;
		.goods-detail-name {
			display: block;
			background-color: #FFF;
			overflow: hidden;
			dt {
				display: block;
				font-size: 0.15rem;
			}
			dd {
				font-size: 12px;
				color: #777;
			}
		}
		.goods-detail-price {
			display: flex;
			justify-content: space-between;
			margin-top: 10px;
			dt {
				color: #DB4453;
				font-size: 12px;
				em {
					font-size: 24px;
				}
			}
			.sold {
				font-size: 12px;
				line-height: 27px;
				color: #000;
			}
		}
		.goods-detail-item {
			border-bottom: solid 1px #EEE;
			display: flex;
			margin-top: 15px;
			.itme-name {
				color: #888;
				font-size: 13px;
				margin-right: 10px;
				width: 30px;
			}
			.item-con {
				display: flex;
				justify-content: space-between;
				width: 100%;
				dl {
					#get_area_selected_name {
						font-size: 14px;
						color: #333;
						margin-right: 10px;
					}
					#get_area_selected_whether {
						font-size: 14px;
						color: #ED5564;
					}
					#get_area_selected_content {
						color: #888;
						font-size: 14px;
						margin: 10px 0;
					}
					dd {
						font-size: .12rem!important;
					}
				}
			}
		}
	}
	
	.goods-detail-sel dt {
		width: 307px;
		display: flex;
		justify-content: space-between;
		span {
			display: block;
			width: 35px;
			height: 22px;
			line-height: 22px;
			border: 1px solid #ccc;
			font-size: 14px;
			margin-bottom: 10px;
			text-align: center;
		}
		i {
			font-size: 22px;
		}
	}
	
	#goodsEvaluation1 {
		height: 44px;
		margin-top: 10px;
		line-height: 44px;
		.rate {
			margin-left: 20px;
		}
		.rate-num {
			margin-left: 80px;
		}
		a {
			color: #000;
			i {
				float: right;
				font-size: 22px;
				padding-top: 10px;
			}
		}
	}
	
	.goods-detail-store {
		height: 75px;
		margin: 10px 0;
		.store-name {
			color: #333;
			font-size: 16px;
			height: 36px;
			border-bottom: solid 1px #EEE;
			.fa {
				float: right;
				font-size: 22px;
			}
		}
		.store-rate {
			margin: 10px 0;
			span {
				width: 112px;
				display: block;
				float: left;
				color: #888;
			}
		}
	}
	
	.goods-detail-recom {
		h4 {
			margin: 10px 0;
			color: #888;
		}
		ul li {
			display: inline-block;
			width: 22%;
			margin: 0 2% 0.04rem 0;
		}
		.pic img {
			display: block;
			width: 100%;
			height: 100%;
		}
		dt {
			display: block;
			overflow: hidden;
			height: .27rem;
			font-size: 0.12rem;
			line-height: 0.13rem;
			color: #777;
			margin-bottom: 0.02rem;
		}
		dd {
			color: #333;
		}
	}
	
	
</style>