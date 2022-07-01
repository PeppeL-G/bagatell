import {
	App,
	Page,
	Rows,
	Text,
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
		return Button(`Go there`).page(DestinationPage)
	}
}
//#endregion StartPage

//#region DestinationPage
class DestinationPage extends Page{
	createGui(){
		return Rows(
			Text(`Welcome to the DestinationPage!`),
			Button(`Back to StartPage`).page(StartPage),
		)
	}
}
//#endregion DestinationPage

return MyApp

}