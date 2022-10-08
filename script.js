let count = document.getElementById('count');
let inc = document.getElementById('inc');
let dec = document.getElementById('dec');

inc.addEventListener("click", () => {
    count.innerHTML++;
});
dec.addEventListener("click", () => {
    count.innerHTML--;
});