import {
	App,
	Page,
	EnterText,
} from '@bagatell/core'

export default function createApp({a, p}){

//#region MyApp
class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}
//#endregion MyApp

//#region StartPage
class StartPage extends Page{
	createGui(){
		return EnterText
			.placeholder(`Enter city`)
			.handler(enteredText => alert(enteredText))
	}
}
//#endregion StartPage

return MyApp

}