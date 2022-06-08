# `App`
On this page you find the documentation for the `App` class.


## Introduction
The `App` class represents the entire app the user can interact with. It is used to:

* Keep track of the app's global state through the app's instance variables
* Create the first page shown to the user

You should create your own class inheriting from `App` and in which you override some methods to give your own app the specific behavior you want it to have, as shown below.

```js
import { App } from '@bagatell/core'

// Name your own app whatever you want.
class MyApp extends App{
	// Override methods here to give your own app
	// the specific behavior you want it to have.
}
```

::: tip "a" is this!
Read the [Getting started](../../#getting-started) to learn more about the special variable `a` you can use to refer to the instance of your `App`.
:::



## Initializing the global state
When the user starts using your app, a new instance of it will be created, and the method `onBefore()` will be called. In this method, you can initialize any global state you need to use in your app, for example:

```js
import { App } from '@bagatell/core'

class MyApp extends App{
	
	onBefore(){
		this.startTime = Date.now()
		this.playerRemainingLives = 3
	}
	
}
```

::: tip Not needed?
You only need to initialize the global state if your app needs one. Some simple apps don't need one, and can simply leave `onBefore()` empty, or not have the method at all.
:::



## Creating the start page
After `onBefore()` has been called, `createStartPage()` will be called. In this method, you should create and send back an instance of the `Page` class that should first be shown to the user, for example:

```js
import { App, Page } from '@bagatell/core'

class MyApp extends App{
	
	createStartPage(){
		return new StartPage()
	}
	
}

class StartPage extends Page{
	// Override methods here to give this page
	// the specific behavior you want it to have.
}
```

See the documentation for the [Page](../page/) class to learn which methods you can override in it. The main method you need to override is the `createGui()` method, which specifies how the page should be shown to the user (i.e. its graphical user interface).




## Speaking the text
You can make the app speak the text in `<Text>` using the speakers on the user's device by enabling the app's `Mouth` with the code `a.mouth.enable()`.

::::: tip Example
:::: code-group
::: code-group-item App Code
@[code{11-21}](speak-example.js)
:::
::: code-group-item All Code
@[code](speak-example.js)
:::
::::

<ShowApp logic-class="app" filename="speak-example" />

:::::

::: warning Will not always work
The speak functionality uses text-to-speech functionality provided by the user's web browser. Not all web browsers provide such functionality, and will therefor not work for all your users.
:::

The app's voice can also be configured and disabled. Check the documentation for the [Mouth](../mouth/) class for more information.