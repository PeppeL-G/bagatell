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
		return new DeathPage()
	}
	
}

class DeathPage extends Page{
	createGui(){
		return Rows(
			Text(`I'm not listening on this page.`),
			Button(`Go to ListeningPage`).page(ListeningPage)
		)
	}
}

class ListeningPage extends Page{
	onBefore(){
		a.ear.enable()
	}
	createGui(){
		return Rows(
			Text(`I'm listening on this page!`),
			Button(`Back to DeathPage`).page(DeathPage),
		)
	}
	onAfter(){
		a.ear.disable()
	}
}

return MyApp

}