# `Button`
On this page you find the documentation for the GUI Component `Button`.





## Introduction
The `Button` component is a view that displays some text to the user shown as a button, and which the user can click on. The text passed as the main content to the `Button` will be shown in the `Button`.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/button/introduction.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/button/introduction.js#MyApp
:::
::::

<ShowApp gui-component="button" filename="introduction" />

:::::

The text is always centered both vertically and horizontally in the `Button`.

Clicking on the `Button` takes the user to the next page in the app.

::: warning Smaller button
In some of these examples, the GUI consists of only the `Button`, making it cover the entire page. Put the `Button` in a layout to make it smaller.
:::



## Adding `Direction`
To indicate which `Page` the user should come to when clicking on the `Button`, use the configuration method `page()`:

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/button/page.js#StartPage
:::
::: tab DestinationPage
<<< @/documentation/gui-components/button/page.js#DestinationPage
:::
::: tab MyApp
<<< @/documentation/gui-components/button/page.js#MyApp
:::
::::

<ShowApp gui-component="button" filename="page" />

:::::

The value you pass to `page()` can be the same type of value you pass as the `page` argument in the [Direction](../../logic/classes/direction/) constructor. It's typically the name of the `Page` class the user should come to.




## Handling clicks
Use the configuration method `handler()` to specify a function that should be called when the user clicks on the `Button`.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/button/handler.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/button/handler.js#MyApp
:::
::::

<ShowApp gui-component="button" filename="handler" />

:::::