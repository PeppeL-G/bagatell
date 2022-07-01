import {settings} from '../../settings.js'
import {applyAttributesToElement} from '../../functions/apply-props-to-element.js'

export default class SliderElement extends HTMLElement{
	
	static tagName = settings.namespace+"slider"
	
	constructor() {
		super()
		
		this.style.display = 'grid'
		this.style.gridTemplateRows = 'auto auto'
		this.style.gridTemplateColumns = 'auto 1fr auto'
		this.style.alignItems = 'center'
		this.style.height = '100%'
		this.style.width = "100%"
		this.style.boxSizing = 'border-box'
		
		this.minSpan = document.createElement('span')
		this.minSpan.style.padding = '0.5em'
		this.minSpan.style.alignSelf = 'end'
		this.appendChild(this.minSpan)
		
		this.input = document.createElement('input')
		this.input.setAttribute('type', 'range')
		this.input.style.display = 'block'
		this.input.style.width = '100%'
		this.input.style.boxSizing = 'border-box'
		this.input.style.alignSelf = 'end'
		this.input.addEventListener('input', (event) => {
			this.sliderComponent.selectedNumber = this.input.valueAsNumber
			this.selectedNumberSpan.innerText = this.input.valueAsNumber
		})
		this.appendChild(this.input)
		
		this.maxSpan = document.createElement('span')
		this.maxSpan.style.padding = '0.5em'
		this.maxSpan.style.alignSelf = 'end'
		this.appendChild(this.maxSpan)
		
		this.selectedNumberSpan = document.createElement('span')
		this.selectedNumberSpan.style.gridColumn = '1 / span 3'
		this.selectedNumberSpan.style.textAlign = 'center'
		this.selectedNumberSpan.style.alignSelf = 'start'
		this.appendChild(this.selectedNumberSpan)
		
	}
	
	setGuiComponent(sliderComponent, frameworkApp){
		
		this.sliderComponent = sliderComponent
		
		// Fix HTML.
		this.minSpan.innerText = this.sliderComponent.getMin()
		this.input.min = this.sliderComponent.getMin()
		this.input.max = this.sliderComponent.getMax()
		this.input.step = this.sliderComponent.getStep()
		this.input.value = this.sliderComponent.selectedNumber
		this.maxSpan.innerText = this.sliderComponent.getMax()
		this.selectedNumberSpan.innerText = this.sliderComponent.selectedNumber
		
		// Fix CSS.
		applyAttributesToElement(
			this.sliderComponent,
			this,
		)
		
		const gravity = sliderComponent.props.gravity || ''
		
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
	SliderElement.tagName,
	SliderElement,
)