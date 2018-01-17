<template>
	<div id="app">		
		<router-view></router-view>		
	</div>
</template>

<script>
	export default {
		name: 'app',
		data: function() {
			return {

			}
		},
		methods: {

		},
		components: {}

	}
</script>

<style lang="scss">
	@import './styles/app.scss';
	body{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>