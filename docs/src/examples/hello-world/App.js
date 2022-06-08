import {
	App,
	Page,
	Text
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	createStartPage(){
		return new StartPage()
	}
	
}

class StartPage extends Page{
	
	createGui(){
		return Text(`Hello, World!`)
	}
	
}

return MyApp

}