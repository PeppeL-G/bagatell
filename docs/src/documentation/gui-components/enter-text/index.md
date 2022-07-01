# `EnterText`
On this page you find the documentation for the GUI Component `EnterText`.

## Introduction
The `EnterText` component is a view in which the user can enter some text.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-text/introduction.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-text/introduction.js#MyApp
:::
::::

<ShowApp gui-component="enter-text" filename="introduction" />

:::::

The user can go to the next page in the app by pressing the enter key (`↵`) in the `EnterText` component.

::: warning Smaller input field
In some of these examples, the GUI consists of only the `EnterText` component, making it cover the entire page. Put the `EnterText` component in a layout to make it smaller.
:::

::::: tip Submit button
A `Button` can be added to the GUI to serve as a submit button (takes the user to the next `Page` when clicked, the same as pressing the enter key in `EnterText`), for example:

:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-text/submit-button.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-text/submit-button.js#MyApp
:::
::::

<ShowApp gui-component="enter-text" filename="submit-button" />

:::::



## Adding an initial text
The text passed as the main content to `EnterText` will be used as the initial text in the component.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-text/initial-text.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-text/initial-text.js#MyApp
:::
::::

<ShowApp gui-component="enter-text" filename="initial-text" />

:::::




## Adding a placeholder text
The configuration method `placeholder()` can be used to show a text in `EnterText` when it's empty. Try typing some text in the example below, and see that the placeholder text disappears.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-text/placeholder.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-text/placeholder.js#MyApp
:::
::::

<ShowApp gui-component="enter-text" filename="placeholder" />

:::::





## Adding `Direction`s
Use configuration method `pages()` to specify which `Page`s the user should come to depending on what text she enters. The value should be an object, where the key represents the text the user can enter, and the value for each key indicate which `Page` the user should come to if that text has been entered.

Use the configuration method `page()` to specify which `Page` the user should come to if none of the keys in `pages()` matches what the user has entered.

::::: tip Example
```js
EnterText
	.placeholder(`Enter name`)
	.page(UglyNamePage)
	.pages({
		Peter: NiceNamePage,
		Lily: () => new BeautifulNamePage(),
	}
```
:::::




## Handling entered text
If you want to store what the user has entered in `EnterText` in the current `Page`, you can use the configuration method `pVar()` to indicate the name of the variable in the current `Page` that should be used.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-text/p-var.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-text/p-var.js#MyApp
:::
::::

<ShowApp gui-component="enter-text" filename="p-var" />

:::::

In the example above, what the user has entered will be stored in `p.city`.

If you instead want to store it in the `App`, use the configuration method `aVar()` in the same way.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-text/a-var.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-text/a-var.js#MyApp
:::
::::

<ShowApp gui-component="enter-text" filename="a-var" />

:::::

In the example above, what the user has entered will be stored in `a.city`.

If you want to do something more complicated than just storing the text the user has entered, use the configuration method `handler()` to specify a function that will be called to handle the text the user has entered. In the example below, try entering some text, and then press the enter key.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-text/handler.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-text/handler.js#MyApp
:::
::::

<ShowApp gui-component="enter-text" filename="handler" />

:::::