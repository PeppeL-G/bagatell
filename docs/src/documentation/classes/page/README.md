# `Page`
On this page you find the documentation for the `Page` class.



## Introduction
Your `App` basically consists of different `Page`s. One `Page` at a time will be shown to the user, so each `Page` has it's own graphical user interface (GUI). The user can interact with the GUI in a `Page` (for example by clicking on a button in the `Page`), after which the `App` will go to the next `Page`, and show the GUI of that `Page` instead, and so on.

You should create your own `Page` classes that inherit from the `Page` class, and in which you override some methods to give your own `Page` classes the specific behaviors you want them to have, as shown below.

```js
import { Page } from '@bagatell/core'

class MyStartPage extends Page{
	// Override methods here to implement your start page.
}

class MyMenuPage extends Page{
	// Override methods here to implement your menu page.
}

class MyGameOverPage extends Page{
	// Override methods here to implement your game over page.
}

// Etc.
```

::: tip p is a special global variable in the editor!
When you create your app in our [Editor](/editor/), you can use the global variable `p` (short for *page*) to refer to the instance of the currently shown `Page` class in the `App`. This way, you can in the methods in your `Page` class write `p` instead of `this` to refer to your `Page` instance. To refer to the instance of your `App` class, you can in the methods in your `Page` class use `this.app`.

All sample code in this documentation are not built using our Editor, so in the sample code we use `this` instead of `p`, and `this.app` instead of `a`.
:::




## Initializing the page state
Before the page is shown to the user, a new instance of it will be created, and `onBefore()` will be called on it. In this method you should initialize the page's internal state. In the internal state you typically store random values and timestamps, but store whatever you need. Example:

```js
import { Page } from '@bagatell/core'

class AskQuestionPage extends Page{
	
	onBefore(){
		this.startTimeInMs = Date.now()
	}
	
}
```

::: tip Not needed?
You only need to initialize an internal state if your `Page` need one. Many simple `Page`s can simply leave this method empty, or simply remove it.
:::



## Creating the GUI
After `onBefore()` has been called, `createGui()` will be called. In this method you should create the GUI structure the page consists of, and send back the root component of the GUI structure. The app will then show the `Page`'s GUI on the user's screen. Example:

```js
import { Page, React, Rows, Text, Cold, Button } from '@bagatell/core'

class AskQuestionPage extends Page{
	
	createGui(){
		return Rows(
			Text(`Do you know the answer?`),
			Cols(
				Button(`Yes`).handler(() => p.answer='yes'),
				Button(`No` ).handler(() => p.answer='no'),
			),
		)
	}
	
}
```

::: tip JSX used!
The GUI is preferably expressed in [JSX](https://reactjs.org/docs/introducing-jsx.html) (as in the example above), which then is compiled to JavaScript. Expressing the GUI directly in JavaScript is of course also possible, but will make it harder to read and write your code. When using JSX, you also need to import `React` and the GUI components you use.
:::

::: tip The size of the root component
The root component in your GUI will always be as wide and high as the app.
:::

::: tip Building the GUI
The GUI is built with the GUI Components from `@bagatell/core`. How these work is described on the [GUI Components](../../../gui-components) pages.
:::



## Handling user input
When the user has interacted with your GUI (for example by clicking on a button) and should be taken to another `Page`, `onAfter()` will be called, in which you can handle the user's input. Example:

```js
class MyPage extends Page{
	
	onAfter(){
		
		const endTimeInMs = Date.now()
		const timeToAnswerInMs = endTimeInMs - p.startTimeInMs
		
		if(10000 < timeToAnswerInMs){
			// Took more than 10 seconds to answer, handle that here.
		}else if(p.answer == 'yes'){
			// The user clicked on the yes-button, handle that here.
		}else{
			// The user clicked on the no-button, handle that here.
		}
		
	}
	
}
```

::: tip Not needed?
You only need to handle user input in `onAfter()` if your `App`'s logic require's it. Many simple `App`s can simply leave this method empty.
:::



## Creating *after directions*
When the user has interacted with the GUI, it needs to be taken to the next `Page`. `createAfterDirections()` will be called to figure out which that next `Page` is. This method should return an array of `Direction`s, where each `Direction` represents a condition that indicates when that `Direction` should be used, and which `Page` the user should come to when that condition is `true`.

At least one of your `Direction`s' condition must be `true`, otherwise the user won't be able to leave the current `Page`. Example:

```js
class MyPage extends Page{
	
	createAfterDirections(){
		
		return [
			new Direction(
				TooSlowPage,
				() => 10000 < Date.now() - p.startTimeInMs,
				"Took more than 10 seconds to answer",
			),
			new Direction(
				YesPage,
				() => p.answer == 'yes',
				"The user clicked on the yes-button",
			),
			new Direction(
				NoPage,
				() => true, // Directions are tested in order, so can hard code true in the last direction.
				"The user clicked on the no-button",
			),
		]
		
	}
	
}

class TooSlowPage extends Page{
	// Override methods here...
}

class YesPage extends Page{
	// Override methods here...
}

class NoPage extends Page{
	// Override methods here...
}
```

::: tip Not needed?
You can also specify additional `Direction`s in the GUI Components you use. For example, if you want the user to come to the `YesPage` when the user clicks on the `Button`, you can use the `page` attribute on the `Button` like this:

```js
Button(`yes`).page(YesPage)
```

Then you don't need to have:

```js
new Direction(
	YesPage,
	() => p.answer == 'yes',
	"The user clicked on the yes-button",
)
```

in `createAfterDirections()`.

Using the GUI Components' props is usually much easier than to implement your own `Direction`s in `createAfterDirections()`, so we recommend you to use the props whenever possible, and only implement your own `Direction`s in `createAfterDirections()` when you need `Direction`s that can't be expressed using the props.
:::

::: tip Creating Directions through GUI Components
Checkout the documentation for the [GUI Components](../../gui-components/) to learn which props you can use in the different components to automatically create `Direction`s. 
:::




## Creating *before directions*
In some rare cases, when a user comes to one `Page`, let's call it `PageA`, you might want to immediately send the user to another `Page`, let's call that one `PageB`, without the user seeing `PageA`. For this, you can add a *before direction* in `PageA` by implementing the method `createBeforeDirections()`. 

`createBeforeDirections()` will be called directly when the user comes to the `Page`, and should return an array with `Direction`s. If one of those `Direction`s' condition is `true`, the user will come to the `Page` the `Direction` leads to. Otherwise, the initial `Page` will be shown as usual.

::: warning Life cycle methods
If a before direction's condition is `true`, no other methods on the `Page` will be called, not even `onBefore()` nor `onAfter()`!
:::

```js
class MyPage extends Page{
	
	createBeforeDirections(){
		
		return [
			new Direction(
				MorningPage,
				() => new Date().getHours() < 9,
				"Is morning",
			),
		]
		
	}
	
}
```