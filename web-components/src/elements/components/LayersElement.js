import {settings} from '../../settings.js'
import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'
import {createGuiElement} from '../../functions/create-gui-element.js'

const ParentElement = (
	typeof HTMLElement == 'undefined' ?
	Function :
	HTMLElement
)

export default class LayersElement extends ParentElement{
	
	static tagName = settings.namespace+"layers"
	
	constructor() {
		super()
		
		this.style.display = 'grid'
		this.style.gridTemplateRows = '1fr'
		this.style.gridTemplateColumns = '1fr'
		this.style.width = '100%'
		this.style.height = '100%'
		this.style.overflow = 'auto'
		this.style.boxSizing = 'border-box'
		
	}
	
	setGuiComponent(layersComponent, frameworkApp){
		
		// Fix HTML.
		for(const childComponent of layersComponent.children){
			
			const childElement = createGuiElement(childComponent)
			this.appendChild(childElement)
			childElement.setGuiComponent(childComponent, frameworkApp)
			
			// Fix CSS for.children.
			childElement.style.gridRow = '1'
			childElement.style.gridColumn = '1'
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			layersComponent,
			this,
		)
		
	}
	
}

if(typeof customElements != "undefined"){
	customElements.define(
		LayersElement.tagName,
		LayersElement,
	)
}