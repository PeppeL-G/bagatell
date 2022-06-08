import {
	App,
	Page,
	Slider,
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
Slider.min(0).max(100)
		)
	}
}

return MyApp

}