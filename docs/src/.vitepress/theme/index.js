import DefaultTheme from 'vitepress/theme'
import Editor from './components/Editor.vue'
import ShowApp from './components/ShowApp.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import './styles.css'

export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.component('Editor', Editor)
		app.component('ShowApp', ShowApp)
		app.component('Tabs', Tabs)
		app.component('Tab', Tab)
	},
}