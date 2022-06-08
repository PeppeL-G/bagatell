# `Cols`
On this page you find the documentation for the GUI Component `Cols`.



## Introduction
The `Cols` component is a layout that positions its children as columns (the first child is to the left, to the right of that one is the second child, to the right of that one is the third child, etc.). The children are always as tall as the `Cols` component. Their width is, by default, just big enough to surround their content (the `Space` component is the only exception to this, read more about that later).

::::: tip Example
:::: code-group
::: code-group-item GUI Code
@[code{21-25}](introduction.js)
:::
::: code-group-item All Code
@[code js{21-25}](introduction.js)
:::
::::

<ShowApp gui-component="cols" filename="introduction" />

:::::

You pass the `Cols` component its children as its main content.






## Handling overflow
If the width of all children together is greater than the width of the `Cols` component, a horizontal scrollbar will be added to the `Cols` component, so the user can scroll the children. Try resizing the screen for the app in the example below to see how it works. In other words: to handle overflow, you don't need to do anything, since a scrollbar will be added automatically when needed.

::::: tip Example
:::: code-group
::: code-group-item GUI Code
@[code{21-31}](scroll.js)
:::
::: code-group-item All Code
@[code js{21-31}](scroll.js)
:::
::::

<ShowApp gui-component="cols" filename="scroll" />

:::::


## Resizing children
By default, all children (except `Space`) are wide enough to just surround their content. You can use the configuration method `size()` on the children to control how the remaining horizontal space should be distributed among them to make them even wider. The number you pass to it indicates how many shares of the available horizontal space the child should occupy:

* `0`: the child is just wide enough to surround its content (default value for all children except `Space`)
* `1`: the child will be wide enough to surround its content, but if there is more space available, it will also occupy 1 share of that space (default value for `Space` children)
* `2`: the child will be wide enough to surround its content, but if there is more space available, it will also occupy 2 shares of that space
* Etc.

The reason the `Space` component has a default size of `1` is because that's usually how you want to use it.

::::: tip Example
:::: code-group
::: code-group-item GUI Code
@[code{21-25}](size.js)
:::
::: code-group-item All Code
@[code js{21-25}](size.js)
:::
::::

<ShowApp gui-component="cols" filename="size" />

:::::




## Positioning children
If the width of all children together is smaller than the width of the `Cols` component, the children will, by default, be positioned to the left. If you want them to be positioned elsewhere you can insert extra `Space` children.

::::: tip Example
:::: code-group
::: code-group-item GUI Code
@[code{21-25}](position-left.js)
:::
::: code-group-item All Code
@[code js{21-25}](position-left.js)
:::
::::

<ShowApp gui-component="cols" filename="position-left" />

:::::

::::: tip Example
:::: code-group
::: code-group-item GUI Code
@[code{22-28}](position-middle.js)
:::
::: code-group-item All Code
@[code js{22-28}](position-middle.js)
:::
::::

<ShowApp gui-component="cols" filename="position-middle" />

:::::

::::: tip Example
:::: code-group
::: code-group-item GUI Code
@[code{22-27}](position-right.js)
:::
::: code-group-item All Code
@[code js{22-27}](position-right.js)
:::
::::

<ShowApp gui-component="cols" filename="position-right" />

:::::

::::: tip Example
:::: code-group
::: code-group-item GUI Code
@[code{22-26}](position-left-right.js)
:::
::: code-group-item All Code
@[code js{22-26}](position-left-right.js)
:::
::::

<ShowApp gui-component="cols" filename="position-left-right" />

:::::