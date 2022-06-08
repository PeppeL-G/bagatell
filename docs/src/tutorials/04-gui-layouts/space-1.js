import {
	App,
	Page,
	Text,
	Rows,
	Space,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	createStartPage(){
		return new StartPage()
	}
	
}

class StartPage extends Page{
	createGui(){
		return Rows.background(`yellow`)(
			Space,
			Text.background(`lime`)(`I'm just as tall as the text, and I'm at the bottom!`),
		)
	}
}

return MyApp

}