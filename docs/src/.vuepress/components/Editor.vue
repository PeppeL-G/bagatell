<template>
	<div class="wrapper">
		<App
			class="editor"
		/>
	</div>
</template>

<script>
import App from '@bagatell/editor/src/App.vue'

export default {
	components: {
		App,
	},
}
</script>

<style scoped>

.wrapper{
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
}

</style>