<template>
	<div class="app-type app-box">
		<div class="header-wrap">
			<div class="header-l">
				<a href="javascript:history.go(-1)"> <i class="fa fa-angle-left"></i></a>
			</div>
			<div class="header-inp">
				<router-link to="/search"><span class="search-input" id="keyword">请输入关键字</span></router-link>
				<div class="search-icon"><i class="iconfont">&#xe602;</i></div>
			</div>
			<div class="header-r">
				<a id="header-nav" href="javascript:void(0);"><i class="iconfont">&#xe67c;</i><sup></sup></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app-type'
	}
</script>
<style lang="scss">
	.header-wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.header-l {
			width: .43rem;
			height: .43rem;
			text-align: center;
			line-height: .43rem;
			i {
				font-size: .28rem;
			}
		}
		.header-inp {
			.search-input {
				float: left;
				display: block;
				width: 1.79rem;
				height: 35px;
				font-size: 0.18rem;
				line-height: 35px;
				color: #BBB;
				vertical-align: top;
				border: none 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				padding: 0 6px;
				border-radius: 20px;
				text-align: center;
				border: solid 1px #ccc;
			}
			.search-icon{
				float: left;
				width: .35rem;
				height: .35rem;
				line-height: .35rem;
				text-align: center;
				i{
					font-size: .2rem;
				}
				
			}

		}
		.header-r {
			width: .43rem;
			height: .43rem;
			text-align: center;
			line-height: .43rem;
			i {
				font-size: .28rem;
				color: #000;
			}
		}
	}
</style>