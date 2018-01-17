<template>
	<div class="app-search">
	<div id="container">
		<header id="header">
			<div class="header-wrap3">
				<div class="header-l">
					<a href="javascript:history.go(-1)"> <i class="fa fa-angle-left"></i></a>
				</div>
				<div class="header-inp">
					<input type="text"  style="outline: none;" class="search-input" value="" oninput="writeClear($(this));" id="keyword" placeholder="请输入搜索关键词" maxlength="50" autocomplete="on" autofocus="">
					<span class="input-del"></span>
				</div>
				<div class="header-r">
					<a id="header-nav" href="javascript:void(0);" class="search-btn">搜索</a>
				</div>
			</div>
		</header>
		<div class="reds">
			<dl>
				<dt>热门搜索</dt>
				<dd>
					<ul>
						<li v-for="item in kindlist.list"><a href="">{{item}}</a></li>
					</ul>
				</dd>
			</dl>
		</div>
		<div class="reds ">
			<dl>
				<dt>历史记录</dt>
				<dd>
					<ul class = "his">
						<li v-for="item in his"><a href="">{{item}}</a></li>
					</ul>
				</dd>
				<dd class="clearhis" @click='clear()'>清空历史</dd>
			</dl>
		</div>
		
		
	</div>
	<app-footer></app-footer>
	</div>
</template>

<script>
	import AppFooter from '../footer/AppFooter'
	import MyAjax from "@/modules/MyAjax.js"
	export default{
		name:'app-search',
		data(){
			return{
				kindlist:[],
				local:true,
				his:[]
			}
		},
		mounted(){
			var that = this;
			var Listurl = "http://www.hangowa.com/mo_bile/index.php?act=index&op=search_key_list";
			MyAjax.fetchJsonp(Listurl,(data)=>{
				console.log(data)
				that.kindlist = data.datas
				that.his= data.datas.his_list;
			})
		},
		methods:{
			clear(){
				this.his=[];
			}
		},
		components:{
			AppFooter
		}
		
	}
</script>
<style lang="scss" scoped>
		body,html{
		    background-color: #f5f5f5 !important;
	}
#container{	  
    height: 100%;  
}
#header .header-wrap3{
	height: 43px;
	margin: 10px 0;
	.header-l{
		float: left;
		width: .43rem;
		height: 43px;
		line-height: 43px;
		text-align: center;
		i{
			font-size: 28px;
			color: #ccc;
		}
	}
	.header-inp{
		float: left;
		margin-left: 40px;
		font-size: 14px;
 .search-input {
    float: left;
    width: 1.79rem;
    height: 35px;
    font-size: 0.14rem;
    line-height: 35px;
    color: #BBB;
    vertical-align: top;
    border: none 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 6px;
    border-radius: 20px;
    border: solid 1px #ccc;
	}
	}
	.header-r{
		float: left;
		width: .66rem;
		height: 44px;
		line-height: 44px;
		text-align: center;
		margin-left: 20px;
		
		a{
			color: #333;
			font-size: 16px;
		}
		
	}
}




.reds{
	
	width: 353px;
	margin: 0 auto;
	margin-top:20px ;
	dt {
	    font-size: 0.14rem;
	    line-height: 0.22rem;
	    color: #111;
	    margin-bottom: 0.08rem;
	}
	dd{
		
		ul{
			li{
				border-radius:0.14rem;
				display: inline-block;
			    background-color: #FFF;
			    border: solid 0.01rem #EEE;
			    margin: 0 0.08rem 0.08rem 0;
			    a{
		    	    display: block;
				    padding: 0.045rem 0.1rem;
				    font-size: 0.12rem;
				    line-height: 0.22rem;
				    color: #555;
			    }
			}
		}
	}
	.clearhis{
		width: 278px;
		height:40px;
		margin:0 auto;
		line-height: 40px;
		text-align: center;
		background:#eee ;
		color:#555;
		margin-top:30px ;
	}
}
.his{
	/*display: none;*/
	li{
		border-radius:0 !important;
	}
}
</style>