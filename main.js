const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

const lvls = {
    Easy: 5,
    Normal: 3,
    Hard: 2
};

console.log(lvls.length)
// let selectors = Array.from(document.querySelectorAll(".select option"))

// console.log(selectors[0].getAttribute("value"))
// console.log(selectors[1].getAttribute("value"))
// console.log(selectors[2].getAttribute("value"))

// for(i = 0 ; i > )

let select = document.querySelector(".select")
select.remove()

// Default Level
let defaultLevelName =  "Easy" //selectors[0].getAttribute("value")
let defaultLevelSeconds = lvls[defaultLevelName];

//add selectors 
let lvl = document.querySelector(".massege .lvl")
let seconds = document.querySelector(".massege .seconds")
let start = document.querySelector(".start")
let word =document.querySelector(".the-word")
let input =document.querySelector(".input")
let upcoming =document.querySelector(".upcoming-words")
let time =document.querySelector(".time span")
let ScoreGot =document.querySelector(".Score .got")
let ScoreTotal =document.querySelector(".Score .total")
let finish =document.querySelector(".finish")


lvl.innerHTML = defaultLevelName
seconds.innerHTML = defaultLevelSeconds
time.innerHTML = defaultLevelSeconds
ScoreTotal.innerHTML = words.length

input.onpaste = function(){
    return false;
}

start.onclick =  function (){
    this.remove()
    input.focus()
    genWords()
}

function genWords () {
    let random = words[Math.floor(Math.random() * words.length)]
    let index = words.indexOf(random)
    words.splice(index , 1)
    word.innerHTML = random
    upcoming.innerHTML = ""
    for(i = 0 ; i < words.length ; i++){
        let div = document.createElement("div")
        div.appendChild(document.createTextNode(words[i]))
        upcoming.appendChild(div)
    }
    startPlay();
}

function startPlay() {
    time.innerHTML = defaultLevelSeconds
    let start = setInterval(() => {
    time.innerHTML--;
    if (time.innerHTML === "0") {
        clearInterval(start);
        if (word.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        input.value = '';
        ScoreGot.innerHTML++;
        if (words.length > 0 ){
            genWords()
        }else{
            let span = document.createElement("span")
            span.className = 'good'
            let spanText = document.createTextNode("Congratz");
            span.appendChild(spanText);
            finish.appendChild(span);
            upcoming.remove()
        }
        } else {
        let span = document.createElement("span");
        span.className = 'bad';
        let spanText = document.createTextNode("Game Over");
        span.appendChild(spanText);
        finish.appendChild(span);
        }
    }
    }, 1000);
    }

    
