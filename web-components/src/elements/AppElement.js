import {Listener} from '../classes/Listener'
import {Talker} from '../classes/Talker'
import {settings} from '../settings'
import {PageElement} from './PageElement'

export class AppElement extends HTMLElement{
	
	static tagName = settings.namespace+"app"
	
	constructor() {
		super()
		
		// Prevent the one using this element to style this
		// element nor any of its children.
		this.style.all = 'initial'
		
		this.style.boxSizing = 'border-box'
		this.style.display = 'block'
		this.style.height = '100%'
		this.style.backgroundColor = 'aqua'
		
		this.pageElement = new PageElement()
		
		const shadowRoot = this.attachShadow({
			mode: 'closed'
		})
		shadowRoot.appendChild(
			this.pageElement
		)
		shadowRoot.addEventListener(
			'moveon',
			this.moveOn.bind(this)
		)
		
	}
	
	showApp(frameworkApp){
		
		this.frameworkApp = frameworkApp
		
		const setVoices = () => {
			this.frameworkApp.app.mouth.voices = this.talker.getVoices()
		}
		
		this.talker = new Talker(
			this.frameworkApp.runtimeSettings.mouth,
			setVoices,
		)
		setVoices()
		
		this.listener = new Listener(
			this.frameworkApp.runtimeSettings.ear,
		)
		
		this.frameworkApp.initialize()
		
		this.updateGui()
		
	}
	
	moveOn(){
		
		this.talker.stop()
		this.listener.stop()
		
		this.frameworkApp.moveOn()
		this.updateGui()
		
	}
	
	updateGui(){
		
		this.pageElement.showPage(
			this.frameworkApp.frameworkPage,
			this.frameworkApp
		)
		
		// Talk.
		if(
			!this.frameworkApp.runtimeSettings.isPreview &&
			this.frameworkApp.runtimeSettings.mouth.isEnabled
		){
			this.talker.talk(
				this.frameworkApp.app.transformTextToSpeak(
					this.frameworkApp.frameworkPage.getTextToSpeak()
				)
			)
		}
		
		// Listen for the user talking.
		if(
			!this.frameworkApp.runtimeSettings.isPreview &&
			this.frameworkApp.runtimeSettings.ear.isEnabled
		){
			
			this.listener.listen((spokenText) => {
				
				const bestMatchingListener = this.frameworkApp.frameworkPage.getBestMatchingEarInputListener(spokenText)
				
				if(bestMatchingListener){
					
					const shouldMoveOn = bestMatchingListener.handle(spokenText)
					
					if(shouldMoveOn){
						this.moveOn()
					}
					
				}
				
			})
			
		}
		
	}
	
}

customElements.define(
	AppElement.tagName,
	AppElement,
)