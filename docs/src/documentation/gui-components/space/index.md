# `Space`
On this page you find the documentation for the GUI Component `Space`.

## Introduction
The `Space` component is a layout that can contain one optional child. If a child is provided, the child will occupy the same space as the `Space` component (with the exception of the padding added to the `Space` component).

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/space/introduction.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/space/introduction.js#MyApp
:::
::::

<ShowApp gui-component="space" filename="introduction" />

:::::

You pass the child to the `Space` component as its main content.

::: tip Common usage
A common usage of the `Space` component is to just occupy space, so other children in a layout are positioned as desired (see examples in the documentation for the [`Cols`](../cols/) and [`Rows`](../rows/) components).
:::