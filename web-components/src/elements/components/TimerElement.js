import {settings} from '../../settings'
import {applyAttributesToElement} from '../../functions/apply-props-to-element'

export default class TimerElement extends HTMLElement{
	
	static tagName = settings.namespace+"timer"
	
	constructor() {
		super()
		
		this.style.display = 'block'
		this.style.height = '100%'
		this.style.width = "100%"
		this.style.textAlign = 'center'
		
	}
	
	setGuiComponent(timerComponent, frameworkApp){
		
		const updateGui = () => {
			
			const remainingTimeInMs = timerComponent.getRemainingTimeInMs()
			
			// Round up instead of down, so GUI doesn't show 0:0.
			const remainingTimeInS = Math.ceil(remainingTimeInMs / 1000)
			
			const s = remainingTimeInS % 60
			const m = Math.ceil((remainingTimeInS - s) / 60)
			
			this.innerHTML = `${m}:${s}`
			
		}
		
		const tick = () => {
			
			const remainingTimeInMs = timerComponent.getRemainingTimeInMs()
			
			if(0 < remainingTimeInMs){
				
				updateGui()
				
			}else{
				
				this.innerHTML = "0:0"
				
				clearInterval(this.intervalId)
				timerComponent.onTimeout()
				this.dispatchEvent(new CustomEvent('moveon', {
					bubbles: true,
				}))
				
			}
			
		}
		
		updateGui()
		
		if(!frameworkApp.runtimeSettings.isPreview){
			this.intervalId = setInterval(tick, 100)
		}
		
		// Fix CSS.
		applyAttributesToElement(
			timerComponent,
			this,
		)
		
	}
	
	disconnectedCallback(){
		clearInterval(this.intervalId)
	}
	
}

customElements.define(
	TimerElement.tagName,
	TimerElement,
)