import React, { useState } from 'react';
import SpeechSynth from '../utilities/speechSynthesis';

const voices = SpeechSynth.getVoices();

const Speech = () => {
  const [text, setText] = useState('');
  const [voiceIndex, setVoiceIndex] = useState(0);

  const handleTextInput = (e) => {
    setText(e.target.value);
  };
  const handleEnter = (e) => {
    e.preventDefault();
    // Enter = keyCode 13
    if (e.keyCode === 13) {
      SpeechSynth.speak(text, voiceIndex);
    }
  };
  console.log(voices);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleTextInput}
        onKeyUp={handleEnter}
      />
      <button onClick={() => SpeechSynth.speak(text, voiceIndex)}>SPEAK</button>
      <div>
        <label htmlFor="voice">Choose a Voice:</label>
        <select name="voice" id="voice">
          {voices.map((ele, i) => {
            return <option value={i}>"WOW"</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default Speech;
