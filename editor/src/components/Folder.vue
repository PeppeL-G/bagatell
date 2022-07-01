<template>
	
	<div
		class="folder"
		@dragover.prevent="onBackgroundDragOver"
		@drop.prevent="onDrop"
		draggable="true"
		@dragstart="onBackgroundDragStart"
		:style="{
			'background-position-x': `${folder.offsetX}px`,
			'background-position-y': `${folder.offsetY}px`
		}"
		@click="onClick"
	>
		
		<div
			v-for="line in nextPageLines"
			:key="line"
			class="line"
			:style="{
				width: `${line.length}px`,
				transform: `translate(${folder.offsetX + line.centerX}px, ${folder.offsetY + line.centerY}px) translate(-50%, -50%) rotate(${line.angle}deg)`
			}"
		>
			{{line.text}}
		</div>
		
		<div
			v-for="executedPageWrapper in executedPageWrappers"
			:key="executedPageWrapper.pageWrapper.id"
			class="page-preview"
			
			:class="{'start-page': project.startPageWrapperId == executedPageWrapper.pageWrapper.id}"
			
			:style="{
				transform: `translate(${folder.offsetX + executedPageWrapper.pageWrapper.x}px, ${folder.offsetY + executedPageWrapper.pageWrapper.y}px) translate(-50%, -50%)`
			}"
			draggable="true"
			@dragstart="onPageWrapperDragStart($event, executedPageWrapper.pageWrapper)"
		>
		
			<div
				class="name"
				@click.stop="copyToClipboard(getClassName(executedPageWrapper.pageWrapper.code))"
			>
				{{getClassName(executedPageWrapper.pageWrapper.code)}}
			</div>
			
			<div
				class="page"
				@click.stop="selectedPageWrapper = executedPageWrapper.pageWrapper"
			>
				<DisabledAppComponent
					v-if="executedPageWrapper.frameworkApp"
					class="disabled-page"
					:frameworkApp="executedPageWrapper.frameworkApp"
				/>
				<div
					v-else
					class="page-error"
				>
					{{executedPageWrapper.errorMessage}}
				</div>
			</div>
			
		</div>
		
		<Modal
			v-if="selectedPageWrapper != null"
			@close="selectedPageWrapper = null"
		>
			<EditPageWrapper
				class="edit-page-wrapper"
				@dragover.prevent="onBackgroundDragOver"
				:project="project"
				:folder="folder"
				:pageWrapper="selectedPageWrapper"
				@close="selectedPageWrapper = null"
			/>
		</Modal>
		
		<Modal
			v-if="showCreatePageModal"
			@close="showCreatePageModal = false"
		>
			<SelectPageTemplate
				:project="project"
				:folder="folder"
				:folderComponent="folderComponent"
			/>
		</Modal>
		
	</div>
	
</template>

<script>
import DisabledAppComponent from './DisabledAppComponent.vue'
import EditPageWrapper from './EditPageWrapper.vue'
import SelectPageTemplate from './SelectPageTemplate.vue'
import Modal from './Modal.vue'
import pageWrapperToAppCreator from '../functions/page-wrapper-to-app-creator.js'
import { createFrameworkApp } from '@bagatell/core'
import getClassName from '../functions/get-class-name.js'

