import {isClass} from "../functions/is-class"
import {Page} from "./Page"

export class Direction{
	
	constructor(page, condition, description){
		this.page = page
		this.condition = condition
		this.description = description
	}
	
	createPage(){
		if(isClass(this.page)){
			return new this.page()
		}else if(this.page instanceof Page){
			return this.page
		}else if(this.page instanceof Function){
			return this.page()
		}else{
			return null
		}
	}
	
	isTrue(){
		return this.condition()
	}
	
	getDescription(){
		return this.description || ""
	}
	
}