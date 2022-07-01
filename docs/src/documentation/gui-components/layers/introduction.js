import {
	App,
	Page,
	Text,
	Image,
	Layers,
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
		return Layers.padding(5)(
			Text(`I'm behind the image, so you can't see me!`),
			Image(`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png`),
			Text(`I'm a layer on top of the image!`),
			Text(`And I'm the fourth layer, and I'm on top of the image and the previos text!`).bottom(),
		)
	}
}
//#endregion StartPage

return MyApp

}