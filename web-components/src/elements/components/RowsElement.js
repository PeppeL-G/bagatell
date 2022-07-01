import {settings} from '../../settings.js'
import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'
import {createGuiElement} from '../../functions/create-gui-element.js'
import { SpaceComponent } from '@bagatell/core/src/components/SpaceComponent.js'

export default class RowsElement extends HTMLElement{
	
	static tagName = settings.namespace+"rows"
	
	constructor() {
		super()
		
		this.style.display = 'grid'
		this.style.gridTemplateColumns = '1fr'
		this.style.height = '100%'
		this.style.overflow = 'auto'
		this.style.boxSizing = 'border-box'
		
	}
	
	setGuiComponent(rowsComponent, frameworkApp){
		
		// Fix HTML.
		for(const childComponent of rowsComponent.children){
			
			const childElement = createGuiElement(childComponent)
			this.appendChild(childElement)
			childElement.setGuiComponent(childComponent, frameworkApp)
			
		}
		
		// Fix CSS.
		applyAttributesToElement(
			rowsComponent,
			this,
		)
		
		const style = this.style
		
		style.gridTemplateRows = rowsComponent.children.map(childComponent => {
			if(childComponent.props.size != undefined){
				return `minmax(auto, ${childComponent.props.size}fr)`
			}else if(childComponent instanceof SpaceComponent){
				return '1fr'
			}else{
				return 'min-content'
			}
		}).join(" ")
		
	}
	
}

customElements.define(
	RowsElement.tagName,
	RowsElement,
)