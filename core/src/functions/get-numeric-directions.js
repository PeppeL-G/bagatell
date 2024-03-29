import {Direction} from "../classes/Direction.js"

export function getNumericDirections(pagesAttribute, getNumber){
	
	const directions = []
	
	for(const [conditionString, page] of Object.entries(pagesAttribute)){
		
		let condition
		let description
		
		const parts = conditionString.split("_")
		
		if(parts.length == 1){
			
			const number = parseInt(parts[0], 10)
			condition = () => getNumber() == number
			description = `Entered number == ${number}`
			
		}else{
			
			const [minString, maxString] = parts
			
			let minNumber
			let maxNumber
			let minIsInclusive = true
			let maxIsInclusive = true
			
			if(minString == 'X'){
				minNumber = Number.NEGATIVE_INFINITY
			}else{
				minNumber = parseInt(minString, 10)
				if(minString.slice(-1) == 'E'){
					minIsInclusive = false
				}
			}
			
			if(maxString == 'X'){
				maxNumber = Number.POSITIVE_INFINITY
			}else{
				maxNumber = parseInt(maxString, 10)
				if(maxString.slice(-1) == 'E'){
					maxIsInclusive = false
				}
			}
			
			let minOperator
			let maxOperator
			let minComparer
			let maxComparer
			
			if(minIsInclusive){
				minOperator = '<='
				minComparer = () => minNumber <= getNumber()
			}else{
				minOperator = '<'
				minComparer = () => minNumber < getNumber()
			}
			
			if(maxIsInclusive){
				maxOperator = '<='
				maxComparer = () => getNumber() <= maxNumber
			}else{
				maxOperator = '<'
				maxComparer = () => getNumber() < maxNumber
			}
			
			condition = () => minComparer() && maxComparer()
			
			if(minString == 'X'){
				description = `Entered number ${maxOperator} ${maxNumber}`
			}else if(maxString == 'X'){
				description = `${minNumber} ${minOperator} Entered number`
			}else{
				description = `${minNumber} ${minOperator} Entered number ${maxOperator} ${maxNumber}`
			}
			
		}
		
		directions.push(
			new Direction(
				page,
				condition,
				description,
			)
		)
		
	}
	
	return directions
	
}