import {
	App,
	Page,
	Text,
	Cols,
	Rows,
	Button,
} from '@bagatell/core'

export default function createApp({a, p}){

//#region MyApp
class MyApp extends App{
	
	onBefore(){
		a.counter = 0
	}
	
	createStartPage(){
		return new CounterPage()
	}
	
	incrementCounter(){
		a.counter += 1
	}
	
	decrementCounter(){
		a.counter -= 1
	}
	
	resetCounter(){
		a.counter = 0
	}
	
}
//#endregion MyApp

//#region CounterPage
class CounterPage extends Page{
	createGui(){
		return Rows(
			Text(`${a.counter}`).size(1),
			Cols.size(1)(
				Rows.size(1)(
					Button(`-`).size(1).handler(a.decrementCounter),
					Button(`Reset`).size(1).handler(a.resetCounter),
				),
				Button(`+`).size(1).handler(a.incrementCounter),
			),
		)
	}
}
//#endregion CounterPage

return MyApp

}