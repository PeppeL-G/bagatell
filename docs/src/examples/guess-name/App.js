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

class MyApp extends App{
	
	createStartPage(){
		return new EnterGuess()
	}
	
}

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

return MyApp

}