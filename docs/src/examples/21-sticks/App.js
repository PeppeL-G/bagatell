import {
	App,
	Page,
	Direction,
	Text,
	Cols,
	Rows,
	Button,
	Space
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	onBefore(){
		a.numberOfSticksLeft = 21
	}
	
	take3Sticks(){
		a.numberOfSticksLeft -= 3
	}
	
	take2Sticks(){
		a.numberOfSticksLeft -= 2
	}
	
	take1Stick(){
		a.numberOfSticksLeft -= 1
	}
	
	createStartPage(){
		return new AskUserToMakeAMove()
	}
	
}

class AskUserToMakeAMove extends Page{
	
	createGui(){
		
		const optionElements = []
		
		if(3 <= a.numberOfSticksLeft){
			optionElements.push(
				Button(`3 sticks`).handler(a.take3Sticks),
				Space
			)
		}
		
		if(2 <= a.numberOfSticksLeft){
			optionElements.push(
				Button(`2 sticks`).handler(a.take2Sticks),
				Space
			)
		}
		
		optionElements.push(
			Button(`1 stick`).handler(a.take1Stick),
			Space
		)
		
		return Rows(
			Space,
			Text(`There are ${a.numberOfSticksLeft} sticks left.`),
			Space,
			Text(`How many sticks do you want to take?`),
			Cols(
				Space,
				...optionElements
			),
			Space,
		)
		
	}
	
	createAfterDirections(){
		
		return [
			new Direction(
				ComputerWon,
				() => a.numberOfSticksLeft == 0,
				`The computer won`
			),
			new Direction(
				ShowGameAfterUserMove,
				() => true,
				`Game not finished`
			)
		]
		
	}
	
}

class ShowGameAfterUserMove extends Page{
	
	createGui(){
		return Rows(
			Space,
			Text(`There are ${a.numberOfSticksLeft} sticks left.`),
			Space,
			Cols(
				Space,
				Button(`The computer's turn...`).page(AskComputerToMakeAMove),
				Space
			),
			Space,
		)
		
	}
	
}

class AskComputerToMakeAMove extends Page{
	
	onBefore(){
		
		// Compute how many sticks the computer's take.
		let numberOfSticksTheComputerTakes
		
		// If there is only 1 stick left...
		if(a.numberOfSticksLeft == 1){
			
			// ...then the computer has to take 1 stick!
			numberOfSticksTheComputerTakes = 1
			
		}
		
		// If there are two sticks left...
		if(a.numberOfSticksLeft == 2){
			
			// ...the computer can take 1 or 2. Randomize!
			const randomNumber = Math.random() // Number between 0 and 1.
			
			if(randomNumber < 0.5){
				numberOfSticksTheComputerTakes = 1
			}else{
				numberOfSticksTheComputerTakes = 2
			}
			
		}
		
		// If there are 3 or more sticks left...
		if(3 <= a.numberOfSticksLeft){
			
			// The computer can take 1, 2 or 3 sticks. Randomize!
			const randomNumber = Math.random() // Number between 0 and 1.
			
			if(randomNumber < 0.33){
				numberOfSticksTheComputerTakes = 1
			}else if(randomNumber < 0.66){
				numberOfSticksTheComputerTakes = 2
			}else{
				numberOfSticksTheComputerTakes = 3
			}
			
		}
		
		p.numberOfSticksTheComputerTakes = numberOfSticksTheComputerTakes
		a.numberOfSticksLeft -= numberOfSticksTheComputerTakes
		
	}
	
	createGui(){
		return Rows(
			Space,
			Text(`The computer takes ${p.numberOfSticksTheComputerTakes} sticks.`),
			Space,
			Text(`Now there are ${a.numberOfSticksLeft} sticks left.`),
			Space,
			Button(`OK`),
			Space,
		)
	}
	
	createAfterDirections(){
		
		return [
			new Direction(
				PlayerWon,
				() => a.numberOfSticksLeft == 0,
				`The computer won`
			),
			new Direction(
				AskUserToMakeAMove,
				() => true,
				`Game not finished`
			)
		]
		
	}
	
}

class ComputerWon extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Too bad, the computer won ☹️`),
			Space,
		)
	}
}

class PlayerWon extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Congratulation, you won! 😊`),
			Space,
		)
	}
}

return MyApp

}