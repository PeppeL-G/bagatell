export class Page{
	
	args = {}
	
	// Optimally, this would be a callable function, so one can write
	// new MyPage({args1: 12}) without using the new keyword, but
	// JS classes don't support that (yet) :(
	constructor(actualArgs){
		
		// FrameworkPage will add these args to the page instance
		// and then delete this.actualArgs. We do that in Framework Page
		// because the sub-class args properties hasn't been set on "this"
		// yet when this constructor is called -.-
		this.actualArgs = actualArgs
		
	}
	
	createBeforeDirections(){
		return []
	}
	
	onBefore(){
		
	}
	
	createGui(){
		
	}
	
	onAfter(){
		
	}
	
	createAfterDirections(){
		return []
	}
	
}