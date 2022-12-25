const _btn = document.getElementById("btn");
const _content = document.getElementById("content");
const _nameVar = 'hello krishna';


// btn animation 

_btn.onclick = ()=>{
    _btn.classList.add("active");
    setTimeout(() => {
        _btn.classList.remove("active"); 
    }, 2000);
}




function speak(sentence){
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}


function wishMe(){
    let day = new Date();
    let hours = day.getHours();

    if(hours>=0 && hours<12){
        speak("Good Morning");
    }
    else if(hours==12){
        speak("Good Noon");
    }
    else if(hours>12 && hours<=17){
        speak("Good Afternoon");
    }
    else if(hours>17 && hours<=19){
        speak("Good Evening")
    }
    else{
        speak("Good Night");
    }
}

window.addEventListener("load", function(){
    speak('Activating Krishna');
    speak("Going Online");
    wishMe();
})



const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onresult = (event)=>{
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    _content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

_btn.addEventListener('click', ()=>{
    recognition.start();
})


function speakThis(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey krishna') || message.includes(_nameVar) || message.includes("hi krishna")){
        const finalText = "Hello Bhakt";
        speech.text = finalText;
    }
    else if(message.includes('how are you krishna')){
        const finalText = "I am fine bhakt tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('tell me something about yourself')){
        const finalText = "my name is krishna a cool and javascript voice assistant created by himanshu sharma i am free and host on github platform if you want to know the source code this project go to the https://github.com/himanshu123cool/ website or himanshuportfolio.netlify.app website.";
        speech.text = finalText;
    }

    else if(message.includes("your name")){
        const finalText = "my name is krishna";
        speech.text = finalText;
    }

    else if(message.includes("open google")){
        window.open(`https://www.google.com`, "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    else if(message.includes("open instagram")){
        window.open(`https://www.instagram.com`, "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if(message.includes("open facebook")){
        window.open(`https://www.facebook.com`, "_blank");
        const finalText = "Opening facebook";
        speech.text = finalText;
    }
    else if(message.includes("open twitter")){
        window.open(`https://www.twitter.com`, "_blank");
        const finalText = "Opening twitter";
        speech.text = finalText;
    }
    else if(message.includes("what is") || message.includes("who is") || message.includes("where is") || ("when was")){
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes("search website "+ message)){
        window.open(`${message.replace("https://", " ")}`, "_blank");
        const finalText = "This is website you have search" + message;
        speech.text = finalText;
    }

    else if(message.includes("wikipedia")){
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", " ")}`, "_blank");
        const finalText = "This is what I found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes("current time")){
        const _time = new Date().toLocaleString({hour: "numeric", minute: "numeric"});
        const finalText = _time;
        speech.text = finalText;
    }

    else if(message.includes("today date")){
        const _date = new Date().toLocaleString({month: "short", day: "numeric"});
        const finalText = _date;
        speech.text = finalText;
    }

    else if(message.includes("open calculator")){
        window.open("calculator:///");
        const finalText = "opening calculator";
        speech.text = finalText;
    }

    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}







