<template>
	<div class="back-to-top">

	</div>
</template>

<script>
	export default {
		name: 'back-to-top',
		data() {
			return {
				isBackShow: { value: false }
			}
		},
		Vue.directive('scroll-show', {
			inserted(el, binding) {
				let scope = binding.arg || '200'
				window.addEventListener("scroll", function(e) {
					if(this.scrollY > Number(binding.arg)) {
						binding.value.value = true
					} else {
						binding.value.value = false
					}
				})

			}
		})

		Vue.directive('back-top', {
			inserted(el, binding) {
				let e = binding.arg || 'click'
				el.addEventListener(e, function() {
					document.documentElement.scrollTop = document.body.scrollTop = 0;
				})
			}
		})
	}
</script>
<style lang="scss">

</style>
<BackTop v-back-top v-scroll-show:300='isBackShow' :isShow='isBackShow'></BackTop>
