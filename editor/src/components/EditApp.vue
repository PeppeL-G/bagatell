<template>
	
	<div class="edit-app">
		
		<div>
			<input type="button" value="Save" @click="save">
		</div>
		
		<CodeEditor
			:code="project.appWrapper.code"
			ref="codeEditor"
		/>
		
		<div>
			<input type="button" value="Save" @click="save">
		</div>
		
	</div>
	
</template>

<script>
import CodeEditor from './CodeEditor.vue'

export default {
	props: {
		project: Object,
	},
	components: {
		CodeEditor,
	},
	methods: {
		save(){
			const codeEditor = this.$refs.codeEditor
			const newCode = codeEditor.getCode()
			this.project.appWrapper.code = newCode
		}
	}
}
</script>

<style scoped>

.edit-app{
	width: 90%;
	margin: 0 auto;
	padding: 1em;
	background-color: lime;
}

</style>