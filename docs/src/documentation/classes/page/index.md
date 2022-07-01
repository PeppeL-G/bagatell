# `Page`
On this page you find the documentation for the `Page` class.



## Introduction
Your `App` basically consists of different `Page`s. One `Page` at a time will be shown to the user, so each `Page` has it's own graphical user interface (GUI). The user can interact with the GUI in a `Page` (for example by clicking on a button in the `Page`), after which the `App` will go to the next `Page`, and show the GUI of that `Page` instead, and so on.

You should create your own `Page` classes that inherit from the `Page` class, and in which you override some methods to give your own `Page` classes the specific behaviors you want them to have.

::::: tip Example
Example showing the basic structure of a simple app.

:::: tabs
::: tab MyApp
```js
class MyApp extends App{
	createStartPage(){
		return new StartPage()
	}
}
```
:::
::: tab StartPage
```js
class StartPage extends Page{
	// Override methods here to give this page
	// the specific behavior you want it to have.
}
```
:::
::: tab MenuPage
```js
class MenuPage extends Page{
	// Override methods here to give this page
	// the specific behavior you want it to have.
}
```
:::
::: tab GameOverPage
```js
class GameOverPage extends Page{
	// Override methods here to give this page
	// the specific behavior you want it to have.
}
```
:::
::::
:::::

::: tip "p" is this!
Read the [Getting started](../../#getting-started) to learn more about the special variable `p` you can use to refer to the instance of your current `Page` class.
:::




## Initializing the page state
Before the page is shown to the user, a new instance of it will be created, and `onBefore()` will be called on it. In this method you can initialize the page's internal state.

::: tip Example
Example of how to use `Page.onBefore()`.

```js
class AskQuestionPage extends Page{
	onBefore(){
		this.startTimeInMs = Date.now()
	}
}
```
:::

::: tip Not needed?
You only need to initialize an internal state if your `Page` need one. Many simple `Page`s can leave this method empty, or simply not have it at all.
:::



## Creating the GUI
After `onBefore()` has been called, `createGui()` will be called. In this method you should create the GUI structure the page consists of, and send back the root component of the GUI structure. The app will then show the `Page`'s GUI on the user's screen.

::: tip Example
Example showing how to use `Page.createGui()`.

```js
class AskQuestionPage extends Page{
	onBefore(){
		this.startTimeInMs = Date.now()
	}
	createGui(){
		return Rows(
			Text(`Do you know the answer to this question?`),
			Cols(
				Button(`Yes`).handler(() => p.answer='yes'),
				Button(`No` ).handler(() => p.answer='no'),
			),
		)
	}
}
```
:::

::: tip The size of the root component
The root component in your GUI (the `Rows` component in the example above) will always be as wide and high as the app.
:::

::: tip Building the GUI
The GUI is built with the GUI Components from the Bagatell frameworks. In the sidebar on this page you have a list of them (*Views* and *Layouts*).
:::



## Handling user input
When the user has interacted with your GUI (for example by clicking on a `Button`) and should be taken to another `Page`, `onAfter()` will be called, in which you can handle the user's input.

::: tip Example
Example showing how to use `Page.onAfter()`.

```js
class AskQuestionPage extends Page{
	onBefore(){
		this.startTimeInMs = Date.now()
	}
	createGui(){
		return Rows(
			Text(`Do you know the answer to this question?`),
			Cols(
				Button(`Yes`).handler(() => p.answer='yes'),
				Button(`No` ).handler(() => p.answer='no'),
			),
		)
	}
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
:::

::: tip Not needed?
You only need to handle user input in `onAfter()` if your app's logic require's it. Many simple apps can simply leave this method empty, or not have it at all.
:::



## Creating *after directions*
When the user has interacted with the GUI, it needs to be taken to the next `Page`. `createAfterDirections()` will be called to figure out which that next `Page` is. This method should return an array of `Direction`s, where each `Direction` represents a condition that indicates when that `Direction` should be used, and which `Page` the user should come to when that condition is `true`.

If none of the `Page`'s `Direction`s' have a condition that returns `true`, the user will come to a new instance of the `Page` the user currently is on.

::::: tip Example
Example showing how to use `Page.createAfterDirections()`.

:::: tabs
::: tab AskQuestionPage
```js
class AskQuestionPage extends Page{
	onBefore(){
		this.startTimeInMs = Date.now()
	}
	createGui(){
		return Rows(
			Text(`Do you know the answer to this question?`),
			Cols(
				Button(`Yes`).handler(() => p.answer='yes'),
				Button(`No` ).handler(() => p.answer='no'),
			),
		)
	}
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
```
:::
::: tab TooSlowPage
```js
class TooSlowPage extends Page{
	// Override methods here...
}
```
:::
::: tab YesPage
```js
class YesPage extends Page{
	// Override methods here...
}
```
:::
::: tab NoPage
```js
class NoPage extends Page{
	// Override methods here...
}
```
:::
::::
:::::

::: tip Not needed?
You can also specify additional `Direction`s in the GUI Components you use. For example, if you want the user to come to the `YesPage` when the user clicks on the `Button`, you can use the `page` configuration method on the `Button` like this:

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

Using the GUI Components' configuration methods is usually much easier than to implement your own `Direction`s in `createAfterDirections()`, so we recommend you to use the configuration methods whenever possible, and only implement your own `Direction`s in `createAfterDirections()` when you need `Direction`s that can't be expressed using the configuration methods.

Check out the documentation for the different *Views* GUI components in the sidebar to learn which configuration methods you can use to automatically add `Direction`s to a `Page`.
:::




## Creating *before directions*
In some rare cases, when a user comes to one `Page`, let's call it `PageA`, you might want to immediately send the user to another `Page`, let's call that one `PageB`, without the user seeing `PageA`. For this, you can add a *before direction* in `PageA` by implementing the method `createBeforeDirections()`. 

`createBeforeDirections()` will be called directly when the user comes to the `Page`, and should return an array with `Direction`s. If one of those `Direction`s' condition is `true`, the user will come to the `Page` the `Direction` leads to. Otherwise, the initial `Page` will be shown as usual.

::: tip Example
Example showing how to use `Page.createBeforeDirections()`.

```js
class MyPage extends Page{
	createBeforeDirections(){
		// One should not be allowed to view this
		// page between 00:00 and 08:59.
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
:::

::: warning Life cycle methods
When a before direction's condition is `true`, no other methods on the `Page` will be called, not even `onBefore()` nor `onAfter()`!
:::
