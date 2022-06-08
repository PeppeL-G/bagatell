# `Direction`
On this page you find the documentation for the `Direction` class.

## Introduction
The `Direction` class can be used in `Page`, and represents a direction from that `Page` to another `Page`. It consists of the following parts:

* `page`: A value indicating which `Page` the `Direction` leads to
* `condition`: A function indicating under which circumstance the `Direction` should be used
* `description`: A text describing the condition in the `Direction` (used for documentation only)

All parts are specified when creating the instance of the `Direction`, as show below.

```js
import { Direction } from '@bagatell/core'

const myDirection = new Direction(
	PageToStart, // The page to come to.
	() => Math.random() < 0.5, // Condition for using this direction (i.e. when returning true).
	"Fifty-fifty" // Optional description of the condition.
)
```

## Creating a `Direction`
To create a new `Direction`, pass the constructor:

1. A value indicating which `Page` the `Direction` leads to, such as:
	* `MyPage` (a reference to the `Page` class)
	* `() => new MyPage()` (a function returning the `Page` instance)
2. A function (the condition) returning `true` when the `Direction` should be used, such as:
	* `() => Math.random() < 0.5`
3. An optional string describing when the condition returns `true`, such as:
	* `"Fifty-fifty"`

```js
import { Direction } from '@bagatell/core'

const myDirection = new Direction(
	/* 1 */ GoodNightPage,
	/* 2 */ () => 20 < new Date().getHours(),
	/* 3 */ "Time to sleep"
)
```