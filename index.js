const a = document.getElementById("first");
const b = document.getElementById("second");
const x = document.getElementById("answer");


function newAnswer() {
    var first = parseInt(a.value);
    var second = parseInt(b.value);
    x.innerHTML = first + second;
}
