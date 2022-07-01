<template>
	<div class="wrapper">
		<EditorApp
			class="editor"
		/>
	</div>
</template>

<script>
import EditorApp from '@bagatell/editor/App.vue'

export default {
	components: {
		EditorApp,
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