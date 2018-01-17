<template>
	<div class="app-mine app-box">
		<div class="member-top">
			<header id="header-mine" class="transparent">
				<div class="header-wrap1">
					<div class="header-l">
						<router-link to="/login"> <i class="iconfont">&#xe7a0;</i></router-link>
					</div>
					<div class="header-r">
						<div @click="toggleNav" class="dot">
							<i class="iconfont">&#xe67c;</i>
						</div>
					</div>
				</div>
				<div class="nctouch-nav-layout">
					<div class="nctouch-nav-menu"> <span class="arrow"></span>
						<ul v-if="isNavShow" class="mynav">
							<li>
								<router-link to="/"><i class="iconfont">&#xe601;</i>首页</router-link>
							</li>
							<li>
								<router-link to="/shopcar"><i class="iconfont">&#xe603;</i>购物车</router-link><sup></sup></li>
							<li>
								<router-link to="/"><i class="iconfont">&#xe61b;</i>消息<sup></sup></router-link>
							</li>
						</ul>
					</div>
				</div>
			</header>
			<div class="member-info">
				<router-link to="/login" class="default-avatar" style="display:block;"></router-link>
				<router-link to="/login" class="to-login">点击登录</router-link>
			</div>
			<div class="member-collect">
				<span><router-link to="/"><i class="iconfont">&#xe682;</i><p>商品收藏</p></router-link> </span>
				<span><router-link to="/"><i class="iconfont">&#xe624;</i><p>店铺收藏</p></router-link> </span>
				<span><router-link to="/"><i class="iconfont">&#xe60a;</i><p>我的足迹</p></router-link> </span>
			</div>
		</div>
		<div class="member-center">
			<dl class="mt5">
				<dt>
					<router-link to="/">
			          <h3 style="line-height: 53px;"><i class="fa fa-file-text"></i>我的订单</h3>
			          <h5>查看全部订单<i class="fa fa-angle-right"></i></h5>
                    </router-link>
				</dt>
				<div>
					<ul id="order_ul">
						<li>
							<router-link to="/"><i class="iconfont">&#xe616;</i>
								<p>待付款</p>
							</router-link>
						</li>
						<li>
							<router-link to="/"><i class="iconfont">&#xe611;</i>
								<p>待收货</p>
							</router-link>
						</li>
						<li>
							<router-link to="/"><i class="iconfont">&#xe617;</i>
								<p>待自提</p>
							</router-link>
						</li>
						<li>
							<router-link to="/"><i class="iconfont">&#xe609;</i>
								<p>待评价</p>
							</router-link>
						</li>
						<li>
							<router-link to="/"><i class="iconfont">&#xe6db;</i>
								<p>退款/退货</p>
							</router-link>
						</li>
					</ul>
				</div>
			</dl>
			<dl class="mt5">
				<dt><router-link to="/">
          <h3 style="line-height: 53px;"><i class="iconfont">&#xe605;</i>我的财产</h3>
          <h5>查看全部财产<i class="fa fa-angle-right"></i></h5>
          </router-link></dt>
				<dd>
					<ul id="asset_ul">
					</ul>
				</dd>
			</dl>
			<div id="md5">
				<dl class="mt6">
					<dt><router-link to="/">
		          <h3 style="line-height: 40px;"><i class="iconfont">&#xe7b9;</i>我的分销管理</h3>
		          <h5><i class="fa fa-angle-right"></i></h5>
		          </router-link></dt>
				</dl>
				<dl style="border-top: solid 0.01rem #EEE;">
					<dt><router-link to="/">
		          <h3 style="line-height: 40px;"><i class="iconfont">&#xe642;</i>收货地址管理</h3>
		          <h5><i class="fa fa-angle-right"></i></h5>
		          </router-link></dt>
				</dl>
				<dl style="border-top: solid 0.01rem #EEE;">
					<dt><router-link to="/">
          <h3 style="line-height: 40px;"><i class="iconfont">&#xe7a0;</i>用户设置</h3>
          <h5><i class="fa fa-angle-right"></i></h5>
          </router-link></dt>
				</dl>
			</div>
		</div>
		<app-message></app-message>
		<app-footer></app-footer>
	</div>
