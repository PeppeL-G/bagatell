# Tutorial 2: Pages
This tutorial will teach you how to use pages in Bagatell.

## App structure
A Bagatell app consists of different *pages*. Each page has its own GUI, and one page at a time is shown at to the user. When the user has interacted with the page (for example clicked on a button in its GUI), the user will come to the next page, and show the GUI of that one.

::: tip Online Editor
In our [Online Editor](../../editor/) you can very easily see which pages the app contains, as well as lines between the pages indicating how the user can navigate between them.
:::

## Creating a page

...---

---

---







## Defining the app
A Bagatell app does not only consist of pages. Typically, it also consists of data, and somehow you need to indicate which the first page shown to the user is. This information is represented through a class called `App`. This class contains a general description of how a Bagatell app should work, and you should create your own class extending this one.

::: tip Example
Example showing JavaScript code for how to create your own app class called `MyApp` (you can name it whatever you want).

```js
class MyApp extends App{
	
}
```
:::

::: tip Online Editor
In our [Online Editor](../../editor/) you already have the fundamental code for your `App` class. It is named `MyApp`. To see the code for it, just click on the *MyApp* text. Click on the SAVE button afterwards to save your changes. 
:::

Just as with the `Page` class, you can add different pre-named methods to your `App` class, in which you implement the specific behavior you want your app to have. One of these methods is `createStartPage()`, which should send back a new instance of the page you first want to show to the user.

::::: tip Example
Example showing how to create an app that shows the `AboutMePage` to the user when it starts.

:::: code-group
::: code-group-item MyApp
```js
class MyApp extends App{
	createStartPage(){
		return new AboutMePage()
	}
}
```
:::
::: code-group-item AboutMePage
```js
class AboutMePage extends Page{
	createGui(){
		return <Text>I am Peter!</Text>
	}
}
```
:::
::::

The method `createStartPage()` in `MyApp` above:

1. First use `return` in JavaScript to indicate what is written to the right side of `return` should be returned back from the method
2. To the right of `return` create a new instance of the `AboutMePage` using `new AboutMePage()` (simply accept that that's how you write it)
:::::

