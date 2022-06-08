<template>
	<div
		ref="appDiv"
		class="app"
	/>
</template>

<script>
import { AppElement } from '@bagatell/web-components'
import { createFrameworkApp } from '@bagatell/core'

export default {
	props: {
		guiComponent: String,
		filename: String,
		// Or
		logicClass: String,
		// filename: String, (mentioned before).
		// Or
		tutorial: String,
		// filename: String, (mentioned before).
		// Or
		classExampleName: String,
		// Or
		variousAppName: String,
	},
	async mounted(){
		
		let module
		
		if(this.classExampleName){
			module = await import('../../examples/'+this.classExampleName+"/App.js")
		}else if(this.guiComponent && this.filename){
			module = await import('../../documentation/gui-components/'+this.guiComponent+'/'+this.filename+".js")
		}else if(this.tutorial && this.filename){
			module = await import('../../tutorials/'+this.tutorial+'/'+this.filename+".js")
		}else if(this.logicClass && this.filename){
			module = await import('../../documentation/classes/'+this.logicClass+'/'+this.filename+".js")
		}else if(this.variousAppName){
			module = await import('../../various-apps/'+this.variousAppName+".js")
		}
		
		const createApp = module.default
		
		const frameworkApp = createFrameworkApp(
			createApp,
			null,
			{isPreview: false}
		)
		
		const appElement = new AppElement()
		this.$refs.appDiv.appendChild(appElement)
		appElement.showApp(frameworkApp)
		
	}
}
</script>

<style scoped>

.app{
	width: 200px;
	height: 300px;
	border: 5px solid black;
	margin: 0 auto;
	overflow: auto;
	resize: both;
}

</style>