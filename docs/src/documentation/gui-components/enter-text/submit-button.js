import {
	App,
	Page,
	EnterText,
	Text,
	Button,
	Rows,
	Cols,
	Space,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	createStartPage(){
		return new MyPage()
	}
	
}

class MyPage extends Page{
	createGui(){
		return (
Rows(
	Space,
	Text(`What's your name?`),
	Space,
	Cols(
		EnterText.size(1).placeholder(`Enter name...`),
		Button(`⇒`),
	),
)
		)
	}
}

return MyApp

}