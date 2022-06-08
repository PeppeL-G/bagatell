import {
	App,
	Page,
	Direction,
	Space,
	Text,
	Timer,
	EnterNumber,
	EnterText,
	Slider,
	Button,
	Image,
	Rows,
	Layers,
	Cols,
} from '@bagatell/core'

const args = [
	App,
	Button,
	Cols,
	Direction,
	EnterNumber,
	EnterText,
	Image,
	Layers,
	Page,
	Rows,
	Slider,
	Space,
	Text,
	Timer,
]

const parameters = args.map(
	arg => arg.name
)

export default function evalExpression(jsExpressionAsString){
	
	try {
		
		const code = `
			(function evaluateExpression(${parameters.join(', ')}){ return ${jsExpressionAsString}})
		`.trim()
		
		const evaluateExpression = eval(code)
		
		try {
			return evaluateExpression(...args)
		}catch(error){
			throw "Runtime error:"+error.message
		}
		
	}catch(error){
		throw "Syntax Error: "+error.message
	}
	
}