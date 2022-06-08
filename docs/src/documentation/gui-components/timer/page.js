import {
	App,
	Page,
	Timer,
	Button,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	createStartPage(){
		return new StartPage()
	}
	
}

class StartPage extends Page{
	
	createGui(){
		return (
			Button(`Start timer`).page(TimerPage)
		)
	}
	
}

class TimerPage extends Page{
	
	createGui(){
		return (
Timer.seconds(5).page(StartPage)
		)
	}
	
}

return MyApp

}