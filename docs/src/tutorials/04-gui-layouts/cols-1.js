import {
	App,
	Page,
	Text,
	Cols,
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
		return Cols.background(`yellow`)(
			Text.background(`lime`)(`#1`),
			Text.background(`aqua`)(`Number 2`),
			Text.background(`gold`).bottom()(`Third`),
		)
	}
}
//endregion StartPage

return MyApp

}