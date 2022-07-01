import {
	App,
	Page,
	Slider,
	Rows,
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
		return Rows(
			Slider.min(1).max(120).handler(selectedNumber => alert(selectedNumber)),
			Button(`Go!`),
		)
	}
}
//#endregion StartPage

return MyApp

}