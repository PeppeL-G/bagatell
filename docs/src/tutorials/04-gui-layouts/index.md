# 4. GUI Layouts
This tutorial will teach you how to create more fancy GUIs by using multiple GUI components in your pages' GUIs.

## The root component
As you know, you should in the `Page` method `createGui()` use GUI components from Bagatell to create and send back the page's GUI. This method, as all methods, can only send back one value, and in this case that value should be a GUI component. That GUI component is know as the page's *root component*, and it will cover the entire screen. That it indeed does cover the entire screen is easy to verify by giving the component a background color.

::::: tip Example
Note below that the root component has no background color, and it's the application's default background color that we se.

:::: tabs
::: tab StartPage
<<< @/tutorials/04-gui-layouts/root-no-background.js#StartPage
:::
::: tab MyApp
<<< @/tutorials/04-gui-layouts/root-no-background.js#MyApp
:::
::::

<ShowApp tutorial="04-gui-layouts" filename="root-no-background" />

:::::

::::: tip Example
Note below that the application's default background color no longer is shown, hence the orange root component must cover the entire screen.

:::: tabs
::: tab StartPage
<<< @/tutorials/04-gui-layouts/root-orange-background.js#StartPage
:::
::: tab MyApp
<<< @/tutorials/04-gui-layouts/root-orange-background.js#MyApp
:::
::::

<ShowApp tutorial="04-gui-layouts" filename="root-orange-background" />

:::::




## Using multiple GUI components
*But if `createGui()` can send back only one GUI component, how can I use multiple GUI components?* There exists some GUI components whose sole purpose it to contain and position other GUI components on the screen. These GUI components are called *Layouts*, and the GUI components they contain are called *Children*. By using a layout, `createGui()` can send back only one GUI component (the layout), but that GUI component can in turn contain other GUI components. And when the layout is shown on the screen, it will position and show the GUI components it contains (its children) on the screen too. This way we can build a GUI consisting of multiple GUI components!

Let's go through some of the layouts we can use.

## The `Rows` component
The GUI component called `Rows` is a layout that position its children as rows (the first child at the top, the second child below that one, and so on). All children are as wide as the `Rows` component, and their height is by default just big enough to surround their content. The `Rows` component's main content should be the children it should contain (pass them as individual arguments to `Rows()` (arguments must be separated by `,`)).

::::: tip Example
Example of how to use the `Rows` components. All GUI components are given a background color, so one easily can see the space they occupy.

:::: tabs
::: tab StartPage
<<< @/tutorials/04-gui-layouts/rows-1.js#StartPage
:::
::: tab MyApp
<<< @/tutorials/04-gui-layouts/rows-1.js#MyApp
:::
::::

<ShowApp tutorial="04-gui-layouts" filename="rows-1" />

:::::

### Resizing children
By default, the children will just be tall enough to surround their content. By using the configuration method `size()` on a child, you can pass it a number indicating how many shares of the remaining available space in the `Rows` component the child should occupy.

::::: tip Example
Example of how to use the configuration method `size()` on a child in the `Rows` component to make the child taller.

:::: tabs
::: tab StartPage
<<< @/tutorials/04-gui-layouts/rows-size-1.js#StartPage
:::
::: tab MyApp
<<< @/tutorials/04-gui-layouts/rows-size-1.js#MyApp
:::
::::

<ShowApp tutorial="04-gui-layouts" filename="rows-size-1" />

:::::

::::: tip Example
Example of how to use the configuration method `size()` on two children in the `Rows` components to make them taller.

:::: tabs
::: tab StartPage
<<< @/tutorials/04-gui-layouts/rows-size-2.js#StartPage
:::
::: tab MyApp
<<< @/tutorials/04-gui-layouts/rows-size-2.js#MyApp
:::
::::

<ShowApp tutorial="04-gui-layouts" filename="rows-size-2" />

:::::


## The `Space` component
Often when you use a Layout, you want some children to just occupy some space to move the other children to the place you want them to be at. For example, instead of only using a `Text` component that covers the entire screen, you might want it to be as small as possible at the bottom of the screen. To achieve that, you can use the `Rows` component, and let its first child occupy all remaining space, and the second child (the `Text` component) to be as small as possible. Since the purpose of the first child is to just occupy some space, the `Space` component is the best choice to use for this.

