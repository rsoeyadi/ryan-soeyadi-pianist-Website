const title = document.querySelector(".ryan-soeyadi-title");

const titleText = title.textContent;

const splitTitle = titleText.split("");
title.textContent = "";
console.log(splitTitle);

for (let i = 0; i < splitTitle.length; i++) {

    
        title.innerHTML += "<span>" + splitTitle[i] + "</span>"

    
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = title.querySelectorAll('span')[char];
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