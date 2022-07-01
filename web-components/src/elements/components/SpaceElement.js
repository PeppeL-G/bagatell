import {settings} from '../../settings.js'
import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'
import {createGuiElement} from '../../functions/create-gui-element.js'

export default class SpaceElement extends HTMLElement{
	
	static tagName = settings.namespace+"space"
	
	constructor() {
		super()
		
		this.style.display = 'block'
		this.style.height = '100%'
		this.style.boxSizing = 'border-box'
		
	}
	
	setGuiComponent(spaceComponent, frameworkApp){
		
		// Fix HTML.
		const childComponent = spaceComponent.children[0]
		
		if(childComponent){
			
			const childElement = createGuiElement(childComponent)
			this.appendChild(childElement)
			childElement.setGuiComponent(childComponent, frameworkApp)
			
			// Fix CSS.
			childElement.style.height = "100%"
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			spaceComponent,
			this,
		)
		
	}
	
}

customElements.define(
	SpaceElement.tagName,
	SpaceElement,
)