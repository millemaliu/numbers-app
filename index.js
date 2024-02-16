


async function newAnswer() {
    const a = document.getElementById("first");
    const b = document.getElementById("second");
    const x = document.getElementById("answer");
    let first = parseInt(a.value);
    let second = parseInt(b.value);
    
    const response = await fetch("https://arithmetic-service-68hv.onrender.com/add/" + first + "/" + second);
    const sum = await response.json();
    
    
    x.innerHTML = sum;
}
