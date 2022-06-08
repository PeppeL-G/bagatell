<template>
	
	<div id="bagatell-editor" class="app">
		
		<span
			class="main-menu-icon"
			@click="showMainMenu = true"
		>☰</span>
		
		<Modal v-if="showMainMenu" @close="showMainMenu = false">
			<MainMenu
				:project="project"
				@openProject="openProject"
			/>
		</Modal>
		
		<Project
			:project="project"
		/>
		
	</div>
	
</template>

<script>
import Project from './components/Project.vue'
import Modal from './components/Modal.vue'
import MainMenu from './components/MainMenu.vue'

export default {
	components: {
		Project,
		Modal,
		MainMenu
	},
	data(){
		
		return {
			showMainMenu: false,
			project: {
				appWrapper: {
					code: `
class MyApp extends App{
	
	onBefore(){
		a.name = "Alice"
	}
	
	createStartPage(){
		return new AskName()
	}
	
}
					`.trim(),
				},
				folders: [{
					id: 1,
					name: "Start",
					offsetX: 0,
					offsetY: 0,
					pageWrappers: [{
						id: 1,
						code: `
class AskName extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`What's your name?\`),
			Space,
			Cols(
				EnterText.size(1).placeholder(\`Enter name...\`).aVar(\`name\`).page(AskFeeling),
				Button(\`⇒\`),
			),
		)
	}
	
	onAfter(){
		
	}
	
}
						`.trim(),
						x: 100,
						y: 300
					}, {
						id: 2,
						code: `
class AskFeeling extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`Hello \${a.name}, nice to meet you!\`),
			Space,
			Text(\`How are you feeling?\`),
			Space,
			Cols(
				Space,
				Button(\`Bad\`).page(FeelingBad),
				Space,
				Button(\`Good\`).page(FeelingGood),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}
						`.trim(),
						x: 350,
						y: 300
					}, {
						id: 3,
						code: `
class FeelingGood extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Image.size(6)(\`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png\`),
			Space,
			Text(\`Glad to hear that! :)\`),
			Space,
		)
	}
	
	onAfter(){
		
	}
	
}
						`.trim(),
						x: 600,
						y: 450
					}, {
						id: 4,
						code: `
class FeelingBad extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`Sorry to hear that :(\`),
			Space,
			Timer.seconds(5).page(AskName),
		)
	}
	
	onAfter(){
		
	}
	
}
						`.trim(),
						x: 600,
						y: 150
					}]
				}, {
					id: 2,
					name: "SecondFolder",
					offsetX: 0,
					offsetY: 0,
					pageWrappers: [{
						id: 4,
						code: `
class AskName3 extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Text(\`Hello!\`)
	}
	
	onAfter(){
		
	}
	
}
						`.trim(),
						x: 250,
						y: 300
					}]
				}],
				pageTemplates: [{
					id: 1,
					code: `
class AskIfAdult extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`Are you older than 18?\`),
			Space,
			Cols(
				Space,
				Button(\`No\`).page(null),
				Space,
				Button(\`Yes\`).page(null),
				Space,
			),
		)
	}
	
	onAfter(){
		
	}
	
}
					`.trim()
				}, {
					id: 2,
					code: `
class EnterName extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`What's your name?\`),
			Space,
			Cols(
				EnterText.size(1).placeholder(\`Enter name...\`).aVar(\`name\`).page(null).pages({Peter: null}),
				Button(\`⇒\`),
			),
		)
	}
	
	onAfter(){
		
	}
	
}
					`.trim()
				}, {
					id: 3,
					code: `
class EnterAge extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`What's your age?\`),
			Space,
			Cols(
				EnterNumber.size(1).placeholder(\`Enter age...\`).aVar(\`age\`).page(null).pages({
					'0_18E': null,
					'18_100': null,
					'100_X': null,
				}),
				Button(\`⇒\`),
			),
		)
	}
	
	onAfter(){
		
	}
	
}
					`.trim()
				}, {
					id: 4,
					code: `
class SelectRating extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`How many stars do you give this app?\`),
			Space,
			Slider(3.5).min(0).step(0.5).max(5).page(null).pages({
				'1_2.5E': null,
				'2.5': null,
				'2.5E_5': null,
			}),
			Space,
			Button(\`Go!\`),
		)
	}
	
	onAfter(){
		
	}
	
}
					`.trim()
				}, {
					id: 5,
					code: `
class ClickFast extends Page{
	
	onBefore(){
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(\`Click the button fast!\`),
			Space,
			Timer.seconds(5).page(null),
			Space,
			Button(\`Click me!\`).page(null)
		)
	}
	
	onAfter(){
		
	}
	
}
					`.trim()
				}],
			},
		}
		
	},
	methods: {
		openProject(projectToOpen){
			this.project = projectToOpen
			this.showMainMenu = false
		},
	},
}

</script>

<style>

/* #app is in index.html */
html, body, #app{
	height: 100%;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

</style>

<style scoped>

.app{
	height: 100%;
	all: initial;
}

.main-menu-icon{
	display: inline-block;
	position: fixed;
	right: 0.75em;
	bottom: 0.75em;
	width: 1.4em;
	height: 1.4em;
	text-align: center;
	background-color: lime;
	z-index: 100;
	padding: 0.5em;
	border-radius: 1.5em;
	font-size: 1.5em;
	cursor: pointer;
}

</style>