<template>
	<div class="app-login app-box">
		<header id="header2">
			<div class="header-wrap2">
				<div class="header-l">
					<router-link to="/"><i class="iconfont">&#xe601;</i>

					</router-link>
				</div>
				<div class="header-title">
					<div>登录</div>
				</div>
				<div class="header-r">
					<router-link to="/register">注册</router-link>
				</div>
			</div>
			<div class="nctouch-main-layout fixed-Width">
				<div class="nctouch-inp-con">
					<form action="" method="">
						<ul class="form-box">
							<li class="form-item">
								<h4>账　户</h4>
								<div class="input-box">
									<input type="text" placeholder="请输入用户名/已验证手机" v-model="username" class="inp" name="username" id="username" oninput="writeClear($(this));">
									<span class="input-del"></span>
								</div>
							</li>
							<li class="form-item">
								<h4>密　码</h4>
								<div class="input-box">
									<input type="password" placeholder="请输入登录密码" v-model="password" class="inp" name="pwd" id="userpwd" oninput="writeClear($(this));">
									<span class="input-del"></span> </div>
							</li>
						</ul>
						<div class="remember-form">
							<input id="checkbox" type="checkbox" checked="" class="checkbox">
							<label for="checkbox">七天自动登录</label>
							<a class="forgot-password" href="##">忘记密码？</a>
						</div>
						<div class="error-tips"></div>
						<div class="form-btn">
							<a href="javascript:void(0);" class="btn" id="loginbtn" :disabled="forbidden">登录</a>
						</div>
					</form>
				</div>
				<div class="joint-login">
					<h2><span>合作账号登录</span></h2>
					<ul>
						<!--<li><a class="weibo" href="javascript: void(0);"></a></li>-->
						<li>
							<i class="iconfont">&#xe661;</i>
						</li>
					</ul>
				</div>
			</div>
		</header>
		<app-footer></app-footer>
	</div>
</template>

<script>
		import AppFooter from '../footer/AppFooter'
	export default {
		name: 'app-login',
		data() {
			return {
				forbidden: false,
				username: null,
				password:null
			}
		},
		methods: {
//			if(this.username == null&&this.password==null) {
//				this.forbidden = true;
//			} else {
//				this.forbidden = false
//			}
	},
	components:{
		AppFooter
	}
		
	}
</script>
<style lang="scss">
	#header2 {
		.header-wrap2 {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 0.42rem;
		}
		height: .42rem;
		.header-l {
			width: .42rem;
			height: .42rem;
			text-align: center;
			line-height: .42rem;
		}
		.header-title {
			font-size: .18rem;
			line-height: 0.42rem;
			width: 0.36rem;
			height: 0.42rem;
		}
		.header-r {
			position: relative;
			z-index: 1;
			display: inline-block;
			white-space: nowrap;
			font-size: .14rem;
			width: .5rem;
			height: 0.42rem;
			line-height: 0.42rem;
			text-align: center;
			color: #ED5564;
		}
		.nctouch-inp-con ul li {
			position: relative;
			z-index: 1;
			display: block;
			height: .43rem;
			background-color: #FFF;
			border-bottom: solid #EEE 0.05rem;
			h4 {
				float: left;
				width: .66rem;
				height: .42rem;
				line-height: .42rem;
				color: #444;
				font-weight: normal;
				margin-left: .28rem;
				text-align: center;
			}
			.input-box {
				float: left;
				input {
					border: 0;
					display: block;
					width: 2.7rem;
					height: .36rem;
					color: #f00;
					outline: none;
				}
			}
		}
		.remember-form {
			height: .2rem;
			margin: .22rem .44rem 0 .44rem;
			.forgot-password {
				margin-left: 1rem;
			}
		}
		.form-btn .btn {
			display: inline-block;
			width: 90%;
			height: .4rem;
			padding: 0;
			margin: 20px 5%;
			font-size: 0.18rem;
			line-height: .4rem;
			text-align: center;
			color: #fff;
			background: #ED5564;
			border: none;
			border-radius: 0.05rem;
		}
		.joint-login {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			h2 {
				span {
					width: 1.16rem;
					height: .2rem;
					display: block;
					font-size: .12rem;
					text-align: center;
					font-weight: normal;
				}
			}
			li {
				width: .43rem;
				height: .43rem;
				text-align: center;
				line-height: .43rem;
				border: 1px solid #ccc;
				border-radius: 50%;
				i {
					font-size: .28rem;
				}
			}
		}
	}
</style>