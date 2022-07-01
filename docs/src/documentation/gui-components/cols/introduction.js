import {
	App,
	Page,
	Text,
	Cols,
} from '@bagatell/core'

export default function createApp({a, p}){

//#region MyApp
class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}
//#endregion MyApp

//#region StartPage
class StartPage extends Page{
	createGui(){
		return Cols.background(`yellow`)(
			Text(`Col 1`).background(`lime`),
			Text(`Col 2`).background(`aqua`),
			Text(`Col 3`).background(`gold`),
		)
	}
}
//#endregion StartPage

return MyApp

}