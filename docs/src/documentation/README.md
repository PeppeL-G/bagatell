# Introduction
On these pages you find the documentation for the npm package `@bagatell/core`.

::: tip Using our Online Editor?
Those of you creating your Bagatell apps through our [Online Editor](/editor/) can jump directly to [Getting started](#getting-started) 🙂
:::

## Quick start
1. `npm install @bagatell/core`
2. 
	```js
	import {
		App,
		Page,
	} from '@bagatell/core'
	
	export default function createApp({a, p}){
		
		class MyApp extends App{
			createStartPage(){
				return new StartPage()
			}
		}
		
		class StartPage extends Page{
			createGui(){
				return <Text>Hello, world</Text>
			}
		}
		
		return MyApp
		
	}
	```
3. Use [@bagatell/web-components](/web-components/) to display your app on an HTML webpage

## Getting started
::: tip Using our Online Editor?
If you create your Bagatell apps through our [Online Editor](/editor/) you don't need to do the steps described below. But even if you use our Online Editor, read through the steps below anyway, since they will teach you the basics of how a Bagatell app works 🙂
:::

To create your own Bagatell app, you first need to install the npm package `@bagatell/core`:

1. `mkdir my-bagatell-app`
2. `cd my-bagatell-app`
3. `npm init --yes`
4. `npm install @bagatell/core`

The npm package `@bagatell/core` contains the class `App`, which represents a general Bagatell app. To create your own app you should extend this class and override some methods to give your own app the specific behavior you want it to have.

```js
import {
	App,
} from '@bagatell/core'

class MyApp extends App{
	// Override some methods here...
}
```

::: tip Using our Online Editor?
In our [Online Editor](/editor/) you don't need to install any npm package nor import any values; everything in `@bagatell/core` is imported and available to you by default.

In the editor, click on the project name to view and edit the code for your `App` class 🙂
:::

A Bagatell app consists of multiple different pages. The app will show one page at a time to the user. When the user has interacted with one page (for example clicked on a button in it), the app will continue to another page and show that one, and so one.

The npm package `@bagatell/core` contains the class `Page`, which represents a general page in a Bagatell app. To create your own pages you should extend this class and override some methods to give your own page classes the specific behavior you want them to have.

```js{3,10-12,14-16}
import {
	App,
	Page,
} from '@bagatell/core'

class MyApp extends App{
	// Override some methods here...
}

class Page1 extends Page{
	// Override some methods here...
}

class Page2 extends Page{
	// Override some methods here...
}
```

::: tip Using our Online Editor?
In our [Online Editor](/editor/), just click on a page to view and edit the code for it, or click on some empty space to create a new page 🙂
:::

The only mandatory method to override in `App` is `createStartPage()`. It should create and return a new instance of the `Page` class that should be shown to the user when the app starts.

```js{7-9}
import {
	App,
	Page,
} from '@bagatell/core'

class MyApp extends App{
	createStartPage(){
		return new Page1()
	}
}

class Page1 extends Page{
	// Override some methods here...
}

class Page2 extends Page{
	// Override some methods here...
}
```

The only mandatory method to override in `Page` is `createGui()`. It should create and return the page's graphical user interface. Bagatell contains multiple different GUI components you can use to specify what the graphical user interface should look like, such as `Rows`, `Text` and `Button`.

```js{4-6,16-21,25-30}
import {
	App,
	Page,
	Rows,
	Text,
	Button,
} from '@bagatell/core'

class MyApp extends App{
	createStartPage(){
		return new Page1()
	}
}

class Page1 extends Page{
	createGui(){
		return Rows(
			Text(`This is Page 1.`),
			Button(`Go to Page 2`).page(Page2),
		)
	}
}

class Page2 extends Page{
	createGui(){
		return Rows(
			Text(`This is Page 2.`),
			Button(`Go to Page 1`).page(Page1),
		)
	}
}
```



In your `App` class you can use `this` to refer to the instance of your app, and in your `Page` classes you can use `this` to refer to the instances of your pages. Any Bagatell app that isn't very basic often need to refer to these (learn why later), but it's a bit confusing that `this` refers to different things in different classes. Therefore, Bagatell apps should be created in a special function called `createApp()`. This function will be called with an environment object, where the properties:

* `a` (short for **a**pp) refers to the instance of your `App`
* `p` (short for **p**age) refers to the instance of the `Page` currently shown in your app

This way, the code you write in your classes becomes easier to understand.

The `createApp()` function should finally return back your `App` class, and if you create your app in its own file, it perfect to export the `createApp()` function from it.

```js{9,13,20-21,31-32,40,42}
import {
	App,
	Page,
	Rows,
	Text,
	Button,
} from '@bagatell/core'

export default function createApp({a, p}){
	
	class MyApp extends App{
		createStartPage(){
			// Here we can use "a" instead of "this".
			return new Page1()
		}
	}
	
	class Page1 extends Page{
		createGui(){
			// Here we can use "p" instead of "this".
			// We can also use "a".
			return Rows(
				Text(`This is Page 1.`),
				Button(`Go to Page 2`).page(Page2),
			)
		}
	}
	
	class Page2 extends Page{
		createGui(){
			// Here we can use "p" instead of "this".
			// We can also use "a".
			return Rows(
				Text(`This is Page 2.`),
				Button(`Go to Page 1`).page(Page1),
			)
		}
	}
	
	return MyApp
	
}
```

::: tip Using our Online Editor?
In our [Online Editor](/editor/), you don't need to write any code for the `createApp()` function yourself; you own `App` and `Page` classes will automatically be wrapped in one, so you just use `a` and `p` without any effort 🙂
:::

To learn how to display your Bagatell app on an HTML webpage, see [@bagatell/web-components](/web-components/).

## Learn more
We recommend you to continue by reading through the documentation for the classes in the following order:

1. [App](classes/app/)
2. [Page](classes/page/)
3. [Direction](classes/direction/)