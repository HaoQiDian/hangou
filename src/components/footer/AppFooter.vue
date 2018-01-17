<template>
	<div class="app-footer app-box">
		<div class="footer">
			<ul v-if="footerShow">
				<li>
					<router-link to="/"><span><i class="iconfont">&#xe601;</i></span>
						<p>首页</p>
					</router-link>
				</li>
				<li>
					<router-link to="/find"><span><i class="iconfont">&#xe603;</i></span>
						<p>发现</p>
					</router-link>
				</li>
				<li>
					<router-link to="/type"><span><i class="iconfont">&#xe600;</i></span>
						<p>类目</p>
					</router-link>
				</li>
				<li>
					<router-link to="/mine"><span><i class="iconfont">&#xe62c;</i></span>
						<p>我的商城</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app-footer',
		data: function() {
			return {
				footerShow: true
			}
		},
//		 watch: {
//			$route () {
//				console.log(this.$route.name)
//				// 不等于登录页面的时候为true
//				this.footerShow = this.$route.name !== 'detail'
//			}
//		}
	}
</script>
<style lang="scss">
	.footer {
		position: fixed;
		width: 100%;
		bottom: 0;
	}
	
	.footer ul {
		background-color: #000;
		opacity: 0.7;
		position: relative;
		z-index: 0;
		height: 0.55rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		li {
			text-align: center;
			span {
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
			p {
				color: #fff;
				font-size: .12rem;
			}
			i {
				width: .28rem;
				height: .28rem;
				display: block;
				text-align: center;
				line-height: .28rem;
				font-size: 0.2rem;
				color: #fff;
				border-radius: 50%;
				opacity: 0.5;
			}
		}
	}
	
	.goods-detail-foot {
		display: flex;
		justify-content: space-between;
		.otreh-handle {
			display: flex;
			justify-content: space-between;
		}
		.cart {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
	}
</style>