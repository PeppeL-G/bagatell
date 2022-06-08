# `Mouth`
On this page you find the documentation for the `Mouth` class.



## Introduction
The `Mouth` class represents the *mouth* of the `App`, and can be used to speak text to the user through the user's device's speakers. You can get a reference to an instance of it through `a.mouth`.

::: warning May not always work
The `Mouth` class relies on text-to-speech functionality provided by the user's web browser. Not all web browsers provide this functionality, so not all users will hear the text spoken through this class.
:::



## Making the mouth speak
By default, `Mouth` is disabled and won't speak anything. To make it speak the text in `<Text>` in the graphical user interface on all `Page`s, enable it by calling the `enable()` method on it.

::::: tip Example
:::: code-group
::: code-group-item App Code
@[code{11-21}](enabling.js)
:::
::: code-group-item All Code
@[code](enabling.js)
:::
::::

<ShowApp logic-class="mouth" filename="enabling" />

:::::



## Making the mouth quiet
If you want the `Mouth` to be quiet again after you have enabled it, disable it by calling the `disable()` method on it.

::::: tip Example
:::: code-group
::: code-group-item Page Code
@[code{28-41}](disabling.js)
:::
::: code-group-item All Code
@[code](disabling.js)
:::
::::

<ShowApp logic-class="mouth" filename="disabling" />

:::::



## Configuring the voice
Most web browsers support multiple different voices, often specialized in different languages. To get all voices the user's web browser supports, call the method `getVoices()`, which returns an array with voice objects looking like this:

```js
const voiceObject = {
	id: "A unique value identifying this voice",
	name: "The name of this voice",
	language: "The code of the language this voice is specialized in, e.g. en-US",
}
```

To make the `Mouth` use a specific voice, call the method `selectVoice(theVoiceObject)`.

How fast the `Mouth` speaks can be controlled through the *rate* property. Default rate is `1`, meaning normal speed. `0.5` means half the default speed, `2` means twice the default speed, etc. Call the method `getRate()` to get the current selected rate, and use `setRate(newRate)` to change the rate to a new value.

Which pitch the `Mouth` speaks with can be controlled through the *pitch* property. Default pitch is `1`, meaning normal pitch. `0.5` means half the default pitch, `2` means twice the default pitch, etc. Call the method `getPitch()` to get the current selected pitch, and use `setPitch(newPitch)` to change the pitch to a new value.

::::: tip Example
:::: code-group
::: code-group-item Page Code
@[code{21-48}](configuring.js)
:::
::: code-group-item All Code
@[code](configuring.js)
:::
::::

<ShowApp logic-class="mouth" filename="configuring" />

:::::