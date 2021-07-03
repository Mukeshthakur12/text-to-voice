var voiceList = document.querySelector('#select');
var inputText = document.querySelector('#input');
var btn = document.querySelector('#btnspeak');

var tts = window.speechSynthesis;
var h;
var voices = [];

GetVoice();
if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = GetVoice;
}

btn.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(inputText.value);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
        if (voice.name === selectedVoiceName) {
            toSpeak.voice = voice;
        }
    });
    tts.speak(toSpeak);




});
button.addEventListener('click', () => {
    var history = inputText.value;
    document.getElementById('past').innerHTML = 'are ' + history;


});


function GetVoice() {
    voices = tts.getVoices();
    var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = '';
    voices.forEach((voice) => {
        var listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });
    voiceList.selectedIndex = selectedIndex;
}