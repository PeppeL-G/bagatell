import {
	App,
	Page,
	Text,
	Cols,
	Rows,
	Button,
	EnterText,
	Space,
} from '@bagatell/core'

export default function createApp({a, p}){

class MyApp extends App{
	
	createStartPage(){
		return new Page1()
	}
	
}

class Page1 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Hi there!`),
			Space,
			Cols(
				Space,
				Button(`Hello`).page(Page2),
				Space,
			),
			Space,
		)
	}
}

class Page2 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`You want to learn what type of apps one can implement with Bagatell?`),
			Space,
			Cols(
				Space,
				Button(`No`).page(Page3No),
				Space,
				Button(`Yes`).page(Page3Yes),
				Space,
			),
			Space,
		)
	}
}

class Page3No extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`No? Well, then I'm afraid I can't help you.`),
			Space,
			Cols(
				Space,
				Button(`OK, tell me...`).page(Page4),
				Space,
			),
			Space,
		)
	}
}

class Page3Yes extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`I knew it, you're a curious one! 😊`),
			Space,
			Cols(
				Space,
				Button(`...`).page(Page4),
				Space,
			),
			Space,
		)
	}
}

class Page4 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`With Bagatell you can easily create apps with a graphical user interface (GUI) like this one, with buttons leading to new pages.`),
			Space,
			Cols(
				Space,
				Button(`Is that all?`).page(Page5),
				Space,
			),
			Space,
		)
	}
}

class Page5 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`No, of course not!`),
			Space,
			Text(`Only having GUI:s with buttons like this makes it extremely easy for beginners to get started, but it's also possible to do arbitrary programming in JavaScript, and there exist GUI components which the user can enter input with.`),
			Space,
			Cols(
				Space,
				Button(`Such as what?`).page(Page6),
				Space,
			),
			Space,
		)
	}
}

class Page6 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`One example is the EnterText component, in which the user can enter some text. Try entering your name below.`),
			Space,
			Cols(
				EnterText().size(1).aVar(`name`).placeholder(`Enter name...`).page(Page7),
				Button(`⇒`),
			),
			Space,
		)
	}
}

class Page7 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Hello ${a.name}, nice to meet you! 😃`),
			Space,
			Text(`In addition to remember input from the user, it's also possible to do general computations with it, such as computing that your name backwards is ${a.name.split("").reverse().join("")}.`),
			Space,
			Text(`Impressed? 😎`),
			Space,
			Cols(
				Space,
				Button(`No`).page(Page8No),
				Space,
				Button(`I'm sold`).page(Page8Yes),
				Space,
			),
			Space,
		)
	}
}

class Page8No extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`No? You sure are hard to impress 😅 But you can't judge a framework from a single example.`),
			Space,
			Cols(
				Space,
				Button(`...`).page(Page9),
				Space,
			),
			Space,
		)
	}
}

class Page8Yes extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Really? You're cheap 😉`),
			Space,
			Cols(
				Space,
				Button(`...`).page(Page9),
				Space,
			),
			Space,
		)
	}
}

class Page9 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Can you imagine what type of apps you can implement with Bagatell?`),
			Space,
			Cols(
				Space,
				Button(`No`).page(Page10No),
				Space,
				Button(`Yes`).page(Page10Yes),
				Space,
			),
			Space,
		)
	}
}

class Page10No extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Then let me explain.`),
			Space,
			Cols(
				Space,
				Button(`OK`).page(Page11),
				Space,
			),
			Space,
		)
	}
}

class Page10Yes extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`I'm sorry, you're probably a great guy, but I'm not sure you do, so let me give you a a few examples.`),
			Space,
			Cols(
				Space,
				Button(`OK`).page(Page11),
				Space,
			),
			Space,
		)
	}
}

class Page11 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`One example is an app the user can chat with, like this one.`),
			Space,
			Cols(
				Space,
				Button(`Obviously...`).page(Page12),
				Space,
			),
			Space,
		)
	}
}

class Page12 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Yes, BUT do you realize how many useful apps that can be implemented like this? Online support on websites, an app registering how you are feeling each day, or an app asking you if you have taken your medicine each day, or an app where you easily can register outside temperature each day etc.`),
			Space,
			Text(`Now anyone can create these apps!`),
			Space,
			Cols(
				Space,
				Button(`OK...`).page(Page13),
				Space,
			),
			Space,
		)
	}
}

class Page13 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Another example is an interactive digital book. Now anyone can write short stories the user can interact with, such as entering her name, making choices in the story by clicking on buttons, etc.`),
			Space,
			Cols(
				Space,
				Button(`...`).page(Page14),
				Space,
			),
			Space,
		)
	}
}

class Page14 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`And if the author is creative enough, the book will turn more and more into an adventure game where the user not only has to read the book, but think and make strategic decisions on her own to reach the end of the game. Ehh, I mean book.`),
			Space,
			Cols(
				Space,
				Button(`Oh`).page(Page15),
				Space,
			),
			Space,
		)
	}
}

class Page15 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Yea, cool, right? 😀`),
			Space,
			Text(`And a student learning another language can easily create an app where she can enter some glossaries, and then practice on entering the correct answers, so she learns programming and another language at the same time. Simply brilliant! `),
			Space,
			Cols(
				Space,
				Button(`Indeed`).page(Page16),
				Space,
			),
			Space,
		)
	}
}

class Page16 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`And of course it's possible to create many different type of fun games! Dice games, card games, number games, memory, etc.`),
			Space,
			Cols(
				Space,
				Button(`Fun!`).page(Page17),
				Space,
			),
			Space,
		)
	}
}

class Page17 extends Page{
	createGui(){
		return Rows(
			Space,
			Text(`Fun indeed!`),
			Space,
			Text(`And that's of course not all! Only users' imagination set the limit, and we believe people are extremely creative and will come up with new type of apps. Give the tool to the people, and the people will do wonders!`),
			Space,
			Text(`Thanks for listening!`),
			Space,
		)
	}
}

return MyApp

}