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
			Space,
			Text.background(`lime`)(`I'm just as tall as the text, and I'm at the bottom!`),
		)
	}
}
//endregion StartPage

return MyApp

}