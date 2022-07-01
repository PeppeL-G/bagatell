# `Direction`
On this page you find the documentation for the `Direction` class.

## Introduction
The `Direction` class represents a transition from one `Page` to another `Page`. It consists of the following parts:

* `page`: A value indicating which `Page` the user should come to
* `condition`: A function indicating under which circumstance the `Direction` should be used
* `description`: A text describing the condition in the `Direction` (used for documentation only)

A `Page` usually contains multiple `Direction`s, and when the user has interacted with the `Page` (for example clicked on a `Button`), the first `Direction` in the `Page` whose `condition` returns back `true` will be used to transition to the `page` in that `Direction`.

## Creating a `Direction`
All parts a `Direction` consists of are specified when creating the instance of the `Direction`. To create a new `Direction`, pass the constructor the parts:

1. A value indicating which `Page` the `Direction` leads to, such as:
	* `MyPage` (a reference to the `Page` class)
	* `new MyPage()` (an instance of the `Page` class)
	* `() => new MyPage()` (a function returning the `Page` instance)
2. A function (the condition) returning `true` when the `Direction` should be used, such as:
	* `() => Math.random() < 0.5`
3. An optional string describing when the condition returns `true`, such as:
	* `"Fifty-fifty"`

::: tip Example
Example showing how to create a new `Direction`.

```js
const myDirection = new Direction(
	GoodNightPage,
	() => 20 < new Date().getHours(),
	"Time to sleep",
)
```

The direction can then be added to a `Page` using for example [Page.createAfterDirections()](../page/#creating-after-directions).
:::