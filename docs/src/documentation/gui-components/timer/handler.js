import {
	App,
	Page,
	Timer,
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
		return Button(`Start timer`).page(TimerPage)
	}
}
//#endregion StartPage

//#region TimerPage
class TimerPage extends Page{
	createGui(){
		return Timer.seconds(3).page(StartPage).handler(() => alert("Timeout!"))
	}
}
//#endregion TimerPage

return MyApp

}