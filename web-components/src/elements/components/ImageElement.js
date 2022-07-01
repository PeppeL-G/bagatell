import {settings} from '../../settings.js'
import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'

export default class ImageElement extends HTMLImageElement{
	
	static tagName = settings.namespace+"image"
	
	constructor() {
		super()
		
		this.style.boxSizing = 'border-box'
		this.style.display = 'block'
		this.style.width = "100%"
		this.style.height = "100%"
		this.style.margin = "0 auto"
		
	}
	
	onAfter(a, p){
		
	}
	
	setGuiComponent(imageComponent, frameworkApp){
		
		// Fix HTML.
		this.src = imageComponent.children[0]
		
		// Fix CSS.
		applyAttributesToElement(
			imageComponent,
			this,
		)
		
	}
	
}

customElements.define(
	ImageElement.tagName,
	ImageElement,
	{extends: 'img'}
)

document.createElement(ImageElement.tagName)