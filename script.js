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
    else if(message.includes("open fblite")){
        window.open(`https://www.facebook.com`, "_blank");
        const finalText = "Opening facebook lite";
        speech.text = finalText;
    }
    else if(message.includes("open messenger")){
        window.open(`https://www.messenger.com`, "_blank");
        const finalText = "Opening messenger";
        speech.text = finalText;
    }
    else if(message.includes("open telegram")){
        window.open(`https://www.telegram.org`, "_blank");
        const finalText = "Opening telegram";
        speech.text = finalText;
    }
    else if(message.includes("open whatsapp")){
        window.open(`https://www.whatsapp.com`, "_blank");
        const finalText = "Opening whatsapp";
        speech.text = finalText;
    }
    else if(message.includes("open whatsappclone")){
        window.open(`https://www.whatsapp.com`, "_blank");
        const finalText = "Opening whatsapp";
        speech.text = finalText;
    }
    else if(message.includes("open twitter")){
        window.open(`https://www.twitter.com`, "_blank");
        const finalText = "Opening twitter";
        speech.text = finalText;
    }
    else if(message.includes("open youtube")){
        window.open(`https://www.youtube.com`, "_blank");
        const finalText = "Opening youtube";
        speech.text = finalText;
    }
    else if(message.includes("open flipkart")){
        window.open(`https://www.flipkart.com`, "_blank");
        const finalText = "Opening flipkart";
        speech.text = finalText;
    }
    else if(message.includes("open amazon")){
        window.open(`https://www.amazon.com`, "_blank");
        const finalText = "Opening amazon";
        speech.text = finalText;
    }
    else if(message.includes("open gpay")){
        window.open(`https://pay.google.com`, "_blank");
        const finalText = "Opening google pay";
        speech.text = finalText;
    }
    else if(message.includes("open icicibankapp")){
        window.open(`https://www.icicibank.com`, "_blank");
        const finalText = "Opening imobile";
        speech.text = finalText;
    }
    else if(message.includes("open mobikwik")){
        window.open(`https://www.mobikwik.com`, "_blank");
        const finalText = "Opening mobikwik";
        speech.text = finalText;
    }
    else if(message.includes("open myntra")){
        window.open(`https://www.myntra.com`, "_blank");
        const finalText = "Opening myntra";
        speech.text = finalText;
    }
    else if(message.includes("open paytm")){
        window.open(`https://www.paytm.com`, "_blank");
        const finalText = "Opening paytm";
        speech.text = finalText;
    }

    else if(message.includes("open phonepe")){
        window.open(`https://www.phone.com`, "_blank");
        const finalText = "Opening phonepe";
        speech.text = finalText;
    }
    else if(message.includes("open swiggy")){
        window.open(`https://www.swiggy.com`, "_blank");
        const finalText = "Opening swiggy";
        speech.text = finalText;
    }
    else if(message.includes("open zomato")){
        window.open(`https://www.zomato.com`, "_blank");
        const finalText = "Opening zomato";
        speech.text = finalText;
    }
    else if(message.includes("open payzapp")){
        window.open(`https://v.hdfcbank.com`, "_blank");
        const finalText = "Opening payzapp";
        speech.text = finalText;
    }
    else if(message.includes("open kotak")){
        window.open(`https://app.kotak.com`, "_blank");
        const finalText = "Opening kotak";
        speech.text = finalText;
    }
    else if(message.includes("open gmail")){
        window.open(`https://www.gmail.com`, "_blank");
        const finalText = "Opening gmail";
        speech.text = finalText;
    }
    else if(message.includes("open location")){
        window.open(`https://www.maps.google.com`, "_blank");
        const finalText = "Opening location";
        speech.text = finalText;
    }
    else if(message.includes("open drive")){
        window.open(`https://drive.google.com`, "_blank");
        const finalText = "Opening drive";
        speech.text = finalText;
    }
    else if(message.includes("open jio")){
        window.open(`https://www.jio.com`, "_blank");
        const finalText = "Opening jio";
        speech.text = finalText;
    }
    else if(message.includes("open saavn")){
        window.open(`https://www.jiosaavn.com`, "_blank");
        const finalText = "Opening jiosaavn";
        speech.text = finalText;
    }
    else if(message.includes("open meesho")){
        window.open(`https://www.meesho.com`, "_blank");
        const finalText = "Opening meesho";
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







