<template>
	<div class="app-header app-box">
		<div class="app-header">
			<header id="header">
				<div class="logo">

				</div>
				<div class="header-wrap">
					<router-link to="/search" class="header-inp">
						<i class="icon"></i>
					</router-link>
					<router-link to="/shopcar" class="m-cart">
					</router-link>
				</div>
			</header>
		</div>
		<div class="item">
			<router-link to="/">
				<img width="100%" height="100%" style="display: block;" src="http://www.hangowa.com/data/upload/mobile/special/s0/s0_05503492593015087.jpg" alt="">
			</router-link>
		</div>
		<div class="nctouch-home-nav">
			<ul>
				<li>
					<router-link to="/type"><span><i class="iconfont">&#xe600;</i></span>
						<p>分类</p>
					</router-link>
				</li>
				<li>
					<router-link to="/shopcar"><span><i class="iconfont">&#xe603;</i></span>
						<p>购物车</p>
					</router-link>
				</li>
				<li>
					<router-link to="/mine"><span><i class="iconfont">&#xe62c;</i></span>
						<p>我的商城</p>
					</router-link>
				</li>
				<li>
					<router-link to="/login"><span><i class="iconfont">&#xe609;</i></span>
						<p>每日签到</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app-header'
	}
</script>

<style lang="scss">
	#header {
		display: flex;
		background: #e7e7e9;
		padding: .1rem;
		height: 0.62rem;
		.logo {
			width: 33.3%;
			float: left;
			height: 0.45rem;
			background: url(http://www.hangowa.com/wap/images/home_logo.png) no-repeat center;
		}
		.header-wrap {
			width: 66.6%;
			float: left;
			height: 0.45rem;
			line-height: 0.45rem;
			.header-inp {
				display: block;
				width: 70%;
				border: solid 1px #ccc;
				border-radius: 20px;
				height: 37px;
				background: #fff;
				float: left;
				overflow: hidden;
				.icon {
					display: block;
					width: 37px;
					height: 37px;
					background: url(http://www.hangowa.com/wap/images/search_ico.png) no-repeat center;
					background-size: 55%;
					float: right;
				}
			}
			.m-cart {
				display: block;
				width: .4rem;
				height: .4rem;
				margin-left: .2rem;
				background: url(http://www.hangowa.com/wap/images/cart_b.png) no-repeat center;
				background-size: 65%;
				float: left;
			}
		}
	}
	
	.nctouch-home-nav ul {
		background-color: #FFF;
		position: relative;
		z-index: 0;
		height: 0.98rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		li {
			text-align: center;
			i {
				width: .52rem;
				height: .52rem;
				display: block;
				text-align: center;
				line-height: .52rem;
				font-size: 0.3rem;
				color: #fff;
				border-radius: 50%;
			}
			p{
				color:#000;
			}
		}
	}
	
	.nctouch-home-nav li:nth-child(1) span i {
		background-color: #FB6E52;
	}
	
	.nctouch-home-nav li:nth-child(2) span i {
		background-color: #48CFAE;
	}
	
	.nctouch-home-nav li:nth-child(3) span i {
		background-color: #4FC0E8;
	}
	
	.nctouch-home-nav li:nth-child(4) span i {
		background-color: #AC92ED;
	}
</style>