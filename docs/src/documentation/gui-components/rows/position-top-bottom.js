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
	Text(`Top`).background(`lime`),
	Space,
	Text(`Bottom`).background(`gold`),
)
		)
	}
}

return MyApp

}