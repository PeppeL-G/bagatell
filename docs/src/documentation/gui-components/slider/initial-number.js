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
Slider(4).min(1).max(5)
		)
	}
}

return MyApp

}