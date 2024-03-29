import {Component} from '../Component.js'
import {Direction} from '../classes/Direction.js'

export class EnterTextComponent extends Component{
	
	enteredText = ''
	
	onAfter(a, p){
		
		if(this.props.aVar){
			a[this.props.aVar] = this.enteredText
		}
		
		if(this.props.pVar){
			p[this.props.pVar] = this.enteredText
		}
		
		if(this.props.handler){
			this.props.handler(this.enteredText)
		}
		
	}
	
	createAfterDirections(){
		
		const afterDirections = []
		
		if(this.props.pages){
			for(const [conditionText, page] of Object.entries(this.props.pages)){
				afterDirections.push(
					new Direction(
						page,
						() => this.enteredText == conditionText,
						conditionText,
					)
				)
			}
		}
		
		if(this.props.page){
			
			afterDirections.push(
				new Direction(
					this.props.page,
					() => true,
					"Any text",
				)
			)
			
		}
		
		return afterDirections
		
	}
	
}