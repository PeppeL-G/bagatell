export class Ear{
	
	earSettings = {}
	
	constructor(earSettings){
		this.earSettings = earSettings
	}
	
	isEnabled(){
		return this.earSettings.isEnabled
	}
	
	enable(){
		this.earSettings.isEnabled = true
	}
	
	disable(){
		this.earSettings.isEnabled = false
	}
	
}