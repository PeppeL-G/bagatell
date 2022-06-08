import {
	App,
	Page,
	Text,
	Image,
	Layers,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	createStartPage(){
		return new MyPage()
	}
	
}

class MyPage extends Page{
	createGui(){
		return (
Layers.padding(5)(
	Text(`I'm behind the image, so you can't see me!`),
	Image(`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/800px-SNice.svg.png`),
	Text(`I'm a layer on top of the image!`),
	Text(`And I'm the fourth layer, and I'm on top of the image and the previos text!`).bottom(),
)
		)
	}
}

return MyApp

}