# `Slider`
On this page you find the documentation for the GUI Component `Slider`.

## Introduction
The `Slider` component is a view in which the user can select a number in an interval. The configuration methods `min()` and `max()` specifies the interval.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/slider/introduction.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/slider/introduction.js#MyApp
:::
::::

<ShowApp gui-component="slider" filename="introduction" />

:::::




## Setting the initial number
By default, the initial number will be the one between the minimum and maximum number. If you want to use another one, pass that number as the main content to the `Slider`.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/slider/initial-number.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/slider/initial-number.js#MyApp
:::
::::

<ShowApp gui-component="slider" filename="initial-number" />

:::::




## Setting the step
By default, the user can only select integer numbers between the minimum and maximum number. Use the configuration method `step()` to change the default step from `1` to another number.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/slider/step.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/slider/step.js#MyApp
:::
::::

<ShowApp gui-component="slider" filename="step" />

:::::




## Adding `Direction`s
Use the configuration method `pages()` to specify which `Page` the user should come to depending on which number she selects. The value should be an object, where the keys represent intervals of numbers the user can select, and the corresponding values indicates which `Page` the user should come to if the user selects a number within that interval.

The intervals can be expressed as strings the following ways:

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

Use the configuration method `page()` to specify which `Page` the user should come to if none of the intervals in `pages()` matches the number the user selects.

::::: tip Example
```js
Slider
	.min(0)
	.max(150)
	.page(ChildPage)
	.pages({
		'18_100E': AdultPage,
		'100_X': DeadPage,
	})
```
:::::




## Handling selected number
If you want to store the number the user has selected in `Slider` in the current `Page`, you can use the configuration method `pVar()` to indicate the name of the variable in the current `Page` to store the number in.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/slider/p-var.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/slider/p-var.js#MyApp
:::
::::

<ShowApp gui-component="slider" filename="p-var" />

:::::

In the example above, the number the user has selected will be stored in `p.iq`.

If you instead want to store it in the `App`, use the configuration method `aVar()` in the same way.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/slider/a-var.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/slider/a-var.js#MyApp
:::
::::

<ShowApp gui-component="slider" filename="a-var" />

:::::

In the example above, the number the user has selected will be stored in `a.iq`.

If you want to do something more complicated than just storing the number the user has selected, use the configuration method `handler()` to specify a function that will be called to handle the number the user has selected. In the example below, try selecting a number, and then click the `Button`.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/slider/handler.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/slider/handler.js#MyApp
:::
::::

<ShowApp gui-component="slider" filename="handler" />

:::::