import {
	App,
	Page,
	Text,
	Rows,
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
		return Rows.background(`yellow`)(
			Text(`Row 1`).background(`lime`),
			Text(`Row 2`).background(`aqua`),
			Text(`Row 3`).background(`gold`),
		)
	}
}
//#endregion StartPage

return MyApp

}