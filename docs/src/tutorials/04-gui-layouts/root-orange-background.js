import {
	App,
	Page,
	Text,
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
		return Text.background(`orange`)(`This Text component has an orange background, so it's easy too see what space it occupies.`)
	}
}
//endregion StartPage

return MyApp

}