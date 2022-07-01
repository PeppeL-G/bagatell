import {
	App,
	Page,
	Timer,
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
		// We have not specified which the next page is, so
		// this page will be reloaded when the timer times out.
		return Timer.seconds(10)
	}
}
//#endregion StartPage

return MyApp

}