# Introduction
On these pages you find documentation for the graphical user interface (GUI) classes (called *GUI Components*) found in the npm package `@bagatell/core`.

## Introduction
Each `Page` specifies it's own GUI in the method `createGui()`:

```js
class StartPage extends Page{
	createGui(){
		// Create and return the GUI for this page here!
	}
}
```

To create the GUI, you can use the GUI Components documented on these pages. They are implemented as classes in JS, but with a [JSX](https://reactjs.org/docs/introducing-jsx.html) compiler you can instead specify the GUI in JSX. That will make the code much easier to read and write.



## Layouts VS Views
There exists two type of GUI Components:

* *Layouts* can contain other GUI Components (called children), and they are used to position the children they contain. Examples:
	* `<Rows>` positions its children as rows (the first child above the second child, and so on)
	* `<Cols>` positions its children as columns (the first child to the left of the second child, and so on)
* *Views* are GUI Components the user can see, and sometime also interact with, such as
	* `<Text>` displays text
	* `<Button>` displays text looking like a button the user can click on

See the sidebar menu for a list of all GUI components.



## Global Attributes
There are some props that can be used on all GUI Components. Those are documented on the page [Global Attributes](./global-props/).