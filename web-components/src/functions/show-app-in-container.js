import { createFrameworkApp } from '@bagatell/core'
import { AppElement } from '../elements/AppElement.js'

export function showAppInContainer(createApp, containerElement){
	
	const frameworkApp = createFrameworkApp(
		createApp, // The function creating your app.
		null, // Reserved for future usage.
		{isPreview: false} // Runtime settings.
	)
	
	const appElement = new AppElement()
	containerElement.appendChild(appElement)
	appElement.showApp(frameworkApp)
	
}