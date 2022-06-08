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
		return new MyPage()
	}
	
}

class MyPage extends Page{
	createGui(){
		return (
Cols.background(`yellow`)(
	Space,
	Text(`Col 1`).background(`lime`),
	Text(`Col 2`).background(`aqua`),
	Text(`Col 3`).background(`gold`),
)
		)
	}
}

return MyApp

}