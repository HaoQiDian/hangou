<template>
	<div class="app-shop-car app-box">
		<header id="header" class="fixed">
			<div class="header-wrap">
				<div class="header-l">
					<a href="javascript:history.go(-1)">
						<i class="fa fa-angle-left"></i>
					</a>
				</div>
				<div class="header-title">
					<h1>购物车</h1>
				</div>
				<div class="header-r">
					<a id="header-nav" href="javascript:void(0);"><i class="more"></i><sup></sup></a>
				</div>
			</div>
			<div class="nctouch-nav-layout">
				<div class="nctouch-nav-menu">
					<i class="iconfont" @click="toggleNav">&#xe67c;</i>
					<ul v-if="isNavShow" class="msg">
						<li>
							<a href="../index.html"><i class="home"></i>首页</a>
						</li>
						<li>
							<a href="../tmpl/search.html"><i class="search"></i>搜索</a>
						</li>
						<li>
							<a href="../tmpl/member/member.html"><i class="member"></i>我的商城</a>
						</li>
						<li>
							<a href="javascript:void(0);"><i class="message"></i>消息<sup></sup></a>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<div id="cart-list-wp" v-if="!car.length">
			<div class="nctouch-norecord cart">
				<div class="norecord-ico"><i class="iconfont">&#xe603;</i></div>
				<dl>
					<dt>您的购物车还是空的</dt>
					<dd>去挑一些中意的商品吧</dd>
				</dl>
				<router-link to="/" class="btn">随便逛逛</router-link>
			</div>
		</div>
		<AppGoodCarItem v-else v-for="item in car" :key='item.id' :info='item'></AppGoodCarItem>
		<AppGoodCarNav></AppGoodCarNav>
	</div>
</template>

<script>
	import AppGoodCarItem from './AppGoodCarItem'
	import AppGoodCarNav from './AppGoodCarNav'
    import {mapState,mapActions} from 'vuex'
	export default {
		name: 'app-shop-car',
		components: {
        AppGoodCarItem, AppGoodCarNav
  },
  computed:{
    ...mapState(['car'])
  },
  
		data: function() {
			return {
				isNavShow: false
			}
		},
		methods: {
			...mapActions(['initCar']),
			toggleNav() {
				this.isNavShow = !this.isNavShow
			}
			
		},
		mounted(){
    //初始化
      this.initCar()
  }
		
	}
</script>
<style lang="scss" scoped>
	#header {
		height: 48px;
		display: flex;
		justify-content: space-between;
		.header-wrap {
			display: flex;
			justify-content: space-between;
			height: 40px;
			line-height: 40px;
			.header-l {
				width: 43px;
				height: 43px;
				line-height: 43px;
				text-align: center;
				i {
					color: #333;
					font-size: 24px;
				}
			}
			.header-title {
				h1 {
					margin-left: 70px;
					font-size: 16px;
				}
			}
		}
		.nctouch-nav-menu {
			width: 43px;
			height: 43px;
			line-height: 43px;
			text-align: center;
			position: relative;
			i {
				color: #333;
				font-size: 24px;
			}
			.msg {
				position: absolute;
				bottom: -1.55rem;
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
		}
	}
	
	.nctouch-norecord {
		position: absolute;
		z-index: -1;
		top: 45%;
		left: 20%;
		width: 220px;
		height: 180px;
		text-align: center;
		.norecord-ico {
			display: inline-block;
			width: 65px;
			height: 65px;
			margin-bottom: 20px;
			line-height: 65px;
			text-align: center;
			background-color: #DDD;
			border-radius: 100%;
			i {
				font-size: 28px;
				color: #fff;
			}
		}
		dl {
			height: .6rem;
			dt {
				display: block;
				height: .22rem;
				margin-bottom: 0.05rem;
				font-size: 0.18rem;
				line-height: .22rem;
			}
			dd {
				display: block;
				height: .22rem;
				margin-bottom: 0.05rem;
				font-size: 0.12rem;
				line-height: .22rem;
				color: #999;
			}
		}
		.btn {
			vertical-align: top;
			display: inline-block !important;
			height: .28rem;
			padding: 0 0.03rem;
			margin: 0 auto;
			font-size: 0.14rem;
			color: #555 !important;
			line-height: .28rem;
			text-align: center;
			background-color: #FFF;
			border: solid 1px #CCC;
			border-radius: 0.03rem;
		}
	}
</style>