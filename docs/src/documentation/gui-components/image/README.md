# `Image`
On this page you find the documentation for the GUI Component `Image`.

## Introduction
The `Image` component is a view that shows an image to the user. Pass the URL to the image (must be available online using the HTTP or HTTPS protocol) as the component's main content.

::::: tip Example
:::: code-group
::: code-group-item GUI Code
@[code{20-20}](introduction.js)
:::
::: code-group-item All Code
@[code js{20-20}](introduction.js)
:::
::::

<ShowApp gui-component="image" filename="introduction" />

:::::





## Resizing the image
The `Image` will occupy the space given to it by the layout it's in (or the entire screen if the `Image` is the root component). If you want to make the `Image` smaller within that space, add padding to it.

::::: tip Example
:::: code-group
::: code-group-item GUI Code
@[code{20-22}](resize.js)
:::
::: code-group-item All Code
@[code js{20-22}](resize.js)
:::
::::

<ShowApp gui-component="image" filename="resize" />

:::::