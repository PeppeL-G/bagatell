import {Component} from '../Component'
import {Direction} from '../classes/Direction'
import {getNumericDirections} from '../functions/get-numeric-directions'

export class SliderComponent extends Component{
	
	selectedNumber = -1
	
	constructor(children, props){
		super(children, props)
		
		this.selectedNumber =
			parseFloat(this.children.join(""), 10) ||
			Math.round(
				this.getMin() +
				(this.getMax() - this.getMin())/2
			) // TODO: Take step into account
	}
	
	getMin(){
		return this.props.min || 0
	}
	
	getMax(){
		return this.props.max || 10
	}
	
	getStep(){
		return this.props.step || 1
	}
	
	onAfter(a, p){
		
		if(this.props.aVar){
			a[this.props.aVar] = this.selectedNumber
		}
		
		if(this.props.pVar){
			p[this.props.pVar] = this.selectedNumber
		}
		
		if(this.props.handler){
			this.props.handler(this.selectedNumber)
		}
		
	}
	
	createAfterDirections(){
		
		const afterDirections = []
		
		if(this.props.pages){
			afterDirections.push(
				...getNumericDirections(
					this.props.pages,
					() => this.selectedNumber
				)
			)
		}
		
		if(this.props.page){
			
			afterDirections.push(
				new Direction(
					this.props.page,
					() => true,
					"Any number",
				)
			)
			
		}
		
		return afterDirections
		
	}
	
}