import {
	App,
	Page,
	Rows,
	Text,
	Button,
} from '@bagatell/core'

export default function createApp({a, p}){

//#region MyApp
class MyApp extends App{
	createStartPage(){
		return new QuietPage()
	}
}
//#endregion MyApp

//#region QuietPage
class QuietPage extends Page{
	createGui(){
		return Rows(
			Text(`I'm not speaking on this page.`),
			Button(`Go to SpeakingPage`).page(SpeakingPage),
		)
	}
}
//#endregion QuietPage

//#region SpeakingPage
class SpeakingPage extends Page{
	onBefore(){
		a.mouth.enable()
	}
	createGui(){
		return Rows(
			Text(`I'm speaking on this page!`),
			Button(`Back to QuietPage`).page(QuietPage),
		)
	}
	onAfter(){
		a.mouth.disable()
	}
}
//#endregion SpeakingPage

return MyApp

}