import {
	App,
	Page,
	Text,
	Rows,
	Cols,
	Button,
	Space,
	EnterText,
} from '@bagatell/core'

export default function createApp({a, p}){

//region MyApp
class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}
//endregion MyApp

//region StartPage
class StartPage extends Page{
	createGui(){
		return Rows.padding(5)(
			Space,
			Text(`Login`),
			Space,
			Cols(
				Text(`Username:`).size(1),
				EnterText.size(1),
			),
			Space.size(0.1),
			Cols(
				Text(`Password:`).size(1),
				EnterText.size(1),
			),
			Space,
			Cols(
				Space,
				Button(`Login`),
				Space,
			),
			Space.size(5),
		)
	}
}
//endregion StartPage

return MyApp

}

