import {
	App,
	Page,
	Text,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	createStartPage(){
		return new StartPage()
	}
	
}

class StartPage extends Page{
	createGui(){
		return Text(`Here's some cool text...`).right().background(`yellow`).bottom()
	}
}

return MyApp

}