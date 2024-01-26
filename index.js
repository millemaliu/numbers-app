


async function newAnswer() {
    const a = document.getElementById("first");
    const b = document.getElementById("second");
    const x = document.getElementById("answer");
    let first = parseInt(a.value);
    let second = parseInt(b.value);
    
    const response = await fetch("http://localhost:3000/add/" + first + "/" + second);
    const sum = await response.json();
    
    
    x.innerHTML = sum;
}
