export function applyAttributesToElement(guiComponent, htmlElement){
	
	const style = htmlElement.style
	
	if(guiComponent.props.padding){
		style.padding = guiComponent.props.padding+'%'
	}
	
	if(guiComponent.props.border){
		style.border = guiComponent.props.border
	}
	
	if(guiComponent.props.background){
		style.backgroundColor = guiComponent.props.background
	}
	
	if(guiComponent.props.color){
		style.color = guiComponent.props.color
	}
	
}