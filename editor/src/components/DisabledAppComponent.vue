<template>
	
	<div class="disabled-app">
		
		<ViewApp
			class="app-component"
			:frameworkApp="frameworkApp"
			:isPreview="true"
		/>
		
		<div class="overlay" />
		
	</div>
	
</template>

<script>
import ViewApp from './ViewApp.vue'

export default {
	components: {
		ViewApp
	},
	props: {
		frameworkApp: Object,
	},
}

</script>

<style scoped>

.disabled-app{
	background-color: aqua;
	position: relative;
}

.app-component{
	width: 100%;
	height: 100%;
	position: relative;
}

.disabled-app .overlay{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
}

</style>