import {Component} from '../Component.js'

export const Cols = (...c) => new ColsComponent(...c)

export class ColsComponent extends Component{
	
	onAfter(a, p){
		for(const child of this.children){
			child.onAfter(a, p)
		}
	}
	
	createAfterDirections(){
		
		return this.children.map(
			c => c.createAfterDirections()
		).flat()
		
	}
	
	getTextToSpeak(){
		return this.children.map(
			c => c.getTextToSpeak()
		).join(" ")
	}
	
	createEarInputListeners(){
		return this.children.map(
			c => c.createEarInputListeners()
		)
	}
	
}