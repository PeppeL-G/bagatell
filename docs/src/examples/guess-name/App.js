import {
	App,
	Page,
	EnterText,
	Text,
	Cols,
	Rows,
	Button,
	Space,
} from '@bagatell/core'

export default function createApp({a, p}){

//#region MyApp
class MyApp extends App{
	createStartPage(){
		return new EnterGuess()
	}
}
//#endregion MyApp

//#region EnterGuess
class EnterGuess extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`I'm thinking of either the name Lily, Peter, Alice or Bob. Guess which one!`),
			Space,
			Space,
			Cols(
				EnterText()
					.size(1)
					.placeholder(`Enter name`)
					.aVar(`enteredName`)
					.page(InvalidGuess)
					.pages({
						'': NoGuessEntered,
						'Lily': CorrectGuess,
						'Peter': WrongGuess,
						'Alice': WrongGuess,
						'Bob': WrongGuess,
					}),
				Button(`⇨`),
			),
		)
	}
}
//#endregion EnterGuess

//#region CorrectGuess
class CorrectGuess extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`That's right, ${a.enteredName} is the one I'm thinking of!`),
			Space,
			Text(`Good work!`),
			Space,
		)
	}
}
//#endregion CorrectGuess

//#region NoGuessEntered
class NoGuessEntered extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`No... That's not a name...`),
			Space,
			Space,
			Cols(
				Space,
				Button(`Guess again`).page(EnterGuess),
				Space,
				Button(`I give up`).page(GiveUp),
				Space,
			),
		)
	}
}
//#endregion NoGuessEntered

//#region InvalidGuess
class InvalidGuess extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`No, ${a.enteredName} is totally wrong! It's not one of the names I mentioned.`),
			Space,
			Space,
			Cols(
				Space,
				Button(`Guess again`).page(EnterGuess),
				Space,
				Button(`I give up`).page(GiveUp),
				Space,
			),
		)
	}
}
//#endregion InvalidGuess

//#region WrongGuess
class WrongGuess extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`No, ${a.enteredName} is wrong.`),
			Space,
			Space,
			Cols(
				Space,
				Button(`Guess again`).page(EnterGuess),
				Space,
				Button(`I give up`).page(GiveUp),
				Space,
			),
		)
	}
}
//#endregion WrongGuess

//#region GiveUp
class GiveUp extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Game Over!`),
			Space,
			Text(`Correct name was Lily.`),
			Space,
		)
	}
}
//#endregion GiveUp

return MyApp

}