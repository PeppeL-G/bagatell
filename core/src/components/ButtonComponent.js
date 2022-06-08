import {Component} from '../Component'
import {Direction} from '../classes/Direction'
import {EarInputListener} from '../classes/EarInputListener'

export class ButtonComponent extends Component{
	
	wasClicked = false
	
	onClick(){
		this.wasClicked = true
	}
	
	onAfter(a, p){
		if(this.wasClicked && this.props.handler){
			this.props.handler()
		}
	}
	
	createAfterDirections(){
		
		const afterDirections = []
		
		if(this.props.page){
			
			afterDirections.push(
				new Direction(
					this.props.page,
					() => this.wasClicked,
					this.children[0]
				)
			)
			
		}
		
		return afterDirections
		
	}
	
	createEarInputListeners(){
		
		const earInputListeners = []
		
		earInputListeners.push(
			new EarInputListener(
				(spokenText) => spokenText == "Hello" ? 1 : 0, // TODO!
				(spokenText) => this.onClick() || true,
			)
		)
		
		return earInputListeners
		
	}
	
}