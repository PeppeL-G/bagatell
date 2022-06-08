import {settings} from '../settings'
import {createGuiElement} from '../functions/create-gui-element'

export class PageElement extends HTMLElement{
	
	static tagName = settings.namespace+"page"
	
	constructor() {
		super()
		
		this.style.display = 'block'
		this.style.height = '100%'
		
	}
	
	showPage(frameworkPage, frameworkApp){
		
		this.innerText = ''
		
		const guiElement = createGuiElement(frameworkPage.rootGuiComponent)
		this.appendChild(guiElement)
		guiElement.setGuiComponent(frameworkPage.rootGuiComponent, frameworkApp)
		
	}
	
}

customElements.define(
	PageElement.tagName,
	PageElement,
)