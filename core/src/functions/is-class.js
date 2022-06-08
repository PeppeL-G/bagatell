export function isClass(value){
	return typeof value === 'function' && /^\s*class\s+/.test(value.toString())
}