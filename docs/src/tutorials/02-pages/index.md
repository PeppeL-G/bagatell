# 2. Pages
This tutorial will teach you how to use pages in Bagatell.

## App structure
A Bagatell app consists of different *pages*. Each page has its own Graphical User Interface (GUI), and one page at a time is shown to the user. When the user has interacted with the page (for example clicked on a button in its GUI), the user will come to the next page, and the app will show the GUI of the new page, and so on.

::: tip Online Editor
In our [Online Editor](../../editor/) you can very easily see which pages the app consists of, preview them, as well as see lines between the pages indicating how the user can navigate between them.
:::

## Creating a page
In programming, a *class* is a description of how a *thing* should work. The Bagatell framework contains a class called `Page`, which contains a general description of how a page in Bagatell should work. When you want to create a new page in your Bagatell app, you should create your own class *extending* the `Page` class. This way, your own class will already contain the basic functionality a page must contain, and therefor very little work remains for you to do in your own page class!

::: tip Example
Example showing JavaScript code for how to create your own page class called `MyPage` (you can name it whatever you want, but all pages in your app must have a unique name).

```js
class MyPage extends Page{
	
}
```
:::

:::warning Don't freak out!
If you have never programmed before, you are probably wondering *what the heck do all these words and curly brackets in the code above actually mean?!* But don't worry about that; just accept that this is the code that we have to write to create a new class that extends the `Page` class. You know, sentences in English starts with a capital letter and end with a `.`, `?` or `!`. Just as those rules exists in English, we have rules in programming languages we must follow when writing our code, and this is the code we have to write to create a new class extending the `Page` class, so there is nothing strange with the code above; that's simply what we have to write. Just accept it 🙂
:::

Between the curly brackets `{` and `}` in the code above we can write code that describe how our own page class should behave. You will soon see an example of this.

::: tip Online Editor
In our [Online Editor](../../editor/) you can create a new page by clicking anywhere on the empty space, and then select a page template. The new page will have the same code as the page template you select, so no need to memorize the code above by heart 🙂
:::

## Tailoring a page
You of course don't want all of your pages to look and function the same; some should maybe have buttons, others should display some text, etc. Therefor, your own page classes need to contain different descriptions of how they should work. You indicate these differences by adding different pre-named *methods* to your page classes, and then you *implement* the methods differently in your different page classes.

### Tailoring the GUI
When a page needs to show its GUI to the user, the method `createGui()` in the page class will be called. When it is called, the code you write in the method will be executed. In this method you should create and send back the page's GUI.

::::: tip Example
Example showing JavaScript code for how to create two different pages with different GUIs.

:::: tabs
::: tab AboutMePage
```js
class AboutMePage extends Page{
	createGui(){
		return Text(`I am Peter!`)
	}
}
```
:::
::: tab AboutSwedenPage
```js
class AboutSwedenPage extends Page{
	createGui(){
		return Text(`Sweden's flag is blue and yellow.`)
	}
}
```
:::
::::

The GUI in the pages above will just contain some text. To specify that, we add the method `createGui()`, and:

1. In JavaScript use `return` to indicate what is written to the right side of `return` should be returned back from the method
2. To the right of `return` use the GUI component stored in the pre-defined `Text` variable to create a new `Text` component (a GUI component we can use to display text):
	1. Between the parentheses we use two `` ` `` symbols to indicate the start respective end of a *string* (a JavaScript value containing text) the `Text` component should display
	2. In the string (between the two `` ` ``) write the characters the string should contain
:::::

::: warning Don't freak out!
If you have never programmed before, the code and the description of the code above might seem very complicated, but you don't really need to remember all the details how of it works. For now, it's enough for you to just know that you can use `` Text(`Some text`) `` to create a `Text` component that displays the text `Some text` to the user. Easy as that! 🙂
:::

::: tip Online Editor
In our [Online Editor](../../editor/) you can simply click on a page to show the code for it. After you have modified the code, click on the SAVE button to save your changes, and then you can click on the PREVIEW button to test run your app showing that page.
:::




## That's it!
And now you know the basic structure of all Bagatell apps. Good work, and congratulation! 🥳 But you probably want the GUI in the pages to not only display text, right? So continue with next tutorial to learn more about how the GUI works.