# `Rows`
On this page you find the documentation for the GUI Component `Rows`.



## Introduction
The `Rows` component is a layout that positions its children as rows (the first is at the top, the second is below the first, the third is below the second, and so on). The children are always as wide as `Rows`. Their height is, by default, just big enough to surround their content (the `Space` component is the only exception to this, read more about that later).

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/rows/introduction.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/rows/introduction.js#MyApp
:::
::::

<ShowApp gui-component="rows" filename="introduction" />

:::::

You pass the children to the `Rows` component as its main content.





## Handling overflow
If the height of all children together is greater than the height of the `Rows` component, a vertical scrollbar will be added to the `Rows` component, so the user can scroll the children. Try resizing the screen for the app in the example below to see how it works. In other words: to handle overflow, you don't need to do anything, since a scrollbar will be added automatically when needed.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/rows/scroll.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/rows/scroll.js#MyApp
:::
::::

<ShowApp gui-component="rows" filename="scroll" />

:::::


## Resizing children
By default, all children (except `Space`) are tall enough to just surround their content. You can use the configuration method `size()` on the children to control how the remaining horizontal space should be distributed among them to make them even taller. The number you pass to the child indicates how many shares of the available vertical space the child should occupy:

* `0`: the child is just tall enough to surround its content (default value for all children except `Space`)
* `1`: the child will be tall enough to surround its content, but if there is more space available, it will also occupy 1 share of that space (default value for `Space` children)
* `2`: the child will be tall enough to surround its content, but if there is more space available, it will also occupy 2 shares of that space
* Etc.

The reason the `Space` component has a default size of `1` is because that's usually how you want to use it.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/rows/size.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/rows/size.js#MyApp
:::
::::

<ShowApp gui-component="rows" filename="size" />

:::::




## Positioning children
If the height of all children together is smaller than the height of the `Rows` component, the children will, by default, be positioned at the top. If you want them to be positioned elsewhere you can insert extra `Space` children.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/rows/position-top.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/rows/position-top.js#MyApp
:::
::::

<ShowApp gui-component="rows" filename="position-top" />

:::::

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/rows/position-middle.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/rows/position-middle.js#MyApp
:::
::::

<ShowApp gui-component="rows" filename="position-middle" />

:::::

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/rows/position-bottom.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/rows/position-bottom.js#MyApp
:::
::::

<ShowApp gui-component="rows" filename="position-bottom" />

:::::

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/rows/position-top-bottom.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/rows/position-top-bottom.js#MyApp
:::
::::

<ShowApp gui-component="rows" filename="position-top-bottom" />

:::::