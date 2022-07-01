export function createComponentCreator(Component){
	
	// All new components of same type start with this proxy,
	// but as soon as it's used, create a new one.
	const sharedProxy = new Proxy(function(){}, {
		// E.g. Text.hello
		get(target, prop, receiver){
			const realProxy = createRealComponentCreator(Component)
			return Reflect.get(realProxy, prop, receiver)
		},
		// E.g. Text(...)
		apply(target, thisArg, argumentsList){
			const realProxy = createRealComponentCreator(Component)
			return Reflect.apply(realProxy, realProxy, argumentsList)
		}
	})
	
	return sharedProxy
	
}

export function createRealComponentCreator(Component){
	
	let childProxies = []
	let props = {}
	
	let lastAccessedProp = ""
	const setLastAccessedProp = (value=true) => {
		props[lastAccessedProp] = value
		return proxy
	}
	
	const proxy = new Proxy(function(){}, {
		get(target, prop, receiver){
			if(prop == 'name'){
				return Component.name
			}else if(prop == 'isCreatorProxy'){
				return true
			}else if(prop == 'create'){
				const children = childProxies.map(
					c => (
						c?.isCreatorProxy ?
						c.create :
						c
					)
				)
				return new Component(children, props)
			}else{
				lastAccessedProp = prop
				return setLastAccessedProp
			}
		},
		apply(target, thisArg, argumentsList){
			childProxies = argumentsList.flat(Infinity)
			return proxy
		}
	})
	
	return proxy
	
}