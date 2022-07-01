import {
	App,
	Page,
	Text,
	Rows,
	Space,
} from '@bagatell/core'

export default function createApp({a, p}){

//region MyApp
class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}
//endregion MyApp

//region StartPage
class StartPage extends Page{
	createGui(){
		return Rows.background(`yellow`)(
			Space, // Will occupy 1 share of the remaining space.
			Text.background(`lime`)(`I'm just as tall as the text, and I'm vertically centered!`),
			Space, // Will occupy 1 share of the remaining space.
		)
	}
}
//endregion StartPage

return MyApp

}