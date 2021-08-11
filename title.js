const title = document.querySelector(".ryan-soeyadi-title");
const titleText = title.textContent;
const splitTitle = titleText.split("");

title.textContent = "";

for (let i = 0; i < splitTitle.length; i++) {
    title.innerHTML += "<span>" + splitTitle[i] + "</span>"
}

let char = 0;
let timer = setInterval(onTick, 50);
let max = splitTitle.length;
let min = 0;
let usedNumbers = [];

function onTick() {

    var usedNumber = Math.floor(Math.random() * (max - min) + min);

    while (usedNumbers.includes(usedNumber)) {
        var usedNumber = Math.floor(Math.random() * (max - min) + min);
    }

    usedNumbers[char] = usedNumber;

    const span = title.querySelectorAll('span')[(usedNumber)];
    span.classList.add('fade');
    char++;

    if (char === splitTitle.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}