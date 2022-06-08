<template>
	
	<div class="edit-page-template">
		
		<h1>Edit Page Template</h1>
		
		<CodeEditor
			:code="pageTemplate.code"
			ref="codeEditor"
		/>
		
		<div>
			<input type="button" value="Delete" @click="remove">
			<input type="button" value="Save" @click="save">
		</div>
		
	</div>
	
</template>

<script>
import CodeEditor from './CodeEditor.vue'

export default {
	components: {
		CodeEditor,
	},
	emit: [
		'close'
	],
	props: {
		project: Object,
		pageTemplateId: Number,
	},
	data(){
		return {
			pageTemplate: this.project.pageTemplates.find(
				st => st.id == this.pageTemplateId
			),
		}
	},
	methods: {
		save(){
			const codeEditor = this.$refs.codeEditor
			const newCode = codeEditor.getCode()
			this.pageTemplate.code = newCode
		},
		remove(){
			const pageTemplateIndex = this.project.pageTemplates.findIndex(
				st => st.id == this.pageTemplate.id
			)
			this.project.pageTemplates.splice(pageTemplateIndex, 1)
			this.$emit('close')
		},
	}
}
</script>

<style scoped>

.edit-page-template{
	width: 90%;
	margin: 0 auto;
	padding: 1em;
	background-color: orange;
}

</style>
