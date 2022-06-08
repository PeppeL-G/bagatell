import {
	App,
	Page,
	Rows,
	Text,
	Button,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	onBefore(){
		a.mouth.enable()
	}
	
	createStartPage(){
		return new ButtonPage()
	}
	
}

class ButtonPage extends Page{
	createGui(){
		return (
			Button(`Go to TextPage`).page(TextPage)
		)
	}
}

class TextPage extends Page{
	createGui(){
		return Rows(
			Text(`Hi there, how are you doing?`),
			Button(`Back to ButtonPage`).page(ButtonPage),
			Text(`Are you doing fine?`),
		)
	}
}

return MyApp

}