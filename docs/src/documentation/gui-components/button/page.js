import {
	App,
	Page,
	Rows,
	Text,
	Button,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	createStartPage(){
		return new StartPage()
	}
	
}

class StartPage extends Page{
	createGui(){
		return (
Button(`Go there`).page(DestinationPage)
		)
	}
}

class DestinationPage extends Page{
	createGui(){
		return Rows(
			Text(`Welcome to the DestinationPage!`),
			Button(`Back to StartPage`).page(StartPage),
		)
	}
}

return MyApp

}