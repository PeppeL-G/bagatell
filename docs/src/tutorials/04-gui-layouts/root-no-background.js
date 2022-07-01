import {
	App,
	Page,
	Text,
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
		return Text(`This Text component doesn't have a background color, so who knows what space it occupies?`)
	}
}
//endregion StartPage

return MyApp

}