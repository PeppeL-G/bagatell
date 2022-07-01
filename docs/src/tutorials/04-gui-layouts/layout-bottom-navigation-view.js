import {
	App,
	Page,
	Text,
	Rows,
	Cols,
	Button,
	Space,
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
		return Rows(
			Text.size(1).background(`white`)(`Main content`),
			Cols.background(`lime`)(
				Space,
				Button(`Option 1`),
				Space,
				Button(`Option 2`),
				Space,
				Button(`Option 3`),
				Space,
			),
		)
	}
}
//endregion StartPage

return MyApp

}