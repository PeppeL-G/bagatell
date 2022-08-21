import {settings} from '../../settings.js'
import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'

const ParentElement = (
	typeof HTMLElement == 'undefined' ?
	Function :
	HTMLElement
)

export default class EnterTextElement extends ParentElement{
	
	static tagName = settings.namespace+"enter-text"
	
	constructor() {
		super()
		
		this.style.display = 'block'
		this.style.height = '100%'
		this.style.width = "100%"
		this.style.boxSizing = 'border-box'
		
		this.input = document.createElement('input')
		this.input.style.display = 'block'
		this.input.style.width = '100%'
		this.input.style.height = '100%'
		this.input.style.boxSizing = 'border-box'
		this.appendChild(this.input)
		
		this.input.addEventListener('keyup', (event) => {
			if(event.key == 'Enter'){
				this.moveOn()
			}
		})
		this.input.addEventListener('input', (event) => {
			this.enterTextComponent.enteredText = this.input.value
		})
		
	}
	
	setGuiComponent(enterTextComponent, frameworkApp){
		
		this.enterTextComponent = enterTextComponent
		
		// Fix HTML.
		this.input.value = this.enterTextComponent.children[0] || ''
		this.input.placeholder = this.enterTextComponent.props.placeholder || ''
		
		// Fix CSS.
		applyAttributesToElement(
			this.enterTextComponent,
			this,
		)
		
		const gravity = enterTextComponent.props.gravity || ''
		
		if(gravity.includes('<')){
			this.input.style.textAlign = 'left'
		}else if(gravity.includes('|')){
			this.input.style.textAlign = 'center'
		}else if(gravity.includes('>')){
			this.input.style.textAlign = 'right'
		}else{
			this.input.style.textAlign = 'left'
		}
		
	}
	
	moveOn(){
		this.dispatchEvent(new CustomEvent('moveon', {
			bubbles: true,
		}))
	}
	
}

if(typeof customElements != "undefined"){
	customElements.define(
		EnterTextElement.tagName,
		EnterTextElement,
	)
}