<template>
	
	<div
		class="editor"
		ref="editorDiv"
	/>
	
</template>

<script>

import {EditorView, keymap} from "@codemirror/view"
import {EditorState} from "@codemirror/state"
import {basicSetup} from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"
import {defaultTabBinding} from "@codemirror/commands"
import {indentUnit} from "@codemirror/language"

export default {
	props: {
		code: String
	},
	mounted() {
		
		const editorDiv = this.$refs.editorDiv
		
		this.editorView = new EditorView({
			state: EditorState.create({
				doc: this.code,
				extensions: [
					basicSetup,
					keymap.of([
						defaultTabBinding
					]),
					javascript(),
					indentUnit.of("\t")
				]
			}),
			parent: editorDiv,
		})
		
	},
	methods: {
		getCode(){
			return this.editorView.state.doc.toString()
		}
	}
}

</script>

<style scoped>

.editor{
	background-color: white;
}

</style>