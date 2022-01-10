let value = document.querySelector('#value');
let decrease = document.querySelector('.decrease');
let increase = document.querySelector('.increase');
let reset = document.querySelector('.reset')

let count = 0;

updateDisplay();

increase.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

decrease.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

reset.addEventListener("click",()=>{
    count = 0;
    updateDisplay();
})

function updateDisplay(){
    value.innerHTML = count;
};