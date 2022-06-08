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

class MyApp extends App{
	
	createStartPage(){
		return new StartPage()
	}
	
}

class StartPage extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Login`),
			Space,
			Cols(
				Text(`Username`),
				Space,
				EnterText.size(10),
			),
			Cols(
				Text(`Password`),
				Space,
				EnterText.size(10),
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

return MyApp

}

