import {FrameworkPage} from './FrameworkPage.js'
import {Mouth} from './Mouth.js'
import {deepMergeObjects} from '../functions/deep-merge-objects.js'
import {Ear} from './Ear.js'

const defaultRuntimeSettings = {
	isPreview: false,
	mouth: {
		isEnabled: false,
		rate: 1,
		pitch: 1,
		selectedTalkerId: '',
	},
	ear: {
		isEnabled: false,
	},
}

export class FrameworkApp{
	
	app = null
	runtimeSettings = {}
	savedState = {}
	frameworkPage = null
	
	constructor(app, savedState, runtimeSettings=null){
		
		this.app = app
		this.savedState = savedState
		this.runtimeSettings = deepMergeObjects({}, defaultRuntimeSettings, runtimeSettings)
		this.app.mouth = new Mouth(this.runtimeSettings.mouth)
		this.app.ear = new Ear(this.runtimeSettings.ear)
		
	}
	
	// Call this method when the GUI environment has been initialized
	// (when we have detected voices, microphone, etc.).
	initialize(){
		
		if(!this.savedState){
			
			// Create from scratch.
			this.app.onBefore()
			this.loadPage(this.app.createStartPage())
			
		}else{
			
			// Create from state.
			// TODO.
			
		}
		
	}
	
	loadPage(page){
		
		this.frameworkPage = new FrameworkPage(this, page)
		
		if(!this.runtimeSettings.isPreview){
			
			const beforeDirection = this.frameworkPage.getFirstTrueBeforeDirection()
			
			if(beforeDirection){
				this.loadPage(beforeDirection.createPage())
				return
			}
			
		}
		
		this.frameworkPage.runOnBefore()
		this.frameworkPage.initializeTheRest()
		
	}
	
	moveOn(){
		
		this.frameworkPage.runOnAfter()
		
		const afterDirection = this.frameworkPage.getFirstTrueAfterDirection()
		
		if(afterDirection){
			
			this.loadPage(afterDirection.createPage())
			
		}else{
			
			// No after direction is true. Then simply send
			// the user to the current page the user is on.
			this.loadPage(this.frameworkPage.page)
			
		}
		
	}
	
}