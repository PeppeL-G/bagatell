import {
	App,
	Page,
	Text,
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
Space.background(`yellow`).padding(5)(
	Text(`Hello`).background(`lime`),
)
		)
	}
}

return MyApp

}