import {settings} from '../../settings.js'
import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'

export default class ButtonElement extends HTMLButtonElement{
	
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

customElements.define(
	ButtonElement.tagName,
	ButtonElement,
	{extends: 'button'}
)

document.createElement(ButtonElement.tagName)