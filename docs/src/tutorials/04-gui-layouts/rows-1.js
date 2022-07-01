import {
	App,
	Page,
	Text,
	Rows,
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
		return Rows.background(`yellow`)(
			Text.background(`lime`)(`First text.`), // First child.
			Text.background(`aqua`)(`Second text, and this text is quite long, spanning multiple lines.`), // Second child
			Text.background(`gold`).left()(`Third text, left aligned.`), // Third child (the comma here is not needed, but it's OK to have it).
		)
	}
}
//endregion StartPage

return MyApp

}