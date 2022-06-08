import {
	App,
	Page,
	Button,
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
Button(`Click me!`)
		)
	}
}

return MyApp

}