// To support server-side rendering, we can't assume "window" exists.
const speechSynthesis = (
	typeof window != "undefined" &&
	window.speechSynthesis
)

export class Talker{
	
	mouthSettings = {}
	isSpeechSynthesisSupported = false
	
	constructor(mouthSettings, onVoicesChanged){
		
		this.mouthSettings = mouthSettings
		this.isSpeechSynthesisSupported = !!speechSynthesis
		
		if(this.isSpeechSynthesisSupported){
			speechSynthesis.addEventListener(
				"voiceschanged",
				() => {
					onVoicesChanged()
				},
			)
		}
		
	}
	
	getVoices(){
		return speechSynthesis.getVoices().map(v => ({
			id: v.voiceURI,
			name: v.name,
			language: v.lang,
		}))
	}
	
	talk(textToTalk){
		
		if(!this.isSpeechSynthesisSupported){
			return
		}
		
		const utterance = new SpeechSynthesisUtterance()
		utterance.voice = speechSynthesis.getVoices().find(
			v => v.voiceURI == this.mouthSettings.selectedVoiceId
		)
		utterance.text = textToTalk
		utterance.rate = this.mouthSettings.rate
		utterance.pitch = this.mouthSettings.pitch
		
		speechSynthesis.speak(utterance)
		
	}
	
	stop(){
		speechSynthesis.cancel()
	}
	
}