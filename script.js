let num = 0;
const incBtn = document.querySelector('.inc button');
const decBtn = document.querySelector('.dec button');
incBtn.addEventListener('clicked', () => {
    const score = document.querySelector('.number h1');
    console.log("yes");
    score.innerHTML = num++;
});
decBtn.addEventListener('clicked', () => {
    const score = document.querySelector('.number h1');
    score.textContent = num--;
});
// let add = document.getElementById('inc');
// let sub = document.getElementById('dec');
// let num = document.getElementById('number');
// let n = 0;

// add.addEventListener('click', () => {
//     n++;
//     num.innerHTML=n;
// });
