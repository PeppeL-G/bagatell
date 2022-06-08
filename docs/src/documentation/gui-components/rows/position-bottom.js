import {
	App,
	Page,
	Text,
	Rows,
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
Rows.background(`yellow`)(
	Space,
	Text(`Row 1`).background(`lime`),
	Text(`Row 2`).background(`aqua`),
	Text(`Row 3`).background(`gold`),
)
		)
	}
}

return MyApp

}