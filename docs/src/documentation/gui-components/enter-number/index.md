# `EnterNumber`
On this page you find the documentation for the GUI Component `EnterNumber`.

## Introduction
The `EnterNumber` component is a view in which the user can enter a number.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-number/introduction.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-number/introduction.js#MyApp
:::
::::

<ShowApp gui-component="enter-number" filename="introduction" />

:::::

The user can go to the next page in the app by pressing the enter key (`↵`) in the `EnterNumber` component.

::: warning Smaller input field
In some of these examples, the GUI consists of only the `EnterNumber` component, making it cover the entire page. Put the `EnterNumber` component in a layout to make it smaller.
:::

::::: tip Submit button
A `Button` can be added to the GUI to serve as a submit button (takes the user to the next page when clicked, the same as pressing the enter key in `EnterNumber`), for example:

:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-number/submit-button.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-number/submit-button.js#MyApp
:::
::::

<ShowApp gui-component="enter-number" filename="submit-button" />

:::::



## Adding an initial number
The number passed as the main content to `EnterNumber` will be used as the initial number in the component.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-number/initial-number.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-number/initial-number.js#MyApp
:::
::::

<ShowApp gui-component="enter-number" filename="initial-number" />

:::::




## Adding a placeholder text
The configuration method `placeholder()` can be used to show a text in the `EnterNumber` component when it's empty. Try typing a number in the example below, and see that the placeholder text disappears.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-number/placeholder.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-number/placeholder.js#MyApp
:::
::::

<ShowApp gui-component="enter-number" filename="placeholder" />

:::::




## Adding `Direction`s
Use the `pages` attribute to specify which `Page` the user should come to depending on which number she enters. The value should be an object, where the keys represent intervals of numbers the user can enter, and the corresponding values indicates which `Page` the user should come to if the user enters a number within that interval. The intervals can be expressed as strings the following ways:

* A single number, for example:
	* `'18'`: The interval `18` to `18` (matches only `18`)
* A minimum number and a maximum number separated by `_`, for example:
	* `'0_18'`: The interval `0` to `18` (matches all numbers between `0` and `18` (inclusive `0` and `18`))

When the interval consists of two numbers, one of them can be `X`. If the first number is `X`, that means no lower limit exists (i.e. `X` = `-∞`), and if the second number is `X`, that means no upper limit exists (i.e. `X` = `∞`). Examples:

* `'X_10'`: The interval `-∞` to `10` (inclusive `10`)
* `'23_X'`: The interval `23` to `∞` (inclusive `23`)

When the interval consists of two numbers, you can also add `E` (short for **E**xclusive) after the numbers to exclude them from the interval. Examples:

* `'10_20'`: The interval `10` to `20` (inclusive `10`, inclusive `20`)
* `'10E_20'`: The interval `10` to `20` (exclusive `10`, inclusive `20`)
* `'10_20E'`: The interval `10` to `20` (inclusive `10`, exclusive `20`)
* `'10E_20E'`: The interval `10` to `20` (exclusive `10`, exclusive `20`)
* `'10E_X'`: The interval `10` to `∞` (exclusive `10`)

Use the configuration method `page()` to specify which `Page` the user should come to if none of the intervals in `pages()` matches the number the user has entered.

::::: tip Example
```js
EnterNumber
	.placeholder(`Enter your age in years`)
	.page(NegativeAgePage)
	.pages({
		'0_18E': ChildPage,
		'18_100E': AdultPage,
		'100_X': DeadPage,
	})
```
:::::




## Handling entered number
If you want to store what the user has entered in `EnterNumber` in the current `Page`, you can use the configuration method `pVar()` to indicate the name of the variable in the current `Page` that should be used.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-number/p-var.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-number/p-var.js#MyApp
:::
::::

<ShowApp gui-component="enter-number" filename="p-var" />

:::::

In the example above, what the user has entered will be stored in `p.iq`.

If you instead want to store it in the `App`, use the configuration method `aVar()` in the same way.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-number/a-var.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-number/a-var.js#MyApp
:::
::::

<ShowApp gui-component="enter-number" filename="a-var" />

:::::

In the example above, what the user has entered will be stored in `a.iq`.

If you want to do something more complicated than just storing the number the user has entered, use the configuration method `handler()` to specify a function that will be called to handle the number the user has entered. In the example below, try entering a number, and then press the enter key.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/enter-number/handler.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/enter-number/handler.js#MyApp
:::
::::

<ShowApp gui-component="enter-number" filename="handler" />

:::::