<template>
	<div class="app-main">
		<app-header></app-header>
		<AppShopBox></AppShopBox>
		<app-message></app-message>
		<app-footer></app-footer>
	</div>
</template>

<script>
		import AppFooter from '../footer/AppFooter'
	import AppMessage from "../common/AppMessage"
	import AppHeader from "./AppHeader"
	import AppShopBox from "./AppShopBox"
	export default {
		name: 'app-main',
		components:{
			AppHeader,AppShopBox,AppMessage,AppFooter
		}
	}
</script>
<style lang="scss">
	.app-main{
		overflow-y: auto;
	}
</style>