# `Image`
On this page you find the documentation for the GUI Component `Image`.

## Introduction
The `Image` component is a view that shows an image to the user. Pass the URL to the image (must be available online using the HTTP or HTTPS protocol) as the component's main content.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/image/introduction.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/image/introduction.js#MyApp
:::
::::

<ShowApp gui-component="image" filename="introduction" />

:::::





## Resizing the image
The `Image` will occupy the space given to it by the layout it's in (or the entire screen if the `Image` is the root component). If you want to make the `Image` smaller within that space, add padding to it.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/image/resize.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/image/resize.js#MyApp
:::
::::

<ShowApp gui-component="image" filename="resize" />

:::::