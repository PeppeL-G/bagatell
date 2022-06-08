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
	Text(`Left`).background(`lime`),
	Space,
	Text(`Right`).background(`gold`),
)
		)
	}
}

return MyApp

}