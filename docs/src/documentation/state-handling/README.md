# State Handling
On this page you find information on how to handle the state of your app.

## Introduction
You can add instance variables to your `App` and `Page` classes to store the state of the app (instance variables in `Page` exists until the user leaves that `Page` for another `Page`). By storing the entire state of your app in only these instance variables, it's easy for the framework to provide functionality to extract the state from your app, then you can store that state somewhere (for example in a file), and then you can recreate the app with that state. This way, users can:

1. Start using your app, and change your app's state
2. Stop using your app because they want to do something else for a few days, at which point the state of your app is saved somewhere, for example in a file
3. Start using your app again, at which point it's re-created with the state that you saved before, so the user picks it up right where she left it

## Valid values
Bagatell supports extracting the state of the app as long as it consists of JSON-valid values. Check out the simple example below to learn which the valid values are, or [json.org](https://www.json.org) if you want to get the complete picture.

```js
const validInstanceVariableValuesExample = {
	integersAreOk: 123,
	floatsAreOk: -123.456,
	booleansAreOk: true,
	stringsAreOk: "Of course!",
	nullIsOk: null,
	arraysAreOk: ["Yes", "they", "are"],
	objectsAreOk: {isValid: true},
}

const NOT_validInstanceVariableValuesExample = {
	functionsAreNotOk: () => "This is bad :(",
	instancesOfClassesAreNotOK: new Date()
}
```




## Workarounds
Here are examples of workarounds to the limitation of only storing JSON-supported values in the state.


### Example 1
Instead of storing a selected object like this:

```js
import { App } from '@bagatell/core'

class MyApp extends App{
	
	onBefore(){
		
		a.humans = [
			{name: "Alice"},
			{name: "Bob"},
		]
		a.selectedHuman = a.humans[0]
		
		// a.selectedHuman == a.humans[0] is true now, but will be
		// false when the app is re-created from a previous state.
		
	}
	
}
```

Store the selected index of the object, like this:

```js
import { App } from '@bagatell/core'

class MyApp extends App{
	
	onBefore(){
		
		a.humans = [
			{name: "Alice"},
			{name: "Bob"},
		]
		a.selectedHumanIndex = 0
		
		// a.humans[a.selectedHumanIndex] == a.humans[0] is true now,
		// but also when the app is re-created from a previous state.
		
	}
	
}
```



### Example 2
Instead of storing a selected function like this:

```js
import { App } from '@bagatell/core'

class MyApp extends App{
	
	onBefore(){
		
		a.operations = {
			add: (a, b) => a + b,
			sub: (a, b) => a - b,
		}
		a.selectedOperation = a.operations['add']
		
		// The functions will work now, but won't be
		// re-created later.
		
	}
	
}
```

You can add static functions directly in instance variables, and store the name of the function in an instance variable:

```js
import { App } from '@bagatell/core'

class MyApp extends App{
	
	operations = {
		add: (a, b) => a + b,
		sub: (a, b) => a - b,
	}
	
	onBefore(){
		
		a.selectedOperationName = 'add'
		
		// a.operations[a.selectedOperationName] works both now
		// and when the app is re-created with a previous state.
		
	}
	
}
```
