<template>
	
	<div class="project">
		
		<Folder
			class="folder"
			:project="project"
			:folder="selectedFolder"
		/>
		
		<div class="header">
			
			<div class="project">
				
				<a href="#" @click="showEditAppModal = true">
					{{getClassName(project.appWrapper.code)}}
				</a>
				
				<div class="folder-titles">
					<a
						v-for="folder in project.folders"
						:key="folder.id"
						href="#"
						@click.prevent="selectFolder(folder)"
						:class="{current: selectedFolderId == folder.id}"
					>
						{{folder.name}}
					</a>
					<a
						href="#"
						class="create-folder"
						@click.prevent="addFolder()"
					>
						+
					</a>
				</div>
				
			</div>
			
		</div>
		
		<Modal
			v-if="showEditAppModal"
			@close="showEditAppModal = false"
		>
			<EditApp
				:project="project"
			/>
		</Modal>
		
		<Modal
			v-if="showEditFolderModal"
			@close="showEditFolderModal = false"
		>
			<EditFolder
				:project="project"
				:folder="selectedFolder"
				@folderDeleted="onFolderDeleted"
			/>
		</Modal>
		
	</div>
	
</template>

<script>
import Modal from './Modal.vue'
import Folder from './Folder.vue'
import EditFolder from './EditFolder.vue'
import EditApp from './EditApp.vue'
import getClassName from '../functions/get-class-name.js'

export default {
	components: {
		Folder,
		EditFolder,
		EditApp,
		Modal
	},
	props: {
		project: Object
	},
	data(){
		return {
			showEditAppModal: false,
			showEditFolderModal: false,
			selectedFolderId: this.project.folders[0].id
		}
	},
	computed: {
		selectedFolder(){
			return this.project.folders.find(
				f => f.id == this.selectedFolderId
			)
		}
	},
	methods: {
		getClassName,
		selectFolder(folder){
			if(this.selectedFolderId == folder.id){
				this.showEditFolderModal = true
			}else{
				this.selectedFolderId = folder.id
			}
		},
		addFolder(){
			
			const name = prompt("Enter name of new folder: ")
			
			if(!name){
				return
			}
			
			const id = Math.max(
				...this.project.folders.map(f => f.id)
			) + 1
			
			const newFolder = {
				id,
				name,
				offsetX: 0,
				offsetY: 0,
				pageWrappers: [],
			}
			
			this.project.folders.push(newFolder)
			
			this.selectedFolderId = newFolder.id
			
		},
		onFolderDeleted(){
			this.selectedFolderId = this.project.folders[0].id
			this.showEditFolderModal = false
		},
	},
}

</script>

<style scoped>

.project{
	width: 100%;
	height: 100%;
	position: relative;
}

.header{
	position: absolute;
	top: 0;
	right: 0;
	background-color: lime;
	z-index: 2;
	text-align: center;
}

.header a{
	font-weight: bold;
	padding: 0.5em;
	display: inline-block;
	color: black;
}

.header .folder-titles{
}

.header .folder-titles a{
	display: inline-block;
	background-color: yellow;
	padding: 0.5em;
	color: black;
	font-weight: bold;
	border: 3px solid lime;
} 

.header .folder-titles a.create-folder{
	margin-right: 0;
	text-decoration: none;
}

.header .folder-titles a.current{
	background-color: rgba(0, 0, 0, 0);
}

.folder{
	width: 100%;
	height: 100%;
}

</style>