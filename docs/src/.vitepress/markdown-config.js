import Container from 'markdown-it-container'

const tabsRegExp = /^tabs$/
const tabRegExp = /^tab\s+(.*)$/

export function markdownConfig(md){
	
	md.use(Container, 'tabs', {
		validate(params){
			return params.trim().match(tabsRegExp)
		},
		render(tokens, idx){
			
			const m = tokens[idx].info.trim().match(tabsRegExp)
			
			if (tokens[idx].nesting === 1){
				return `<Tabs>`
			}else{
				return '</Tabs>'
			}
			
		},
	})
	
	md.use(Container, 'tab', {
		validate(params){
			return params.trim().match(tabRegExp)
		},
		render(tokens, idx){
			
			const m = tokens[idx].info.trim().match(tabRegExp)
			
			if (tokens[idx].nesting === 1){
				return `<Tab title="${m[1]}">`
			}else{
				return '</Tab>'
			}
			
		},
	})
	
}