Children in the `Rows` component are always just tall enough to surround their content, except if they have their `size` set to a number. The only exception to this is the `Space` component, who by default has its `size` set to `1`. That is, the two code pieces below are identical.

```js
Space
```
```js
Space.size(1)
```

The reason `Space` has its `size` set to `1` by default is because that's often how you want to use it, but if you want it to have another number, just pass it to `size()` as usual.

::::: tip Example
Example of how to use the `Space` component to push a `Text` component to the bottom of a `Rows` component.

:::: tabs
::: tab StartPage
<<< @/tutorials/04-gui-layouts/space-1.js#StartPage
:::
::: tab MyApp
<<< @/tutorials/04-gui-layouts/space-1.js#MyApp
:::
::::

<ShowApp tutorial="04-gui-layouts" filename="space-1" />

:::::

If you want to center the `Text` component vertically instead, simply add another `Space` component below it.

::::: tip Example
Example of how to use two `Space` components to vertically center a `Text` component in a `Rows` component.

:::: tabs
::: tab StartPage
<<< @/tutorials/04-gui-layouts/space-2.js#StartPage
:::
::: tab MyApp
<<< @/tutorials/04-gui-layouts/space-2.js#MyApp
:::
::::

<ShowApp tutorial="04-gui-layouts" filename="space-2" />

:::::




## The `Cols` component
The GUI Component `Cols` (short for **Col**umn**s**) works kind of the same way as the `Rows` component, but it positions its children as columns instead of rows. The children will always be as tall as the `Cols` component, and their width will by default be just wide enough to surround the content in the child. The configuration method `size()` can be used on the children to tell them how many shares of the remaining horizontal space they should occupy. And, just as for the `Rows` component, the `Space` component has a default `size` of `1`.

::::: tip Example
Example of how to use the `Cols` component.

:::: tabs
::: tab StartPage
<<< @/tutorials/04-gui-layouts/cols-1.js#StartPage
:::
::: tab MyApp
<<< @/tutorials/04-gui-layouts/cols-1.js#MyApp
:::
::::

<ShowApp tutorial="04-gui-layouts" filename="cols-1" />

:::::

::::: tip Example
Example of how to use the `Cols` component and the configuration method `size()` on some of its children.

:::: tabs
::: tab StartPage
<<< @/tutorials/04-gui-layouts/cols-size-1.js#StartPage
:::
::: tab MyApp
<<< @/tutorials/04-gui-layouts/cols-size-1.js#MyApp
:::
::::

<ShowApp tutorial="04-gui-layouts" filename="cols-size-1" />

:::::

::::: tip Example
Example of how to use the `Cols` component and `Space` component to move two `Text` components to the left respective right side.

:::: tabs
::: tab StartPage
<<< @/tutorials/04-gui-layouts/cols-size-2.js#StartPage
:::
::: tab MyApp
<<< @/tutorials/04-gui-layouts/cols-size-2.js#MyApp
:::
::::

<ShowApp tutorial="04-gui-layouts" filename="cols-size-2" />

:::::

## Combining Layouts
A page containing just rows or just columns is usually not that fun. By combining the `Rows` component and the `Cols` component (use one as a child to the other), you can create many different usable layouts.



::::: tip Example
Example of how to combine the `Rows` component and the `Cols` component to create a layout with a bottom navigation view (learn how to make it functional later).

:::: tabs
::: tab StartPage
<<< @/tutorials/04-gui-layouts/layout-bottom-navigation-view.js#StartPage
:::
::: tab MyApp
<<< @/tutorials/04-gui-layouts/layout-bottom-navigation-view.js#MyApp
:::
::::

<ShowApp tutorial="04-gui-layouts" filename="layout-bottom-navigation-view" />

:::::


::::: tip Example
Example of how to combine the `Rows` component and the `Cols` component to create a form.

:::: tabs
::: tab StartPage
<<< @/tutorials/04-gui-layouts/layout-form.js#StartPage
:::
::: tab MyApp
<<< @/tutorials/04-gui-layouts/layout-form.js#MyApp
:::
::::

<ShowApp tutorial="04-gui-layouts" filename="layout-form" />

:::::


## That's it!
Good work, now you have learned the basics about using layouts and building more fancy GUIs! 🥳 It takes some practice before you're good at seeing GUIs as rows and columns, but you actually don't need more than this to create a wide variety of layouts. Just look at your web browser; all GUI components in it are arranged as rows and columns!

To be continued! 😅 Hang in there!