import {
	App,
	Page,
	Button,
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
		return Button(`Click me!`)
	}
}
// #endregion StartPage

return MyApp

}