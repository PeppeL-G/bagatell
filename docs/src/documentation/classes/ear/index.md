# `Ear`
On this page you find the documentation for the `Ear` class.



## Introduction
The `Ear` class represents the *Ear* of the `App`, and can be used to let the user communicate with the app by speaking instead of:

* clicking on `Button`s in the graphical user interface
* typing the keys on the keyboard to enter text in `EnterNumber`, `EnterText`, etc.
* etc.

You can get a reference to an instance of `Ear` through `a.ear`.

::: warning May not always work
The `Ear` class relies on speech recognition functionality provided by the user's web browser. Not all web browsers provide this functionality, so not all users will be able to speak with the app through this class.
:::



## Making the Ear listen
By default, `Ear` is disabled and won't listen for anything. To make it listen, enable it by calling the `enable()` method on it.

::::: tip Example
:::: tabs
::: tab App Code
@[code{36-52}](enabling.js)
:::
::: tab All Code
@[code](enabling.js)
:::
::::

<ShowApp logic-class="ear" filename="enabling" />

:::::



## Stop listening
If you want the `Ear` to stop listening for what the user says after you have enabled it, disable it by calling the `disable()` method on it.

::::: tip Example
:::: tabs
::: tab Page Code
@[code{28-41}](disabling.js)
:::
::: tab All Code
@[code](disabling.js)
:::
::::

<ShowApp logic-class="ear" filename="disabling" />

:::::
