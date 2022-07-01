import {
	App,
	Page,
	Slider,
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
		return Slider.min(1).step(0.5).max(5)
	}
}
//#endregion StartPage

return MyApp

}