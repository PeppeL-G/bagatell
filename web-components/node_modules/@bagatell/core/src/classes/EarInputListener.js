export class EarInputListener{
	
	constructor(probabilityComputer, handler){
		this.probabilityComputer = probabilityComputer
		this.handler = handler
	}
	
	getProbability(spokenText){
		return this.probabilityComputer(spokenText)
	}
	
	handle(spokenText){
		return this.handler(spokenText)
	}
	
}