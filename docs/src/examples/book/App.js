import {
	App,
	Page,
	Text,
	Cols,
	Rows,
	Button,
	Space
} from '@bagatell/core'

export default function createApp({a, p}){

//#region MyApp
class MyApp extends App{
	createStartPage(){
		return new CoverPage()
	}
}
//#endregion MyApp

//#region CoverPage
class CoverPage extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`A short story`),
			Text(`by Peppe L-G`),
			Space,
			Space,
			Cols(
				Space,
				Button(`Start Reading`).page(Page1),
				Space,
			),
			Space,
		)
	}
}
//#endregion CoverPage

//#region Page1
class Page1 extends Page{
	createGui(){
		return Rows(
			Text(`Once upon a time, there was a programmer who thought creating small useful apps was too hard for beginners.`),
			Space,
			Cols(
				Button(`←`).page(CoverPage),
				Space,
				Text(`1`),
				Space,
				Button(`→`).page(Page2),
			),
		)
	}
}
//#endregion Page1

//#region Page2
class Page2 extends Page{
	createGui(){
		return Rows(
			Text(`So he created his own little framework that made it easier. He called that framework for Bagatell.`),
			Space,
			Cols(
				Button(`←`).page(Page1),
				Space,
				Text(`2`),
				Space,
				Button(`→`).page(Page3),
			),
		)
	}
}
//#endregion Page2

//#region Page3
class Page3 extends Page{
	createGui(){
		return Rows(
			Text(`And that's the framework you are using now!`),
			Space,
			Cols(
				Button(`←`).page(Page2),
				Space,
				Text(`3`),
				Space,
				Button(`→`).page(Page4),
			),
		)
	}
}
//#endregion Page3

//#region Page4
class Page4 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`The end!`),
			Space,
			Space,
			Cols(
				Space,
				Button(`Read again`).page(CoverPage),
				Space,
			),
			Space,
		)
	}
}
//#endregion Page4

return MyApp

}