import {
	App,
	Page,
	Text,
	Cols,
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
Cols(
	Text(`Col 1`).background(`lime`).size(1),
	Text(`Col 2`).background(`aqua`),
	Text(`Col 3`).background(`gold`).size(3),
)
		)
	}
}

return MyApp

}