import {
	App,
	Page,
	Text,
	Cols,
	Space,
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
			Text.background(`lime`)(`Left!`),
			Space,
			Text.background(`gold`)(`Right!`),
		)
	}
}

return MyApp

}