import {settings} from '../../settings'
import {applyAttributesToElement} from '../../functions/apply-props-to-element'

export default class TextElement extends HTMLElement{
	
	static tagName = settings.namespace+"text"
	
	constructor() {
		super()
		
		this.style.display = 'flex'
		this.style.flexDirection = 'row'
		this.style.height = '100%'
		this.style.boxSizing = 'border-box'
		
		this.textSpan = document.createElement('span')
		
		this.appendChild(this.textSpan)
		
	}
	
	onAfter(a, p){
		
	}
	
	setGuiComponent(textComponent, frameworkApp){
		
		// Fix HTML.
		// \u200B is zero width character (if text is empty, we want the span to have a height).
		this.textSpan.innerText = (textComponent.children[0] || '').trim() || "\u200B"
		
		// Fix CSS.
		applyAttributesToElement(
			textComponent,
			this,
		)
		
		const style = this.style
		const gravity = textComponent.props.gravity || ''
		
		if(textComponent.props.left || gravity.includes('<')){
			style.justifyContent = 'start'
			style.textAlign = 'left'
		}else if(gravity.includes('|')){
			style.justifyContent = 'center'
			style.textAlign = 'center'
		}else if(textComponent.props.right || gravity.includes('>')){
			style.justifyContent = 'end'
			style.textAlign = 'right'
		}else{
			style.justifyContent = 'center'
			style.textAlign = 'center'
		}
		
		if(textComponent.props.top || gravity.includes('^')){
			style.alignItems = 'start'
		}else if(gravity.includes('-')){
			style.alignItems = 'center'
		}else if(textComponent.props.bottom || gravity.includes('v')){
			style.alignItems = 'end'
		}else{
			style.alignItems = 'center'
		}
		
	}
	
}

customElements.define(
	TextElement.tagName,
	TextElement,
)