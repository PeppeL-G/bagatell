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
		return new QuietPage()
	}
	
}

class QuietPage extends Page{
	createGui(){
		return Rows(
			Text(`I'm not speaking on this page.`),
			Button(`Go to SpeakingPage`).page(SpeakingPage),
		)
	}
}

class SpeakingPage extends Page{
	onBefore(){
		this.mouth.enable()
	}
	createGui(){
		return Rows(
			Text(`I'm speaking on this page!`),
			Button(`Back to QuietPage`).page(QuietPage),
		)
	}
	onAfter(){
		this.mouth.disable()
	}
}

return MyApp

}