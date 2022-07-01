import {
	App,
	Page,
	EnterNumber,
	Text,
	Button,
	Rows,
	Cols,
	Space,
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
			Space,
			Text(`What's your IQ?`),
			Space,
			Cols(
				EnterNumber.size(1).placeholder(`Enter IQ...`),
				Button(`⇒`),
			),
		)
	}
}
//#endregion StartPage

return MyApp

}