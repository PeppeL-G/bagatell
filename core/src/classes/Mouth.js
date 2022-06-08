export class Mouth{
	
	mouthSettings = {}
	voices = []
	
	constructor(mouthSettings){
		
		this.mouthSettings = mouthSettings
		
	}
	
	isEnabled(){
		return this.mouthSettings.isEnabled
	}
	
	enable(){
		this.mouthSettings.isEnabled = true
	}
	
	disable(){
		this.mouthSettings.isEnabled = false
	}
	
	getRate(){
		return this.mouthSettings.rate
	}
	
	setRate(newRate){
		this.mouthSettings.rate = newRate
	}
	
	getPitch(){
		return this.mouthSettings.pitch
	}
	
	setPitch(newPitch){
		this.mouthSettings.pitch = newPitch
	}
	
	getVoices(){
		return this.voices
	}
	
	selectVoice(voice){
		this.mouthSettings.selectedVoiceId = voice.id
	}
	
	getSelectedVoice(){
		return this.voices.find(
			v => v.id == this.mouthSettings.selectedVoiceId
		)
	}
	
}