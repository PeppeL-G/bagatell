import {
	App,
	Page,
	Button,
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
		return Button(`Click me!`).page(TextPage)
	}
}

class TextPage extends Page{
	createGui(){
		return Text(`You clicked me!`)
	}
}

return MyApp

}