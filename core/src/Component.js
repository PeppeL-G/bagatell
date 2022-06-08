export class Component{
	
	constructor(children, props){
		
		this.children = children
		this.props = props
		
	}
	
	onAfter(a, p){
		
	}
	
	createAfterDirections(){
		return [
			/* new Direction(...) */
		]
	}
	
	getTextToSpeak(){
		return ""
	}
	
	createEarInputListeners(){
		return [
			/* new EarInputListener(...) */
		]
	}
	
}