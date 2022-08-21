import {settings} from '../../settings.js'
import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'

const ParentElement = (
	typeof HTMLButtonElement == 'undefined' ?
	Function :
	HTMLButtonElement
)

export default class ButtonElement extends ParentElement{
	
	static tagName = settings.namespace+"button"
	
	constructor() {
		super()
		
		this.style.display = 'block'
		this.style.height = '100%'
		this.style.width = "100%"
		
		this.addEventListener(
			'click',
			this.onButtonClicked.bind(this),
		)
		
	}
	
	setGuiComponent(buttonComponent, frameworkApp){
		
		this.buttonComponent = buttonComponent
		
		// Fix HTML.
		this.innerText = this.buttonComponent.children[0]
		
		// Fix CSS.
		applyAttributesToElement(
			buttonComponent,
			this,
		)
		
	}
	
	onButtonClicked(){
		this.buttonComponent.onClick()
		this.dispatchEvent(new CustomEvent('moveon', {
			bubbles: true,
		}))
	}
	
}

if(typeof customElements != "undefined"){
	
	customElements.define(
		ButtonElement.tagName,
		ButtonElement,
		{extends: 'button'}
	)
		
	document.createElement(ButtonElement.tagName)
	
}