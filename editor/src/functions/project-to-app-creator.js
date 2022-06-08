import evalExpression from "./eval-expression"
import getClassName from "./get-class-name"

// The generated code will look like this:
const a = `
function createApp({a, p}){
	
	class MyApp extends App{
		createStartPage(){
			return new StartPage()
		}
	})
	
	class StartPage extends Page{
		// ...
	}
	// ...
	
	class MyAppAbc123 extends MyApp{
		createStartPage(){
			return new MenuPage()
		}
	}
	
	return MyAppAbc123
	
}
`

export default function projectToAppCreator(project, startPageWrapper=null){
	
	const startPageName = (
		startPageWrapper ?
		getClassName(startPageWrapper.code) :
		null
	)
	const appName = getClassName(project.appWrapper.code)
	const ownAppName = appName+'Abc123'
	
	const allPageCodes = project.folders.map(
		f => f.pageWrappers
	).flat().map(
		sw => sw.code
	)
	
	const codeWithJsx = `
function createApp({a, p}){

${project.appWrapper.code}

${allPageCodes.join("\n\n")}

class ${ownAppName} extends ${appName}{
	createStartPage(){
		return ${
			startPageName ?
			`new ${startPageName}()` :
			`super.createStartPage()`
		}
	}
}

return ${ownAppName}

}
	`.trim()
	
	const createApp = evalExpression(codeWithJsx)
	
	return createApp
	
}