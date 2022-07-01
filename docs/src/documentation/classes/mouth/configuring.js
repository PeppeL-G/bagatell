import {
	App,
	Page,
	Rows,
	Text,
	Slider,
	Button,
	Space,
} from '@bagatell/core'

export default function createApp({a, p}){

//#region MyApp
class MyApp extends App{
	createStartPage(){
		return new ConfigureVoicePage()
	}
}
//#endregion MyApp

//#region ConfigureVoicePage
class ConfigureVoicePage extends Page{
	createGui(){
		
		const voiceButtons = a.mouth.getVoices().map(v =>
			Button(v.name)
				.page(TestVoicePage)
				.handler(() => a.mouth.selectVoice(v))
		)
		
		if(voiceButtons.length == 0){
			return Text(`Your browser doesn't support Text-To-Speech.`)
		}
		
		return Rows(
			Space,
			Text(`Select voice rate.`),
			Slider(a.mouth.getRate()).min(0.1).step(0.05).max(2).handler(rate => a.mouth.setRate(rate)),
			Space,
			Text(`Select voice pitch.`),
			Slider(a.mouth.getPitch()).min(0.1).step(0.05).max(2).handler(pitch => a.mouth.setPitch(pitch)),
			Space,
			Text(`Select voice.`),
			Space,
			voiceButtons,
			Space,
		)
	}
}
//#endregion ConfigureVoicePage

//#region TestVoicePage
class TestVoicePage extends Page{
	onBefore(){
		a.mouth.enable()
	}
	createGui(){
		return Rows(
			Text(`This is what I sound like.`),
			Button(`Back to ConfiguringPage`).page(ConfigureVoicePage),
		)
	}
	onAfter(){
		a.mouth.disable()
	}
}
//#endregion TestVoicePage

return MyApp

}