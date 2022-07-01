import {
	App,
	Page,
	Button,
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
		return Button(`Click me!`).page(TextPage)
	}
}
//endregion StartPage

//region TextPage
class TextPage extends Page{
	createGui(){
		return Text(`You clicked me!`)
	}
}
//endregion TextPage

return MyApp

}