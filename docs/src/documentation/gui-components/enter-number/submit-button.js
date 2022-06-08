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
	Text(`What's your IQ?`),
	Space,
	Cols(
		EnterNumber.size(1).placeholder(`Enter IQ...`),
		Button(`⇒`),
	),
)
		)
	}
}

return MyApp

}