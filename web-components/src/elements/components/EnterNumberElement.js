import {settings} from '../../settings'
import {applyAttributesToElement} from '../../functions/apply-props-to-element'

export default class EnterNumberElement extends HTMLElement{
	
	static tagName = settings.namespace+"enter-number"
	
	constructor() {
		super()
		
		this.style.display = 'block'
		this.style.height = '100%'
		this.style.width = "100%"
		this.style.boxSizing = 'border-box'
		
		this.input = document.createElement('input')
		this.input.setAttribute('type', 'number')
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
			this.enterNumberComponent.enteredNumber = this.input.valueAsNumber
		})
		
	}
	
	setGuiComponent(enterNumberComponent, frameworkApp){
		
		this.enterNumberComponent = enterNumberComponent
		
		// Fix HTML.
		this.input.value = this.enterNumberComponent.children[0] || ''
		this.input.placeholder = this.enterNumberComponent.props.placeholder || ''
		
		// Fix CSS.
		applyAttributesToElement(
			this.enterNumberComponent,
			this,
		)
		
		const gravity = enterNumberComponent.props.gravity || ''
		
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

customElements.define(
	EnterNumberElement.tagName,
	EnterNumberElement,
)