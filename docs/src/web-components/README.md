# Web Components
On this page you find information on how to use the *GUI Elements* from `@bagatell/web-components`.



## Introduction
With the classes and GUI Components from `@bagatell/core` it's possible to create your own Bagatell app, but that app contains no code for displaying itself on the user's screen. To actually display the app on the user's screen as part of a webpage you can use the GUI Elements from `@bagatell/web-components`.



## Getting started
1. `npm install @bagatell/web-components`
2. 
	```html
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>My App</title>
		<style>
			#appContainer{
				width: 100px;
				height: 300px;
			}
		</style>
		<script type="module">
			
			import { createApp } from './create-app.js' // The file exporting your createApp() function.
			import { createFrameworkApp } from '@bagatell/core' // Can't load the package like this in a web browser, but you get the idea.
			import { AppElement } from '@bagatell/web-components'
			
			const frameworkApp = createFrameworkApp(
				createApp, // The function creating your app.
				null, // Reserved for future usage.
				{isPreview: false} // Runtime settings.
			)
			
			document.addEventListener('DOMContentLoaded', function(){
				
				const appContainerDiv = document.querySelector('#appContainer')
				
				const appElement = new AppElement()
				appContainerDiv.appendChild(appElement)
				appElement.showApp(frameworkApp)
				
			})
			
		</script>
	</head>
	<body>
		<div id="appContainer"></div>
	</body>
	</html>
	```



## GUI Elements
For most classes and GUI Components in `@bagatell/core`, `@bagatell/web-components` contains a corresponding *GUI Element* that can display that class/GUI Component. For example:

* The GUI Element `AppElement` can display the class `FrameworkApp`
* The GUI Element `ButtonElement` can display the GUI Component `Button`
* The GUI Element `RowsElement` can display the GUI Component `Rows`
* And so on...

Each GUI Element is a [custom element](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) that can be rendered as an ordinary HTML element. But of all these GUI Elements, you just need to use the `AppElement`, which will take care of the rest for you.

## `AppElement`
To show your app, you need to:

1. Create a new instance of `AppElement`
2. Add your `AppElement` instance to the DOM
3. Call the method `showApp()` on your `AppElement`, and pass it an instance of your `FrameworkApp`, which you can create through the `createFrameworkApp()` function

Example:

```js
import { createApp } from './create-app.js'
import { AppElement } from '@bagatell/web-components' // Can't load the npm package like this in a web browser, but you get the idea.

// 1. Create a new instance of `AppElement`
const appElement = new AppElement()

// 2. Add your `AppElement` instance to the DOM
document.querySelector('#appContainer').appendChild(appElement)

// 3. Call the method `showApp()` on your `AppElement`, and pass
//    it an instance of your `FrameworkApp`, which you can create
//    through the `createFrameworkApp()` function
appElement.showApp(
	createFrameworkApp(
		createApp,
		null,
		{isPreview: false}
	)
)

// The createApp() function is defined below.
// You typically put it in a separate file.
import { App, Page, Text } from '@bagatell/core'

function createApp({a, p}){
	
	class MyApp extends App{
		
		createStartPage(){
			return new Page1()
		}
		
	}
	
	class Page1 extends Page{
		createGui(){
			return Text(`Hello, world!`)
		}
	}
	
	return MyApp
	
}
```