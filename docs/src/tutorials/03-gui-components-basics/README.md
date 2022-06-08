# 3. GUI Components Basics
This tutorial will teach you the basics of how to create and configure GUI components in your pages.

## `createGui()`
As you learned in the previous tutorial, all your `Page` classes should contain a method called `createGui()`. This method will be called when the page needs to display its GUI on the screen, and in that method you should create and send back the page's GUI.

::::: tip Example
:::: code-group
::: code-group-item Page Code
@[code{17-21}](basic-example.js)
:::
::: code-group-item All Code
@[code js{17-21}](basic-example.js)
:::
::::

<ShowApp tutorial="03-gui-components-basics" filename="basic-example" />

:::::

## GUI Components
So, how do you create the page's GUI? You use the different GUI components Bagatell contains. They are stored in different pre-defined variables whose name reflect what the components do, such as:

* The component stored in the `Text` variable displays text
* The component stored in the `Button` variable displays a button
* ...

## Creating a new instance of a GUI component
To use a component, create a new instance of it by simply writing the name of the variable storing the component you want to use. For example, to use the `Text` component, simply write `Text`. Easy as that! 🙂

## Setting the main content
However, most components requires additional information from you to be useful. For example, the `Text` component needs to know which text it should display. One way to pass additional information to a component is by calling the component as a function, and pass it the additional information as an argument. The additional information you pass to the component this way is known as the component's *main content*.

For the `Text` component, its main content is the text it should display, so we can call the component as a function to tell it what text it should display. To call the component as a function, simply add parentheses after it, i.e. `Text()`. The text we pass to it should be in a JavaScript string, and that we can create by surrounding the text with the `` ` `` character, for example `` Text(`Hello, world!`) ``. See above for an example of this, and what the result would look like to the user.

::: tip Strings in JavaScript
In JavaScript, strings can not only be created with two `` ` `` characters, but also with two `"` characters or two `'` characters. To make it as easy as possible for you, we will only use the `` ` `` character to create strings, but the GUI in the previous example could also have been created in the two ways shown below.

```js
Text("Hello, world!")
```
```js
Text('Hello, world!')
```
:::

## Setting additional information
In addition to the component's main content, you can also pass additional information to the component by calling *configuration methods* on it. To call a configuration method on a component, simply write a dot (`.`), followed by the name of the configuration method, followed by parentheses (`()`).

Different components have different configuration methods you can call. The `Text` component have a configuration method named `left` you can call to tell it that it should left align the text it displays.

::::: tip Example
Example showing JavaScript code for how to create a page displaying some text that is left aligned by calling the configuration method `.left()` (by default, the text is centered; see previous example).

:::: code-group
::: code-group-item Page Code
@[code{17-21}](left-aligned-text.js)
:::
::: code-group-item All Code
@[code js{17-21}](left-aligned-text.js)
:::
::::

<ShowApp tutorial="03-gui-components-basics" filename="left-aligned-text" />

:::::

Configuration methods return the component instance itself, so they are chainable, meaning you can continue to call more configuration methods on the component.

::::: tip Example
Example showing JavaScript code for how to create a page displaying some text that is left and top aligned by calling the configuration methods `left()` and `top()` respectively.

:::: code-group
::: code-group-item Page Code
@[code{17-21}](left-top-aligned-text.js)
:::
::: code-group-item All Code
@[code js{17-21}](left-top-aligned-text.js)
:::
::::

<ShowApp tutorial="03-gui-components-basics" filename="left-top-aligned-text" />

:::::

The order you call the configuration methods in doesn't matter. You can also invoke the component as a function to set its main content whenever you want. All three code pieces below create the same GUI.

```js
Text(`This text is left and top aligned!`).left().top()
```
```js
Text(`This text is left and top aligned!`).top().left()
```
```js
Text.top().left()(`This text is left and top aligned!`)
```

Some configuration methods you can pass additional information to through an argument. An example of that is the configuration method called `background`, which you can use to tell the component that it should have a background color (instead of being transparent, which is the default). To tell it which color to use for the background, you pass it the name of a color in English as a string, such as `` `red` `` or  `` `blue` ``.

::::: tip Example
Example showing JavaScript code for how to create a page displaying some text that is right and bottom aligned and having a yellow background color.

:::: code-group
::: code-group-item Page Code
@[code{17-21}](right-bottom-background-text.js)
:::
::: code-group-item All Code
@[code js{17-21}](right-bottom-background-text.js)
:::
::::

<ShowApp tutorial="03-gui-components-basics" filename="right-bottom-background-text" />

:::::

## Indenting the code
When you call many configuration methods on a component, the line of code tends to become quite long, which can make it hard to read. In JavaScript, you can often insert line breaks to make the code span multiple lines instead, and the indentation (white-space characters, such as spaces and tabs) to the left of the code doesn't matter. Using indentation can make your code easier to read. Feel free to write the code the way you like the most!

::::: tip Example
Example showing different ways of writing code configuring a component.

:::: code-group
::: code-group-item Single line
```js
class TestPage extends Page{
	createGui(){
		return Text(`This text is shown to the user!`).right().background(`yellow`).bottom()
	}
}
```
:::
::: code-group-item Two lines
```js
class TestPage extends Page{
	createGui(){
		return Text(`This text is shown to the user!`)
				.right().background(`yellow`).bottom()
	}
}
```
:::
::: code-group-item Multiple lines
```js
class TestPage extends Page{
	createGui(){
		return Text(`This text is shown to the user!`)
				.right()
				.background(`yellow`)
				.bottom()
	}
}
```
:::
::: code-group-item Doesn't work
```js
class TestPage extends Page{
	createGui(){
		// Note that this won't work; the start of the value you return
		// must be written to the right of return (on the same line)!
		return
			Text(`This text is shown to the user!`)
				.right()
				.background(`yellow`)
				.bottom()
	}
}
```
:::
::: code-group-item Works
```js
class TestPage extends Page{
	createGui(){
		return ( // Add this extra parentheses...
			Text(`This text is shown to the user!`)
				.right()
				.background(`yellow`)
				.bottom()
		) // ...and this one too as a workaround.
	}
}
```
:::
::::
:::::




## That's it!
Now you know how to create and configure GUI components! 🥳 That wasn't that hard, was it? But much remains to learn. You have only seen examples of how to use the `Text` component and a few configuration methods you can call to configure it, but Bagatell contains many more components you can use, and many other configuration methods you can call. The hard part will be to learn which these components and configuration methods are, and how you can combine them do create more complex GUIs (most GUIs do not only consist of a single GUI component). In next tutorial you will be introduced some more of them.

Now you have seen examples of how the `Text` component works. Other GUI components works very similar, but they show other things to the user, and they can have other configuration methods you can call on them. An example of that is the `Button` component. It will show a button the user can click on, and you can use the configuration method `page()` to indicate which page the user should come to when clicking on the button.

::::: tip Example
Example of how to use the `Button` component

:::: code-group
::: code-group-item StartPage
@[code{18-22}](button.js)
:::
::: code-group-item TextPage
@[code{24-28}](button.js)
:::
::: code-group-item All Code
@[code js{18-22,24-28}](button.js)
:::
::::

<ShowApp tutorial="03-gui-components-basics" filename="button" />

:::::

The button in the example above didn't really looked like a button. That's because it covered the entire screen! Usually buttons are just big enough to surround the text they contain. You can make that happen by using layouts, which you will learn more about later.

So, now you know the basics of how to create and configure GUI components. In this tutorial we won't describe all the different view components you can use to build your GUI, just the basics of how to create and configure them. 