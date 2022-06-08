import {
	App,
	Page,
	Text,
	Rows,
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
	Text(`Row 1`).background(`lime`),
	Text(`Row 2`).background(`aqua`),
	Text(`Row 3`).background(`gold`),
	Text(`Row 4`).background(`lime`),
	Text(`Row 5`).background(`aqua`),
	Text(`Row 6`).background(`gold`),
	Text(`Row 7`).background(`lime`),
	Text(`Row 8`).background(`aqua`),
	Text(`Row 9`).background(`gold`),
)
		)
	}
}

return MyApp

}