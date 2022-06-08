export class FrameworkPage{
	
	frameworkApp = null
	page = null
	beforeDirections = []
	rootGuiComponent = null
	afterDirections = []
	earInputListeners = []
	
	// The constructor only initializes so beforeDirections can be used.
	// The rest is initialized in initializeTheRest().
	constructor(frameworkApp, page){
		
		this.frameworkApp = frameworkApp
		this.page = page
		
		// Add the arguments to the page instance.
		const args = {
			...this.page.args,
			...this.page.actualArgs,
		}
		for(const argName of Object.keys(args)){
			this.page[argName] = args[argName]
		}
		delete this.page.args
		
		this.beforeDirections.push(
			...this.page.createBeforeDirections()
		)
		
	}
	
	getFirstTrueBeforeDirection(){
		return this.beforeDirections.find(
			d => d.isTrue()
		)
	}
	
	// This initializes the rest that wasn't initialized in the constructor.
	initializeTheRest(){
		
		this.rootGuiComponent = this.page.createGui().create
		
		this.afterDirections.push(
			...this.page.createAfterDirections()
		)
		this.afterDirections.push(
			...this.rootGuiComponent.createAfterDirections()
		)
		
		this.earInputListeners.push(
			...this.rootGuiComponent.createEarInputListeners()
		)
		
	}
	
	runOnBefore(){
		this.page.onBefore()
	}
	
	runOnAfter(){
		
		this.rootGuiComponent.onAfter(this.frameworkApp.app, this.page)
		
		this.page.onAfter()
		
	}
	
	getFirstTrueAfterDirection(){
		return this.afterDirections.find(
			d => d.isTrue()
		)
	}
	
	getTextToSpeak(){
		return this.rootGuiComponent.getTextToSpeak()
	}
	
	getBestMatchingEarInputListener(spokenText){
		
		if(this.earInputListeners.length == 0){
			return null
		}
		
		const matchResult = this.earInputListeners.map(
			l => ({
				probability: l.getProbability(spokenText),
				listener: l,
			})
		)
		
		matchResult.sort((a, b) => a.probability - b.probability)
		
		const bestMatchingListener = matchResult[0].listener
		
		return bestMatchingListener
		
	}
	
}