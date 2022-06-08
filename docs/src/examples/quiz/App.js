import {
	App,
	Page,
	Direction,
	Text,
	Button,
	Rows,
	Cols,
	Space,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	onBefore(){
		a.numberOfAnsweredQuestions = 0
		a.numberOfCorrectAnswers = 0
	}
	
	createStartPage(){
		return new Question1()
	}
	
	onCorrectAnswer(){
		a.numberOfAnsweredQuestions += 1
		a.numberOfCorrectAnswers += 1
	}
	
	onWrongAnswer(){
		a.numberOfAnsweredQuestions += 1
	}
	
}

class Question1 extends Page{
	
	createGui(){
		return Rows(
			
			Text(`Question 1`),
			
			Text(`Which colors does the Swedish flag consist of?`)
				.size(2),
			
			Rows.size(1)(
				
				Cols.size(1)(
					Button(`Red and Blue`).size(1).handler(a.onWrongAnswer),
					Button(`Blue and Yellow`).size(1).handler(a.onCorrectAnswer),
				),
				
				Cols.size(1)(
					Button(`Blue and lime`).size(1).handler(a.onWrongAnswer),
					Button(`White and Red`).size(1).handler(a.onWrongAnswer),
				),
				
			),
		)
	}
	
	createAfterDirections(){
		return [
			new Direction(
				Question2,
				() => true,
				`On answer`,
			)
		]
	}
	
}

class Question2 extends Page{
	
	createGui(){
		return Rows(
			
			Text(`Question 2`),
			
			Text(`Which country has the smallest land size?`)
				.size(2),
			
			Rows.size(1)(
				
				Cols.size(1)(
					Button(`England`).size(1).handler(a.onWrongAnswer),
					Button(`Denmark`).size(1).handler(a.onWrongAnswer),
				),
				
				Cols.size(1)(
					Button(`Germany`).size(1).handler(a.onWrongAnswer),
					Button(`Andorra`).size(1).handler(a.onCorrectAnswer),
				),
				
			),
		)
	}
	
	createAfterDirections(){
		return [
			new Direction(
				Question3,
				() => true,
				`On answer`,
			)
		]
	}
	
}

class Question3 extends Page{
	
	createGui(){
		return Rows(
			
			Text(`Question 3`),
			
			Text(`In which country do they speak Spanish?`)
				.size(2),
			
			Rows.size(1)(
				
				Cols.size(1)(
					Button(`Spain`).size(1).handler(a.onCorrectAnswer),
					Button(`Italy`).size(1).handler(a.onWrongAnswer),
				),
				
				Cols.size(1)(
					Button(`Russia`).size(1).handler(a.onWrongAnswer),
					Button(`Scotland`).size(1).handler(a.onWrongAnswer),
				),
				
			),
		)
	}
	
	createAfterDirections(){
		return [
			new Direction(
				Result,
				() => true,
				`On answer`,
			)
		]
	}
	
}

class Result extends Page{
	
	createGui(){
		
		let text = `You got ${a.numberOfCorrectAnswers} of ${a.numberOfAnsweredQuestions} correct.`
		
		if(a.numberOfAnsweredQuestions == a.numberOfCorrectAnswers){
			text = `You got all correct, good job!`
		}else if(a.numberOfCorrectAnswers == 0){
			text = `Oh, this was not impressive at all, 0 correct answers. Better luck next time!`
		}
		
		return Rows(
			
			Text(`Result`),
			
			Text(text).size(1),
			
			Cols(
				Space,
				Button(`Try again`).page(Question1).handler(p.reset),
				Space,
			),
			
		)
	}
	
	reset(){
		a.numberOfAnsweredQuestions = 0
		a.numberOfCorrectAnswers = 0
	}
	
}

return MyApp

}