# @bagatell/core
On this page you find the documentation for the npm package `@bagatell/core` ([link to npm](https://www.npmjs.com/package/@bagatell/core)).




## Introduction
The npm package `@bagatell/core` implements different classes you can use when building your own Bagatell app. For more info, checkout the [Documentation](/documentation/).





## Quick start
1. `npm install @bagatell/core`
2. 
	```js
	import {
		App,
		Page,
		Text,
	} from '@bagatell/core'
	
	export function createApp({a, p}){
		
		class MyApp extends App{
			createStartPage(){
				return new StartPage()
			}
		}
		
		class StartPage extends Page{
			createGui(){
				return Text(`Hello, world`)
			}
		}
		
		return MyApp
		
	}
	```
3. Use [@bagatell/web-components](../web-components/) to display your Bagatell app on an HTML webpage