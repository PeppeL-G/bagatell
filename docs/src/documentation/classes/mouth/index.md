# `Mouth`
On this page you find the documentation for the `Mouth` class.



## Introduction
The `Mouth` class represents the *mouth* of the `App`, and can be used to speak text to the user through the user's device's speakers. You can get a reference to an instance of it through `a.mouth`.

::: warning May not always work
The `Mouth` class relies on text-to-speech functionality provided by the user's web browser. Not all web browsers provide this functionality, so not all users will hear the text spoken through this class.
:::



## Making the mouth speak
By default, `Mouth` is disabled and won't speak anything. To make it speak the text in the [Text](../../gui-components/text/) component in the graphical user interface on all `Page`s, enable it by calling the `enable()` method on it.

::::: tip Example
Example showing how to enable the `Mouth` in an app.

:::: tabs
::: tab MyApp
<<< @/documentation/classes/mouth/enabling.js#MyApp
:::
::: tab StartPage
<<< @/documentation/classes/mouth/enabling.js#StartPage
:::
::: tab TextPage
<<< @/documentation/classes/mouth/enabling.js#TextPage
:::
::::

<ShowApp logic-class="mouth" filename="enabling" />

:::::



## Making the mouth quiet
If you want the `Mouth` to be quiet again after you have enabled it, disable it by calling the `disable()` method on it.

::::: tip Example
Example showing how to enable and disable the `Mouth`.

:::: tabs
::: tab MyApp
<<< @/documentation/classes/mouth/disabling.js#MyApp
:::
::: tab QuietPage
<<< @/documentation/classes/mouth/disabling.js#QuietPage
:::
::: tab SpeakingPage
<<< @/documentation/classes/mouth/disabling.js#SpeakingPage
:::
::::

<ShowApp logic-class="mouth" filename="disabling" />

:::::



## Configuring the voice
The voice speaking can be configured in different ways.

### Changing the voice
Most web browsers support multiple different voices, often specialized in different languages. To get all voices the user's web browser supports, call the method `getVoices()`, which returns an array with voice objects looking like this:

```js
const voiceObject = {
	id: "A unique value identifying this voice",
	name: "The name of this voice",
	language: "The code of the language this voice is specialized in, e.g. en-US",
}
```

To make the `Mouth` use a specific voice, call the method `selectVoice(theVoiceObject)`.

### Changing the rate
How fast the `Mouth` speaks can be controlled through the *rate* property. Default rate is `1`, meaning normal speed. `0.5` means half the default speed, `2` means twice the default speed, etc. Call the method `getRate()` to get the current selected rate, and use the method `setRate(newRate)` to change the rate to a new value.

### Changing the pitch
Which pitch the `Mouth` speaks with can be controlled through the *pitch* property. Default pitch is `1`, meaning normal pitch. `0.5` means half the default pitch, `2` means twice the default pitch, etc. Call the method `getPitch()` to get the current selected pitch, and use `setPitch(newPitch)` to change the pitch to a new value.

::::: tip Example
Example of how to configure the voice.

:::: tabs
::: tab MyApp
<<< @/documentation/classes/mouth/configuring.js#MyApp
:::
::: tab ConfigureVoicePage
<<< @/documentation/classes/mouth/configuring.js#ConfigureVoicePage
:::
::: tab TestVoicePage
<<< @/documentation/classes/mouth/configuring.js#TestVoicePage
:::
::::

<ShowApp logic-class="mouth" filename="configuring" />

:::::