import {
	App,
	Page,
	Text,
	Cols,
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
		return Cols.background(`yellow`)(
			Text(`Left`).background(`lime`),
			Space,
			Text(`Right`).background(`gold`),
		)
	}
}
//#endregion StartPage

return MyApp

}