import {
	App,
	Page,
	Slider,
	Rows,
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
Rows(
	Slider.min(1).max(120).handler(selectedNumber => alert(selectedNumber)),
	Button(`Go!`),
)
		)
	}
}

return MyApp

}