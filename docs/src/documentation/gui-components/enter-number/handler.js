import {
	App,
	Page,
	EnterNumber,
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
EnterNumber
	.placeholder(`Enter your IQ`)
	.handler(enteredNumber => alert(enteredNumber))
		)
	}
}

return MyApp

}