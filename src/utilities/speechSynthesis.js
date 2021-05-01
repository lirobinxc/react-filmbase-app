const synth = window.speechSynthesis;
const SpeechSynth = {
  getVoices() {
    return synth.getVoices();
  },
  speak(text, voiceIndex) {
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }

    if (text) {
      const utterThis = new SpeechSynthesisUtterance(text);
      utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
      };
      utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
      };
      utterThis.pitch = 1;
      utterThis.rate = 1;
      utterThis.voice = this.getVoices()[voiceIndex];

      synth.speak(utterThis);
    }
  },
};
export default SpeechSynth;
