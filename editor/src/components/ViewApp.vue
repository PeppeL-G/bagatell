<template>
	<div
		ref="appDiv"
		class="app"
	/>
</template>

<script>
import { AppElement } from '@bagatell/web-components'

export default {
	props: {
		frameworkApp: Object,
	},
	async mounted(){
		this.appElement = new AppElement()
		this.$refs.appDiv.appendChild(this.appElement)
		this.appElement.showApp(this.frameworkApp)
	},
	watch: {
		frameworkApp(newFrameworkApp, oldFrameworkApp){
			this.appElement.showApp(newFrameworkApp)
		},
	},
}
</script>

<style scoped>

.app{
	width: 100%;
	height: 100%;
}

</style>