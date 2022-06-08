<template>
	
	<div class="main-menu">
		
		<h1>Main menu</h1>
		
		<div>
			<button @click="save">Save app to file...</button>
		</div>
		
		<div>
			<input type="file" id="file" style="display: none;" @change="open" accept=".json">
			<button class="open-button">
				<label for="file">Open app from file...</label>
			</button>
		</div>
		
	</div>
	
</template>

<script>
import getClassName from '../functions/get-class-name'

export default {
	props: {
		project: Object,
	},
	methods: {
		save(){
			
			const projectAsJson = JSON.stringify(this.project)
			
			const a = document.createElement('a')
			a.href = "data:application/octet-stream,"+encodeURIComponent(projectAsJson)
			a.download = `${getClassName(this.project.appWrapper.code)}.json`
			a.click()
			
		},
		open(event){
			
			const files = event.target.files
			
			if(files.length == 0){
				return
			}
			
			const file = files[0]
			
			const reader = new FileReader()
			
			reader.readAsText(file)
			
			reader.addEventListener('load', (event) => {
				const openedProject = JSON.parse(event.target.result)
				this.$emit('open-project', openedProject)
			})
			
		}
	}
}
</script>

<style scoped>

.main-menu{
	text-align: center;
}

</style>
