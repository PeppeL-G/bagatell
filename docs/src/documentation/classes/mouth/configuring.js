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

class MyApp extends App{
	
	createStartPage(){
		return new ConfiguringPage()
	}
	
}

class ConfiguringPage extends Page{
	createGui(){
		
		const voiceButtons = a.mouth.getVoices().map(v =>
			Button(v.name)
				.page(TestPage)
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
			...voiceButtons,
			Space,
		)
	}
}

class TestPage extends Page{
	onBefore(){
		a.mouth.enable()
	}
	createGui(){
		return Rows(
			Text(`This is what I sound like.`),
			Button(`Back to ConfiguringPage`).page(ConfiguringPage),
		)
	}
	onAfter(){
		a.mouth.disable()
	}
}

return MyApp

}