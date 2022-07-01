import { defineConfig } from 'vitepress'
import { markdownConfig } from './markdown-config.js'

export default defineConfig({
	lang: 'en-US',
	title: 'Bagatell',
	titleTemplate: false,
	description: 'Homepage and documentation for Bagatell.',
	base: '/bagatell/',
	appearance: true,
	markdown: {
		config: markdownConfig,
	},
	themeConfig: {
		nav: [{
			text: 'Documentation',
			link: '/documentation/',
		}, {
			text: 'Tutorials',
			link: '/tutorials/',
		}, {
			text: 'Examples',
			link: '/examples/',
		}, {
			text: 'Web Components',
			link: '/web-components/',
		}, {
			text: 'Editor',
			link: '/editor/',
		}],
		sidebar: {
			
			'/tutorials/': [{
				text: 'Tutorials',
				items: [{
					text: '1. Introduction',
					link: '/tutorials/01-introduction/',
				}, {
					text: '2. Pages',
					link: '/tutorials/02-pages/',
				}, {
					text: '3. GUI Component Basics',
					link: '/tutorials/03-gui-components-basics/',
				}, {
					text: '4. GUI Layouts',
					link: '/tutorials/04-gui-layouts/',
				}]
			}],
			
			'/examples/': [{
				text: 'Examples',
				items: [{
					text: 'Hello, World!',
					link: '/examples/hello-world/'
				}, {
					text: 'Book',
					link: '/examples/book/'
				}, {
					text: 'Counter',
					link: '/examples/counter/'
				}, {
					text: 'Quiz',
					link: '/examples/quiz/'
				}, {
					text: 'Guess Name',
					link: '/examples/guess-name/'
				}, {
					text: '21 Sticks',
					link: '/examples/21-sticks/'
				}, {
					text: 'Test',
					link: '/examples/test/'
				}],
			}], 
			
			'/documentation/': [{
				text: 'Views',
				items: [{
					text: 'Button',
					link: '/documentation/gui-components/button/',
				}, {
					text: 'EnterNumber',
					link: '/documentation/gui-components/enter-number/',
				}, {
					text: 'EnterText',
					link: '/documentation/gui-components/enter-text/',
				}, {
					text: 'Image',
					link: '/documentation/gui-components/image/',
				}, {
					text: 'Slider',
					link: '/documentation/gui-components/slider/',
				}, {
					text: 'Text',
					link: '/documentation/gui-components/text/',
				}, {
					text: 'Timer',
					link: '/documentation/gui-components/timer/',
				}],
			}, {
				text: 'Layouts',
				items: [{
					text: 'Cols',
					link: '/documentation/gui-components/cols/',
				}, {
					text: 'Layers',
					link: '/documentation/gui-components/layers/',
				}, {
					text: 'Rows',
					link: '/documentation/gui-components/rows/',
				}, {
					text: 'Space',
					link: '/documentation/gui-components/space/',
				}],
			}, {
				text: 'Classes',
				items: [{
					text: 'App',
					link: '/documentation/classes/app/',
				}, {
					text: 'Direction',
					link: '/documentation/classes/direction/',
				},/* {
					text: 'Ear',
					link: '/documentation/classes/ear/',
				}, */{
					text: 'Mouth',
					link: '/documentation/classes/mouth/',
				}, {
					text: 'Page',
					link: '/documentation/classes/page/',
				}],
			}, {
				text: 'Various',
				items: [{
					text: 'Configuration Methods',
					link: '/documentation/configuration-methods/',
				}, {
					text: 'State Handling',
					link: '/documentation/state-handling/',
				}],
			}],
		},
	},
})