export default {
	components: {
		DisabledAppComponent,
		EditPageWrapper,
		SelectPageTemplate,
		Modal
	},
	props: {
		project: Object,
		folder: Object,
	},
	data(){
		return {
			showCreatePageModal: false,
			selectedPageWrapper: null,
			createPageMouseX: -1,
			createPageMouseY: -1,
		}
	},
	computed: {
		folderComponent(){
			return this
		},
		executedPageWrappers(){
			
			return this.folder.pageWrappers.map(pageWrapper => {
				
				let frameworkApp = null
				let errorMessage = null
				
				try{
					const createApp = pageWrapperToAppCreator(this.project, pageWrapper)
					const fApp = createFrameworkApp(
						createApp,
						null,
						{isPreview: true},
					)
					fApp.initialize()
					frameworkApp = fApp
				}catch(errorMsg){
					console.log("Failed to execute app.", errorMsg)
					errorMessage = errorMsg
				}
				
				return {
					pageWrapper,
					frameworkApp,
					errorMessage
				}
				
			})
			
		},
		nextPageLines(){
			
			const executedPageWrappers = this.executedPageWrappers
			
			const lines = []
			
			for(const executedStartPageWrapper of executedPageWrappers){
				
				if(executedStartPageWrapper.errorMessage){
					continue
				}
				
				const startFrameworkPage = executedStartPageWrapper.frameworkApp.frameworkPage
				
				if(!startFrameworkPage){
					continue
				}
				
				const startX = executedStartPageWrapper.pageWrapper.x
				const startY = executedStartPageWrapper.pageWrapper.y
				
				const directions = [].concat(
					startFrameworkPage.beforeDirections,
					startFrameworkPage.afterDirections,
				)
				for(const direction of directions){
					
					const executedEndPageWrapper = executedPageWrappers.find(
						esw =>
							direction.createPage()?.constructor?.name ==
							getClassName(esw.pageWrapper.code)
					)
					
					if(executedEndPageWrapper){
						
						const endX = executedEndPageWrapper.pageWrapper.x
						const endY = executedEndPageWrapper.pageWrapper.y
						
						const dx = endX - startX
						const dy = endY - startY
						
						const length = Math.sqrt(
							dx ** 2 +
							dy ** 2
						)
						
						const angle = Math.atan2(
							dy,
							dx
						) * 180 / Math.PI
						
						const centerX = startX + dx/2
						const centerY = startY + dy/2
						
						lines.push({
							length,
							angle,
							centerX,
							centerY,
							text: direction.description
						})
						
					}
					
				}
				
			}
			
			return lines
			
		}
	},
	methods: {
		getClassName,
		getPageName(app){
			return app?.s?.constructor?.name || "ERROR!"
		},
		copyToClipboard(text){
			navigator.clipboard.writeText(text)
		},
		onBackgroundDragStart(event){
			
			this.dragInfo = {
				action: "moveBackground",
				initialFolderOffsetX: this.folder.offsetX,
				initialFolderOffsetY: this.folder.offsetY,
				startMouseX: event.clientX,
				startMouseY: event.clientY
			}
			
			const dragImage = document.createElement("img")
			dragImage.style.display = "none"
			event.dataTransfer.setDragImage(dragImage, 0, 0)
			
		},
		onBackgroundDragOver(event){
			
			switch(this.dragInfo.action){
				
				case "moveBackground":
					
					const dragDistanceX = event.clientX - this.dragInfo.startMouseX
					const dragDistanceY = event.clientY - this.dragInfo.startMouseY
					
					this.folder.offsetX = this.dragInfo.initialFolderOffsetX + dragDistanceX
					this.folder.offsetY = this.dragInfo.initialFolderOffsetY + dragDistanceY
					
				break
				
			}
			
		},
		onPageWrapperDragStart(event, pageWrapper){
			
			event.stopPropagation() // Don't fire dragStart on the background.
			
			this.dragInfo = {
				action: "movePageWrapper",
				pageWrapperId: pageWrapper.id,
				startMouseX: event.clientX,
				startMouseY: event.clientY
			}
			
		},
		onDrop(event){
			
			switch(this.dragInfo.action){
				
				case "movePageWrapper":
					
					const dragDistanceX = event.clientX - this.dragInfo.startMouseX
					const dragDistanceY = event.clientY - this.dragInfo.startMouseY
					
					const pageWrapper = this.folder.pageWrappers.find(
						sw => sw.id == this.dragInfo.pageWrapperId
					)
					
					pageWrapper.x += dragDistanceX
					pageWrapper.y += dragDistanceY
					
				break
				
			}
			
		},
		onClick(event){
			
			this.selectedPageWrapperId = -1;
			this.showCreatePageModal = true
			
			this.createPageMouseX = event.clientX
			this.createPageMouseY = event.clientY
			
		},
	}
}

</script>

<style scoped>

.folder{
	background-color: silver;
	position: relative;
	background-image: linear-gradient(rgba(0, 0, 0, .1) .1em, transparent .1em), linear-gradient(90deg, rgba(0, 0, 0, .1) .1em, transparent .1em);
	background-size: 2em 2em;
	overflow: hidden;
}

.folder:hover {
	cursor: move;
}

.page-preview{
	position: absolute;
	width: 150px;
	height: 250px;
	background-color: aqua;
	border: 5px solid black;
	display: grid;
	grid-template-rows: min-content 1fr;
	cursor: grab;
}

.page-preview .name{
	background-color: rgba(0, 0, 0, 0.822);
	text-align: center;
	color: white;
	padding: 0.1em;
	cursor: copy;
	position: absolute;
	left: 0;
	right: 0;
	top: -20px;
}

.page-preview.start-page .name{
	background-color: red;
}

.page-preview .page{
	/* This extra element is a flex child, so it's own children can be as high as it needs to be at the bottom. */
}

.page-preview .page .disabled-page{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
}

.page-preview .page .page-error{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	text-align: center;
	color: rgb(255, 0, 0);
	font-weight: bold;
	font-size: 120%;
}

.line{
	position: absolute;
	background-color: black;
	color: white;
	text-align: center;
}

.new-page-modal{
	background-color: orange;
	padding: 1em;
}

.new-page-modal .page-templates{
	display: flex;
	align-items: center;
	justify-content: center
}

.new-page-modal .page-templates .page-template{
	width: 150px;
	height: 250px;
	border: 0.3em solid black;
	margin: 1em;
}

</style>