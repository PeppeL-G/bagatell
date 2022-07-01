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
		// There are 3 thirds (1+2) in total in this example.
		return Rows.background(`yellow`)(
			Text.size(1).background(`lime`)(`First text.`), // 1 third of the remaining space.
			Text.background(`aqua`)(`Second text, and this text is quite long, spanning multiple lines.`),
			Text.size(2).background(`gold`).left()(`Third text, left aligned.`), // 2 thirds of the remaining space.
		)
	}
}
//endregion StartPage

return MyApp

}