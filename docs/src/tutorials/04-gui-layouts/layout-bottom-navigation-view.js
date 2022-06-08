import {
	App,
	Page,
	Text,
	Rows,
	Cols,
	Button,
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
		return Rows(
			Text.size(1).background(`white`)(`Main content`),
			Cols.backgroun(`lime`)(
				Space,
				Button(`Option 1`),
				Space,
				Button(`Option 2`),
				Space,
				Button(`Option 3`),
				Space,
			),
		)
	}
}

return MyApp

}