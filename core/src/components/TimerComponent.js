import {Component} from '../Component'
import {Direction} from '../classes/Direction'

export class TimerComponent extends Component{
	
	hasTimedOut = false
	createdTimestamp = Date.now() // TODO: Fix re-createable from state!
	
	getEndTimestamp(){
		
		if(this.children[0]){
			return this.children[0] // TODO: Is this really correct?
		}else{
			
			return (
				this.createdTimestamp +
				(this.props.milliseconds || 0) +
				(this.props.seconds      || 0)*1000 +
				(this.props.minutes      || 0)*1000*60 +
				(this.props.hours        || 0)*1000*60*60
			)
			
		}
	}
	
	getRemainingTimeInMs(){
		return this.getEndTimestamp() - Date.now()
	}
	
	onTimeout(){
		this.hasTimedOut = true
	}
	
	onAfter(a, p){
		if(this.hasTimedOut && this.props.handler){
			this.props.handler()
		}
	}
	
	createAfterDirections(){
		
		const afterDirections = []
		
		if(this.props.page){
			
			afterDirections.push(
				new Direction(
					this.props.page,
					() => this.hasTimedOut,
					"Time out"
				)
			)
			
		}
		
		return afterDirections
		
	}
	
}