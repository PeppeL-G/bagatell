import {
	App,
	Page,
	Timer,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	createStartPage(){
		return new TimerPage()
	}
	
}

class TimerPage extends Page{
	
	createGui(){
		return (
			// We have not specified which the next page is, so
			// this page will be reloaded when the timer times out.
Timer.seconds(10)
		)
	}
	
}

return MyApp

}