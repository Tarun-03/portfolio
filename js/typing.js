const words = [

"Software Engineer",

"Full Stack Developer",

"Java Developer",

"Machine Learning Enthusiast"

];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function type(){

    currentWord = words[wordIndex];

    if(!isDeleting){

        document.getElementById("typing").textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            isDeleting = true;

            setTimeout(type,1200);

            return;
        }

    }

    else{

        document.getElementById("typing").textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex==words.length)
                wordIndex=0;
        }

    }

    setTimeout(type,isDeleting?60:120);

}

type();