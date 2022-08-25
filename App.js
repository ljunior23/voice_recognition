const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const greetings = [
    'Im good you little peice of love', 
    'Doing good dude', 
    'What is good about the day'
];

const weather = [
    'Weather is fine',
    'You will need an umbrella'
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();


recognition.onstart = function(){
    console.log('voice is activated, you can to microphonee');
};

recognition.onresult = function(event){
   const current = event.resultIndex;

   const transcript = event.results[current][0].transcript;
   content.textContent =transcript;
   readOutLoud(transcript);

};

//add the listner to the btn


btn.addEventListener('click', () => {
    recognition.start();
});

const readOutLoud = (message) =>{
    const speech = new SpeechSynthesisUtterance();

     

    if(message.includes('how are you')){
        speech.text = 
            greetings[Math.floor(Math.random() * greetings.length)];
        
    } else if (message.includes('Tell me about the weather')){
        speech.text =
            weather[Math.floor(Math.random()* weather.length)];
        
    }else {
        speech.text = 'I dont know what you said';
    }


   
    speech.volume = 1;
    speech.rate =  1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}
