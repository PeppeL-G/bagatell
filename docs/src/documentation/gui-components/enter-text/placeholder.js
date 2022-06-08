import {
	App,
	Page,
	EnterText,
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
EnterText.placeholder(`Enter name`)
		)
	}
}

return MyApp

}