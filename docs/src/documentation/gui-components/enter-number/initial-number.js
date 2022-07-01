import {
	App,
	Page,
	EnterNumber,
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
		return EnterNumber(123)
	}
}
//#endregion StartPage

return MyApp

}