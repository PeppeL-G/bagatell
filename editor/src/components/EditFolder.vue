<template>
	
	<div class="edit-folder">
		
		<h1>Edit Folder</h1>
		
		<div>
			Name: <input type="text" v-model="folder.name">
		</div>
		
		<div>
			<button
				@click="deleteFolder()"
				:disabled="project.folders.length == 1"
			>
				Delete
			</button>
		</div>
		
	</div>
	
</template>

<script>

export default {
	props: {
		project: Object,
		folder: Object,
	},
	methods: {
		deleteFolder(){
			const folderIndex = this.project.folders.findIndex(f => f == this.folder)
			this.project.folders.splice(folderIndex, 1)
			this.$emit('folder-deleted')
		}
	}
}
</script>

<style scoped>

.edit-folder{
	width: 90%;
	margin: 0 auto;
	padding: 1em;
	background-color: yellow;
}

</style>