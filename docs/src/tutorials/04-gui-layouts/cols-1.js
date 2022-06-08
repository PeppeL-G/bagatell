import {
	App,
	Page,
	Text,
	Cols,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	createStartPage(){
		return new StartPage()
	}
	
}

class StartPage extends Page{
	createGui(){
		return Cols.background(`yellow`)(
			Text.background(`lime`)(`#1`),
			Text.background(`aqua`)(`Number 2`),
			Text.background(`gold`).bottom()(`Third`),
		)
	}
}

return MyApp

}