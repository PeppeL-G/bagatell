import {
	App,
	Page,
	Text,
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
		return Space.background(`yellow`).padding(5)(
			Text(`Hello`).background(`lime`),
		)
	}
}
//#endregion StartPage

return MyApp

}