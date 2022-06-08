# `Space`
On this page you find the documentation for the GUI Component `Space`.

## Introduction
The `Space` component is a layout that can contain one optional child. If a child is provided, the child will occupy the same space as the `Space` component (with the exception of the padding added to the `Space` component).

::::: tip Example
:::: code-group
::: code-group-item GUI Code
@[code{21-23}](introduction.js)
:::
::: code-group-item All Code
@[code js{21-23}](introduction.js)
:::
::::

<ShowApp gui-component="space" filename="introduction" />

:::::

You pass the child to the `Space` component as its main content.

::: tip Common usage
A common usage of the `Space` component is to just occupy space, so other children in a layout are positioned as desired (see examples in the documentation for the [`Cols`](../cols/) and [`Rows`](../rows/) components).
:::