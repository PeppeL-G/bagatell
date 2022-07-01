import evalExpression from "./eval-expression.js"
import getClassName from "./get-class-name.js"

// The generated code will look like this:
const a = `
function createApp({a, p}){
	
	class A_PAGE extends Page{}
	class B_PAGE extends Page{}
	...
	
	class THE_APP extends App{
		...
	}
	
	class THE_PAGE extends Page{
		...
	}
	
	return class extends THE_APP{
		createStartPage(){
			return new THE_PAGE()
		}
	}
	
}
`

export default function pageWrapperToAppCreator(project, pageWrapper){
	
	const appName = getClassName(project.appWrapper.code)
	const startPageName = getClassName(pageWrapper.code)
	
	// Only keep unique page names.
	const pageNames = [...new Set(project.folders.map(
		f => f.pageWrappers.filter(
			pw => pw.id != pageWrapper.id
		).map(
			pw => pw.code.match(/(?<=class )\w+(?= extends)/)[0] || "UnknownPageName"
		)
	).flat())]
	
	const codeExpression = `
function createApp({a, p}){
	
	${pageNames.map(
		name => `class ${name} extends Page{}`
	).join('\n')}
	
	${project.appWrapper.code}
	
	${pageWrapper.code}
	
	return class extends ${appName}{
		createStartPage(){
			return new ${startPageName}()
		}
	}
	
}
	`.trim()
	
	const createApp = evalExpression(codeExpression)
	
	return createApp
	
}