</template>

<script>
		import AppFooter from '../footer/AppFooter'
	import AppMessage from "../common/AppMessage"
	export default {
		name: 'app-mine',
		data: function() {
			return {
				isNavShow: false
			}
		},
		methods: {
			toggleNav() {
				this.isNavShow = !this.isNavShow
			}
		},
		components: {
			AppMessage,AppFooter
		}
	}
</script>
<style lang="scss">
	#header-mine .header-wrap1 {
		width: 100%;
		display: flex;
		justify-content: space-between;
		.header-l {
			width: .43rem;
			height: .43rem;
			text-align: center;
			line-height: .43rem;
			float: left;
			i {
				font-size: .28rem;
				color: #fff;
			}
		}
		.header-r {
			width: .43rem;
			height: .43rem;
			text-align: center;
			line-height: .43rem;
			float: right;
			i {
				font-size: .28rem;
				color: #fff;
			}
		}
	}
	
	.nctouch-nav-layout {
		position: relative;
		.mynav {
			position: absolute;
			bottom: -1.2rem;
			right: 0.1rem;
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
	
	.member-info {
		.default-avatar {
			background-color: rgba(0, 0, 0, 0.5);
			background-image: url(http://www.hangowa.com/wap/images/member_w.png);
			background-repeat: no-repeat;
			background-position: 50% 50%;
			background-size: 60%;
			width: .88rem;
			height: .88rem;
			margin: 0 auto;
			border-radius: 100%;
			@keyframes changeBg {
				0% {
					background-color: #ED5564;
				}
				10% {
					background-color: #FB6E52;
				}
				20% {
					background-color: #FFCE55;
				}
				30% {
					background-color: #A0D468;
				}
				40% {
					background-color: #48CFAE;
				}
				50% {
					background-color: #4FC0E8;
				}
				60% {
					background-color: #5D9CEC;
				}
				70% {
					background-color: #AC92ED;
				}
				80% {
					background-color: #EC87BF;
				}
				90% {
					background-color: #ED5564;
				}
			}
			animation:changeBg 20s infinite;
		}
		.to-login {
			display: block;
			font-size: 0.18rem;
			text-align: center;
			color: #FFF;
			line-height: .2rem;
			height: .2rem;
			margin: 0.1rem auto;
		}
	}
	
	.member-top {
		animation: changeBg 20s infinite;
		background-color: #ED5564;
		background-image: url(http://www.hangowa.com/wap/images/member_top_bg.png);
		background-size: cover;
		text-align: center;
		width: 100%;
		height: 2.4rem;
		z-index: 1;
		.member-collect {
			margin-top: 0.1rem;
			height: .68rem;
			background: #000;
			opacity: 0.3;
			display: flex;
			justify-content: space-around;
			align-items: center;
			i {
				font-size: .3rem;
				color: #fff;
			}
			p {
				color: #fff;
			}
		}
	}
	
	.member-center {
		#order_ul {
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: .61rem;
			li a {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: .46rem;
				p {
					color: #ccc;
				}
				i {
					font-size: .22rem;
					color: #ccc;
				}
			}
		}
		.mt5 {
			background: #fff;
			dt {
				border-bottom: solid 0.01rem #EEE;
				a {
					display: flex;
					justify-content: space-between;
					h3 {
						margin-left: .2rem;
						color: #000;
						font-size: .16rem;
						font-weight: normal;
						i {
							font-size: .18rem;
							padding-right: .1rem;
						}
					}
					h5 {
						line-height: .53rem;
						font-size: .14rem;
						color: #ccc;
						i {
							font-size: .22rem;
							margin: 0 .1rem;
						}
					}
				}
			}
		}
	}
	
	#md5 {
		background: #fff;
		dl {
			margin: 0;
			a {
				display: flex;
				justify-content: space-between;
				h3 {
					margin-left: .2rem;
					font-size: .14rem;
					color: #000;
					font-weight: normal;
					i {
						margin-right: .1rem;
					}
				}
				h5 {
					width: .4rem;
					height: .4rem;
					line-height: .4rem;
					text-align: center;
					font-size: .18rem;
					color: #ccc;
				}
			}
		}
	}
</style>