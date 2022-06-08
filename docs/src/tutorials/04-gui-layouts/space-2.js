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
			Space, // Will occupy 1 shares out of 2 of the remaining space.
			Text.background(`lime`)(`I'm just as tall as the text, and I'm vertically centered!`),
			Space, // Will occupy 1 shares out of 2 of the remaining space.
		)
	}
}

return MyApp

}