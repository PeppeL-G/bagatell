<template>
	
	<div class="select-page-template-modal">
		
		<h1>Choose Page Template</h1>
		
		<div class="page-template-boxes">
			
			<div
				v-for="est in executedPageTemplates"
				:key="est.template.id"
				class="page-template-box"
			>
				
				<DisabledAppComponent
					class="page-template"
					v-if="est.frameworkApp"
					:frameworkApp="est.frameworkApp"
					@click="addPage(est.template)"
				/>
				
				<div
					class="page-template"
					v-else
				>
					{{est.errorMessage}}
				</div>
				
				<button
					class="edit-page-button"
					@click="editPageTemplate(est.template)"
				>
					Edit
				</button>
				
			</div>
			
		</div>
		
		<button
			class="new-page-template-button"
			@click="createNewPageTemplate()"
		>
			Create new page template
		</button>
		
		
		
		<Modal
			v-if="showEditPageTemplateModal"
			@close="showEditPageTemplateModal = false"
		>
			<EditPageTemplate
				:project="folderComponent.project"
				:pageTemplateId="selectedPageTemplateId"
				@close="showEditPageTemplateModal = false"
			/>
		</Modal>
		
	</div>
	
</template>

<script>
import DisabledAppComponent from './DisabledAppComponent.vue'
import EditPageTemplate from './EditPageTemplate.vue'
import Modal from './Modal.vue'
import projectToAppCreator from '../functions/project-to-app-creator'
import { createFrameworkApp } from '@bagatell/core'

export default {
	components: {
		DisabledAppComponent,
		EditPageTemplate,
		Modal
	},
	props: {
		project: Object,
		folder: Object,
		folderComponent: Object
	},
	data(){
		return {
			showEditPageTemplateModal: false,
			selectedPageTemplateId: -1
		}
	},
	computed: {
		executedPageTemplates(){
			
			return this.project.pageTemplates.map(template => {
				
				let frameworkApp = null
				let errorMessage = null
				
				// Create a fake project with only the template as page.
				const project = JSON.parse(JSON.stringify(this.project))
				project.folders = []
				
				const folder = JSON.parse(JSON.stringify(this.folder))
				folder.name = 'start'
				folder.pageWrappers = []
				
				const pageWrapper = {
					id: 1,
					code: template.code
				}
				
				project.folders.push(folder)
				folder.pageWrappers.push(pageWrapper)
				
				try{
					const createApp = projectToAppCreator(project, pageWrapper)
					const fApp = createFrameworkApp(
						createApp,
						null,
						{isPreview: true},
					)
					fApp.initialize()
					frameworkApp = fApp
				}catch(error){
					console.log("Error in page template", error)
					errorMessage = error
				}
				
				return {
					template,
					frameworkApp,
					errorMessage,
				}
				
			})
			
		},
	},
	methods: {
		addPage(template){
			
			const x = this.folderComponent.createPageMouseX - this.folderComponent.folder.offsetX
			const y = this.folderComponent.createPageMouseY - this.folderComponent.folder.offsetY
			
			const name = prompt("Enter Page name:")
			
			if(!name){
				return
			}
			
			const code = template.code.replace(
				/class \w+ extends/,
				`class ${name} extends`
			)
			
			this.folderComponent.folder.pageWrappers.push({
				id: Math.random(), // TODO!
				code,
				x,
				y,
			})
			
			this.folderComponent.showCreatePageModal = false
			
		},
		editPageTemplate(template){
			
			this.showEditPageTemplateModal = true
			this.selectedPageTemplateId = template.id
			
		},
		createNewPageTemplate(){
			
			const pageTemplates = this.folderComponent.project.pageTemplates
			const id = pageTemplates[pageTemplates.length - 1].id + 1
			
			pageTemplates.push({
				id,
				title: "New Template",
				code: `
class MyPage extends Page{
	onBefore(){
	}
	createGui(){
		return <Rows>
			<Space />
			<Text>Is this a new template?</Text>
			<Cols>
				<Space />
				<Button page={null}>No</Button>
				<Button page={null}>Yes</Button>
				<Space />
			</Cols>
		</Rows>
	}
	onAfter(){
	}
}
				`.trim()
			})
				
			this.showEditPageTemplateModal = true
			this.selectedPageTemplateId = id
			
		}
	}
}
</script>

<style scoped>

.select-page-template-modal{
	background-color: orange;
	padding: 1em;
}

.page-template-boxes{
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	flex-direction: row;
}

.page-template-box{
	margin: 0.5em;
}

.page-template{
	width: 150px;
	height: 250px;
	border: 0.3em solid black;
}

.edit-page-button{
	display: grid;
	margin: auto;
}

.new-page-template-button{
	display: grid;
	margin: 0 auto;
	margin-top: 2em;
}

</style>
