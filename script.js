let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');


buttons.forEach(function(b, index){
    b.addEventListener('click', function(){
        let value = b.dataset.num;
        screen.textContent += value;
    })
})

equal.addEventListener('click',function(){
    let ans = eval(screen.textContent)
    screen.textContent = ans;
})

clear.addEventListener('click',function(){
    screen.textContent = "";
})