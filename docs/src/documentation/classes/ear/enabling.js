import {
	App,
	Page,
	Rows,
	Cols,
	Text,
	Button,
	Space,
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
			Text(`First, click on the button below, and if you haven't allowed this website to use your microphone yet, then do that in the appearing popup.`),
			Space,
			Cols(
				Space,
				Button(`Start listening`).page(ListenPage),
				Space,
			),
		)
	}
}

class ListenPage extends Page{
	onBefore(){
		a.ear.enable()
	}
	createGui(){
		return Rows(
			Space,
			Text(`Welcome to to the listening page! Try speaking "Back".`),
			Space,
			Cols(
				Space,
				Button(`Back`).page(StartPage),
				Space,
			),
		)
	}
}

return MyApp

}