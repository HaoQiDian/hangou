<template>
	<div class="app-message">
		<div class="nctouch-footer-wrap posr">
			<div class="nav-text">
				<router-link to="/login">登录</router-link>
				<router-link to="/">注册</router-link>
				<router-link to="/login">反馈</router-link>
				<a href="javascript:void(0);" class="gotop">返回顶部</a>
			</div>
			<div class="nav-pic">
				<a href="javascript:void(0);"><span><i class="iconfont">&#xe6a8;</i></span>
					<p>客户端</p>
				</a>
				<a href="javascript:void(0);" class="touch"><span><i class="iconfont">&#xe6e0;</i></span>
					<p>触屏版</p>
				</a>
				<a href="javascript:void(0);" class="pc"><span><i class="iconfont">&#xe6d3;</i></span>
					<p>电脑版</p>
				</a>
			</div>
			<div class="copyright">Copyright&nbsp;©&nbsp;2014-2016 汉购网
				<a href="javascript:void(0);">hangowa.com</a>版权所有</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app-message'
	}
</script>
<style lang="scss">
	.app-message{
		margin-top: .20rem;
		background: #fff;
	}
	.nctouch-footer-wrap .nav-text {
		display: flex;
		justify-content: space-around;
		text-align: center;
		height: 0.4rem;
		background: #fff;
		line-height: .4rem;
		border-bottom: solid 0.01rem #EEE;
		a{
			color: #555;
		}
	}
	.nav-pic{
		display: flex;
		justify-content: space-around;
		width: 3.05rem;
		margin-left: 0.3rem;
		a{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			span{
				display: block;
				width: .35rem;
				height: .35rem;
				line-height: .35rem;
				text-align: center;
				border: .01rem solid #ccc;
				border-radius: 50%;
				i{
					font-size: .26rem;
					color: #ccc;
				}				
			}
			p{
				color: #000;
				font-size: .14rem;
			}
		}
	}
	.nctouch-footer-wrap .copyright {
    height: .35rem;
    font-size: 0.12rem;
    line-height: .35rem;
    color: #555;
    text-align: center;
    text-shadow: 1px 1px 0 rgba(255,255,255,1);
    margin-bottom: .55rem;
}
</style>