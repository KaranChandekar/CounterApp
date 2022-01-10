let value = document.querySelector('#value');
let decrease = document.querySelector('.decrease');
let increase = document.querySelector('.increase');
let reset = document.querySelector('.reset')

let count = 0;

updateDisplay();

increase.addEventListener("click",()=>{
    count++;
    updateDisplay();
    value.style.color = "green";
}) ;

decrease.addEventListener("click",()=>{
    count--;
    updateDisplay();
    value.style.color = "red";
});

reset.addEventListener("click",()=>{
    count = 0;
    updateDisplay();
    value.style.color = "hsl(209, 61%, 16%)"
})

function updateDisplay(){
    value.innerHTML = count;
};