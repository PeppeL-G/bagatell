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
		return Text(`This text is not centered, but left aligned!`).left()
	}
}
//endregion StartPage

return MyApp

}