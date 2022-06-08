import {
	App,
	Page,
	Text,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	createStartPage(){
		return new StartPage()
	}
	
}

class StartPage extends Page{
	createGui(){
		return Text.background(`orange`)(`This Text component has an orange background, so it's easy too see what space it occupies.`)
	}
}

return MyApp

}