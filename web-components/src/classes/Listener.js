// To support server-side rendering, we can't assume "window" exists.
const SpeechRecognition = (
	typeof window != "undefined" && (
		window.SpeechRecognition ||
		window.webkitSpeechRecognition ||
		window.mozSpeechRecognition ||
		window.msSpeechRecognition
	)
)

export class Listener{
	
	earSettings = {}
	isSpeechRecognitionSupported = false
	currentSpeechRecognition = null
	
	constructor(earSettings){
		
		this.earSettings = earSettings
		this.isSpeechRecognitionSupported = !!SpeechRecognition
		
	}
	
	listen(onTextSpoken){
		
		if(!this.isSpeechRecognitionSupported){
			return
		}
		
		this.currentSpeechRecognition = new SpeechRecognition()
		
		this.currentSpeechRecognition.lang = 'en-US'
		this.currentSpeechRecognition.interimResults = false
		this.currentSpeechRecognition.start()
		
		this.currentSpeechRecognition.onresult = (event) => {
			const spokenText = event.results[0][0].transcript
			onTextSpoken(spokenText)
		}
		
	}
	
	stop(){
		if(this.currentSpeechRecognition){
			this.currentSpeechRecognition.stop()
			this.currentSpeechRecognition = null
		}
	}
	
}