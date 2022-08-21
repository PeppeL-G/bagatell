<template>
	<div class="editorContainer" id="editorContainer">
		<ClientOnly>
			<EditorApp />
		</ClientOnly>
	</div>
</template>

<script>
import EditorApp from '@bagatell/editor/App.vue'

export default {
	components: {
		EditorApp,
	},
}
</script>

<style scoped>

.editorContainer{
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 100;
}

/* Undo global styles the Vitepress Default Theme do... -.- */
.editorContainer :deep(*),
.editorContainer :deep(::before),
.editorContainer :deep(::after){
	box-sizing: revert;
}
.editorContainer :deep(input),
.editorContainer :deep(button){
	background-color: revert;
	font-family: revert;
}
.editorContainer :deep(button),
.editorContainer :deep(input),
.editorContainer :deep(optgroup),
.editorContainer :deep(select),
.editorContainer :deep(textarea){
	border: revert;
	padding: revert;
	line-height: revert;
	color: revert;
}

</style>