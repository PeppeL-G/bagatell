# `Layers`
On this page you find the documentation for the GUI Component `Layers`.



## Introduction
The `Layers` component is a layout that stacks its children above each other as layers (the first child is the bottom layer, then the second child is the layer on top of that one, and so on). The children are always as wide and tall as `Layers`. 

::::: tip Example
:::: code-group
::: code-group-item GUI Code
@[code{22-27}](introduction.js)
:::
::: code-group-item All Code
@[code js{22-27}](introduction.js)
:::
::::

<ShowApp gui-component="layers" filename="introduction" />

:::::

You pass the children to the `Layers` component as its main content.