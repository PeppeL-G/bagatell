<template>
	
	<div class="edit-page-wrapper">
		
		<div>
			<input type="button" value="Delete" @click="remove">
			<input type="button" value="Preview" @click="showPreview()">
			<input type="button" value="Save" @click="save">
		</div>
		
		<CodeEditor
			:code="pageWrapper.code"
			ref="codeEditor"
		/>
		
		<div>
			<input type="button" value="Delete" @click="remove">
			<input type="button" value="Preview" @click="showPreview()">
			<input type="button" value="Save" @click="save">
		</div>
		
		<Modal v-if="isPreviewing" @close="hidePreview()">
			<ViewApp
				v-if="frameworkApp"
				class="app-component"
				:frameworkApp="frameworkApp"
			/>
			<div
				v-else
				class="app-error"
			>
				Something wrong in app, file or page.<br>
				{{appError}}
			</div>
		</Modal>
		
	</div>
	
</template>

<script>
import CodeEditor from './CodeEditor.vue'
import ViewApp from './ViewApp.vue'
import projectToAppCreator from '../functions/project-to-app-creator'
import Modal from './Modal.vue'
import { createFrameworkApp } from '@bagatell/core'

export default {
	components: {
		CodeEditor,
		ViewApp,
		Modal
	},
	props: {
		project: Object,
		folder: Object,
		pageWrapper: Object,
	},
	emits: [
		'close'
	],
	beforeCreate(){
		this.frameworkApp = null
	},
	data(){
		return {
			isPreviewing: false,
			appError: ""
		}
	},
	methods: {
		showPreview(){
			this.isPreviewing = true
			try{
				const createApp = projectToAppCreator(
					this.project,
					this.pageWrapper,
				)
				const frameworkApp = createFrameworkApp(
					createApp,
					null,
					{isPreview: false}
				)
				frameworkApp.initialize()
				this.frameworkApp = frameworkApp
			}catch(error){
				console.log(error)
				alert(error)
				this.appError = error
			}
		},
		hidePreview(){
			this.isPreviewing = false
			this.frameworkApp = null
			this.appError = null
		},
		save(){
			const codeEditor = this.$refs.codeEditor
			const newCode = codeEditor.getCode()
			this.pageWrapper.code = newCode
		},
		remove(){
			
			if(!confirm("Really delete?")){
				return
			}
			
			const pageWrapperIndex = this.folder.pageWrappers.findIndex(
				sw => sw.id == this.pageWrapper.id
			)
			this.folder.pageWrappers.splice(pageWrapperIndex, 1)
			this.$emit('close')
		},
	}
}
</script>

<style scoped>

.edit-page-wrapper{
	width: 90%;
	margin: 0 auto;
	padding: 1em;
	background-color: aqua;
}

.app-component{
	height: 90vh;
	width: 60vh;
	margin: 0 auto;
	background-color: aqua;
	border: 5px solid black;
}

.app-error{
	height: 90vh;
	width: 60vh;
	margin: 0 auto;
	background-color: black;
	border: 5px solid black;
	color: red;
	font-weight: bold;
	text-align: left;
	white-space: pre;
	font-family: 'Courier New', Courier, monospace;
}

</style>