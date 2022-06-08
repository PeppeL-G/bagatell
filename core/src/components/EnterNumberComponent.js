import {Component} from '../Component'
import {Direction} from '../classes/Direction'
import {getNumericDirections} from '../functions/get-numeric-directions'
import {EarInputListener} from '../classes/EarInputListener'

export class EnterNumberComponent extends Component{
	
	enteredNumber = -1
	
	onAfter(a, p){
		
		if(this.props.aVar){
			a[this.props.aVar] = this.enteredNumber
		}
		
		if(this.props.pVar){
			p[this.props.pVar] = this.enteredNumber
		}
		
		if(this.props.handler){
			this.props.handler(this.enteredNumber)
		}
		
	}
	
	createAfterDirections(){
		
		const afterDirections = []
		
		if(this.props.pages){
			afterDirections.push(
				...getNumericDirections(
					this.props.pages,
					() => this.enteredNumber
				)
			)
		}
		
		if(this.props.page){
			
			afterDirections.push(
				new Direction(
					this.props.page,
					() => true,
					"Entered number = ?",
				)
			)
			
		}
		
		return afterDirections
		
	}
	
	createEarInputListeners(){
		
		const earInputListeners = []
		
		if(this.props.name){
			
			const pattern = new RegExp(`^${this.props.name} ([0-9]+)$`, 'i')
			
			earInputListeners.push(
				new EarInputListener(
					(spokenText) => {
						const matches = spokenText.match(pattern)
						if(matches == null){
							return 0
						}else{
							return 1
						}
					},
					(spokenText) => {
						const matches = spokenText.match(pattern)
						this.enteredNumber = parseInt(matches[1], 10)
						return false
					}
				)
			)
			
		}else{
			
			const pattern = new RegExp(`^[0-9]+$`)
			
			earInputListeners.push(
				new EarInputListener(
					(spokenText) => {
						const matches = spokenText.match(pattern)
						if(matches == null){
							return 0
						}else{
							return 1
						}
					},
					(spokenText) => {
						const matches = spokenText.match(pattern)
						this.enteredNumber = parseInt(matches[0], 10)
						return true
					}
				)
			)
			
		}
		
		return earInputListeners
		
	}
	
}