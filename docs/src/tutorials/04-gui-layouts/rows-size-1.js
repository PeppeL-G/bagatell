import {
	App,
	Page,
	Text,
	Rows,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	createStartPage(){
		return new StartPage()
	}
	
}

class StartPage extends Page{
	createGui(){
		return Rows.background(`yellow`)(
			Text.size(1).background(`lime`)(`First text.`), // Since this is the only child with a size, it will occupy all remaining space (no matter which number you pass it).
			Text.background(`aqua`)(`Second text, and this text is quite long, spanning multiple lines.`),
			Text.background(`gold`).left()(`Third text, left aligned.`), // This comma is not needed, but it's OK to have it.
		)
	}
}

return MyApp

}