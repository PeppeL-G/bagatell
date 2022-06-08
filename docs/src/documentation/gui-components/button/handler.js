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
Button(`Show message`).handler(() => alert('You clicked me!'))
		)
	}
}

return MyApp

}