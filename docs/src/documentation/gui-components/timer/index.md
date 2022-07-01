# `Timer`
On this page you find the documentation for the GUI Component `Timer`.





## Introduction
The `Timer` component is a view that functions as a timer: you specify what time should be used, and then the `Timer` will count down to `0` in real time, after which it will take the user to the next page.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/timer/introduction.js#StartPage
:::
::: tab MyApp
<<< @/documentation/gui-components/timer/introduction.js#MyApp
:::
::::

<ShowApp gui-component="timer" filename="introduction" />

:::::




## Setting the time
You can use a combination of the following configuration methods to specify how long time the `Timer` should run before taking the user to next page:

* `milliseconds()`
* `seconds()`
* `minutes()`
* `hours()`

For example, `Timer.minutes(3).seconds(90)` would make the `Timer` run for 4 minutes and 30 seconds.

Instead of using the mentioned configuration methods to specify the time, you can pass it a Unix timestamp as its main content. A Unix timestamp is a number of milliseconds that has elapsed since the start of 1970, and the `Timer` will count down until the Unix timestamp it received occurs. In JavaScript, `Date.now()` returns the current Unix timestamp.

For example, `Timer(Date.now() + 10*1000)` would have the same meaning as `Timer.seconds(10)`. The latter is of course better to use in this example, but for advanced apps it can be more convenient to work with Unix timestamps.




## Adding `Direction`
To indicate which `Page` the user should come to when the `Timer` times out, use the configuration method `page()`:

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/timer/page.js#StartPage
:::
::: tab TimerPage
<<< @/documentation/gui-components/timer/page.js#TimerPage
:::
::: tab MyApp
<<< @/documentation/gui-components/timer/page.js#MyApp
:::
::::

<ShowApp gui-component="timer" filename="page" />

:::::

The `page()` configuration method accepts the same type of values as the `page` parameter in the [Direction](../../logic/classes/direction/) constructor.





## Handling timeouts
Use the configuration methods `handler()` to specify a function that should be called when the timer times out.

::::: tip Example
:::: tabs
::: tab StartPage
<<< @/documentation/gui-components/timer/handler.js#StartPage
:::
::: tab TimerPage
<<< @/documentation/gui-components/timer/handler.js#TimerPage
:::
::: tab MyApp
<<< @/documentation/gui-components/timer/handler.js#MyApp
:::
::::

<ShowApp gui-component="timer" filename="handler" />

:::::