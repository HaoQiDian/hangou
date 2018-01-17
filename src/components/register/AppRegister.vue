<template>
	<div class="app-register">
		<header id="header">
			<div class="header-wrap5">
				<div class="header-l">
					<router-link to="/"><i class="iconfont">&#xe601;</i></router-link>
				</div>
				<div class="header-title">
					<h1>会员注册</h1>
				</div>
				<div class="header-r">
					<router-link id="header-nav" to="/login" class="text">登录</router-link>
				</div>
			</div>
		</header>
		<div class="nctouch-main-layout fixed-Width">
			<div class="nctouch-single-nav mb5 register-tab">
				<ul>
					<li class="selected">
						<a href="javascript: void(0);"><i class="iconfont">&#xe62c;</i>普通注册</a>
					</li>
					<li>
						<router-link to=""><i class="iconfont">&#xe6a8;</i>手机注册</router-link>
					</li>
				</ul>
			</div>
			<div class="nctouch-inp-con">
				<form action="" method="">
					<ul class="form-box">
						<li class="form-item">
							<h4>&nbsp;用&nbsp;户&nbsp;名</h4>
							<div class="input-box">
								<input type="text" placeholder="请输入6-20个字符" class="inp" name="username" id="username">
								<span class="input-del"></span></div>
						</li>
						<li class="form-item">
							<h4>设置密码</h4>
							<div class="input-box">
								<input type="password" placeholder="请输入6-20位密码" class="inp" name="pwd" id="userpwd">
								<span class="input-del"></span></div>
						</li>
						<li class="form-item">
							<h4>确认密码</h4>
							<div class="input-box">
								<input type="password" placeholder="请再次输入密码" class="inp" name="password_confirm" id="password_confirm" >
								<span class="input-del"></span></div>
						</li>
						<li class="form-item">
							<h4>邮　　箱</h4>
							<div class="input-box">
								<input type="email" placeholder="请输入常用邮箱地址" class="inp" name="email" id="email" >
								<span class="input-del"></span></div>
						</li>
					</ul>
					<div class="remember-form">
						<input id="checkbox" type="checkbox" checked="" class="checkbox">
						<label for="checkbox">同意</label>
						<a class="reg-cms" href="##" target="_blank">用户注册协议</a>
					</div>
					<div class="error-tips"></div>
					<div class="form-btn">
						<a href="javascript:void(0);" class="btn" id="registerbtn">注册</a>
					</div>
				</form>
				<input type="hidden" name="referurl">
			</div>
		</div>
		<app-footer></app-footer>
	</div>
</template>
<script>
		import AppFooter from '../footer/AppFooter'
	import MyAjax from "@/modules/MyAjax.js"
	export default {
		name: "app-register",
		components:{
			AppFooter
		}

	}
</script>
<style lang="scss" scoped>
	.header-wrap5 {
		width: 100%;
		display: flex;
		justify-content: space-between;
		.header-l {
			a {
				width: 43px;
				height: 43px;
				line-height: 43px;
				text-align: center;
				display: block;
				i {
					font-size: 24px;
				}
			}
		}
		.header-title {
			h1 {
				font-size: 16px;
				line-height: 43px;
			}
		}
		.header-r {
			a {
				width: 43px;
				height: 43px;
				line-height: 43px;
				text-align: center;
				display: block;
				font-size: 16px;
				color: #ED5564;
				margin-right: 10px;
			}
		}
	}
	
	.nctouch-single-nav {
		display: block;
		height: .47rem;
		padding: 0 1%;
		background: #FFF;
		border-bottom: solid 0.01rem #EEE;
		margin-bottom: 0.1rem !important;
		ul li {
			width: 49%;
		}
		ul li {
			display: inline-block;
			vertical-align: top;
			text-align: center;
			height: .47rem;
			line-height: .47rem;
			padding: 0!important;
			a {
				color: #333;
			}
		}
	}
	
	.nctouch-inp-con ul {
		background: #FFF;
	}
	
	.nctouch-inp-con ul li {
		display: flex;
		justify-content: space-between;
		position: relative;
		height: 43px;
		z-index: 1;
		display: block;
		margin-left: 0.05rem;
		background-color: #FFF;
		border-bottom: solid #EEE 0.01rem;
	}
	
	.nctouch-inp-con ul li h4 {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: .66rem;
		font-size: 0.16rem;
		line-height: .42rem;
		color: #444;
		float: left;
		margin-left: 20px;
		font-size: 14px;
	}
	
	.nctouch-inp-con ul li .input-box {
		width: 2.76rem;
		padding: 0.05rem 0;
		border: 0 none;
		font-size: 0.16rem;
		color: #000;
		float: right;
		input {
			border: 0;
			height: 33px;
			line-height: 33px;
			outline: none;
		}
	}
	
	.remember-form {
		height: 0.2rem;
		margin: .2rem .35rem 0 .35rem;
		position: relative;
	}
	
	.nctouch-inp-con .form-btn {
		margin-top: .3rem;
	}
	
	.nctouch-inp-con .form-btn .btn {
		display: inline-block;
		width: 90%;
		height: .4rem;
		padding: 0;
		margin: 0 5%;
		font-size: 0.18rem;
		line-height: .4rem;
		text-align: center;
		color: #fff;
		background: #ED5564;
		border: none;
		border-radius: 0.05rem;
	}
</style>