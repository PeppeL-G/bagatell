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
		return EnterNumber.placeholder(`Enter your IQ`).aVar(`iq`)
	}
}
//#endregion StartPage

return MyApp

}