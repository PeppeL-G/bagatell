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
	onBefore(){
		a.mouth.enable()
	}
	createStartPage(){
		return new StartPage()
	}
}
//#endregion MyApp

//#region StartPage
class StartPage extends Page{
	createGui(){
		return Button(`Go to TextPage`).page(TextPage)
	}
}
//#endregion StartPage

//#region TextPage
class TextPage extends Page{
	createGui(){
		return Rows(
			Text(`Hi there, how are you doing?`),
			Button(`Back to ButtonPage`).page(StartPage),
			Text(`Are you doing fine?`),
		)
	}
}
//#endregion TextPage

return MyApp

}