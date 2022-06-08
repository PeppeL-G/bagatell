export default function getClassName(code){
	
	const matches = code.match(
		/(?<=class )\w+(?= extends)/
	)
	
	if(matches == null || !matches[0]){
		return "UnknownClassName"
	}else{
		return matches[0]
	}
	
}