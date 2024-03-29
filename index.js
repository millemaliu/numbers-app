


async function add() {
    const a = document.getElementById("first");
    const b = document.getElementById("second");
    const x = document.getElementById("answer");
    let first = parseInt(a.value);
    let second = parseInt(b.value);
    
    const response = await fetch("https://arithmetic-service-68hv.onrender.com/add/" + first + "/" + second);
    const sum = await response.json();
    
    
    x.innerHTML = sum;
}


async function subtract() {
    const a = document.getElementById("first-");
    const b = document.getElementById("second-");
    const x = document.getElementById("answer-");
    let first = parseInt(a.value);
    let second = parseInt(b.value);
    
    const response = await fetch("https://arithmetic-service-68hv.onrender.com/subtract/" + first + "/" + second);
    const sum = await response.json();
    
    
    x.innerHTML = sum;
}


async function divide() {
    const a = document.getElementById("firstd");
    const b = document.getElementById("secondd");
    const x = document.getElementById("answerd");
    let first = parseInt(a.value);
    let second = parseInt(b.value);
    
    const response = await fetch("https://arithmetic-service-68hv.onrender.com/divide/" + first + "/" + second);
    const sum = await response.json();
    
    
    x.innerHTML = sum;
}


async function multiply() {
    const a = document.getElementById("first*");
    const b = document.getElementById("second*");
    const x = document.getElementById("answer*");
    let first = parseInt(a.value);
    let second = parseInt(b.value);
    
    const sum = await response.json();
    
    
    x.innerHTML = sum;
}


async function isPrime() {
    const b = document.getElementById("text");
    let to_test = parseInt(b.value);

    const response = await fetch("https://ciphers-service-latest-s4n3.onrender.com/ciphers/caesar/" + to_test + "/3");
    const result = await response.json();

    x.innerHTML = result;
}
