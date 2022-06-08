const { viteBundler, defaultTheme } = require('vuepress')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

module.exports = {
	lang: 'en-US',
	title: 'Bagatell',
	description: 'Homepage and documentation for Bagatell.',
	theme: defaultTheme({
		navbar: [
			{
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
			},
		],
		sidebar: {
			'/tutorials/': [{
				text: 'Tutorials',
				children: [
					'/tutorials/01-introduction/',
					'/tutorials/02-pages/',
					'/tutorials/03-gui-components-basics/',
					'/tutorials/04-gui-layouts/',
				],
			}],
			'/examples/': [{
				text: 'Examples',
				children: [
					'/examples/hello-world/',
					'/examples/book/',
					'/examples/counter/',
					'/examples/quiz/',
					'/examples/guess-name/',
					'/examples/21-sticks/',
					'/examples/test/',
				],
			}],
			'/documentation/': [
				{
					text: 'Introduction',
					link: '/documentation/',
				},
				{
					text: 'Classes',
					children: [
						{
							text: 'App',
							link: '/documentation/classes/app/',
						},
						{
							text: 'Direction',
							link: '/documentation/classes/direction/',
						},
						{
							text: 'Mouth',
							link: '/documentation/classes/mouth/',
						},
						{
							text: 'Ear',
							link: '/documentation/classes/ear/',
						},
						{
							text: 'Page',
							link: '/documentation/classes/page/',
						},
					],
				},
				{
					text: 'GUI Components',
					children: [
						{
							text: 'Configuration Methods',
							link: '/documentation/gui-components/configuration-methods/',
						},
						{
							text: 'Views',
							children: [
								{
									text: 'Button',
									link: '/documentation/gui-components/button/',
								},
								{
									text: 'EnterNumber',
									link: '/documentation/gui-components/enter-number/',
								},
								{
									text: 'EnterText',
									link: '/documentation/gui-components/enter-text/',
								},
								{
									text: 'Image',
									link: '/documentation/gui-components/image/',
								},
								{
									text: 'Slider',
									link: '/documentation/gui-components/slider/',
								},
								{
									text: 'Text',
									link: '/documentation/gui-components/text/',
								},
								{
									text: 'Timer',
									link: '/documentation/gui-components/timer/',
								},
							],
						},
						{
							text: 'Layouts',
							children: [
								{
									text: 'Cols',
									link: '/documentation/gui-components/cols/',
								},
								{
									text: 'Layers',
									link: '/documentation/gui-components/layers/',
								},
								{
									text: 'Rows',
									link: '/documentation/gui-components/rows/',
								},
								{
									text: 'Space',
									link: '/documentation/gui-components/space/',
								},
							],
						},
					],
				},
				{
					text: 'State Handling',
					link: '/documentation/state-handling/',
				},
			],
		},
	}),
	plugins: [
		registerComponentsPlugin({
			componentsDir: path.resolve(__dirname, './components'),
		}),
	],
}