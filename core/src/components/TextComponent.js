import {Component} from '../Component.js'

export class TextComponent extends Component{
	
	getTextToSpeak(){
		if(this.props.speak == 'never'){
			return ""
		}else{
			return this.children[0]
		}
	}
	
}