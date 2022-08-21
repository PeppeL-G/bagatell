import {settings} from '../../settings.js'
import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'
import {createGuiElement} from '../../functions/create-gui-element.js'

const ParentElement = (
	typeof HTMLElement == 'undefined' ?
	Function :
	HTMLElement
)

export default class SpaceElement extends ParentElement{
	
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

if(typeof customElements != "undefined"){
	customElements.define(
		SpaceElement.tagName,
		SpaceElement,
	)
}