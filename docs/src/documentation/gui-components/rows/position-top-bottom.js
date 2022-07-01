import {
	App,
	Page,
	Text,
	Rows,
	Space,
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
			Text(`Top`).background(`lime`),
			Space,
			Text(`Bottom`).background(`gold`),
		)
	}
}
//#endregion StartPage

return MyApp

}