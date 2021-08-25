console.log('main.js is connected');

// connect to output display
let output = document.getElementById('outputDisplay');
    console.log(output);
let count = 0;

// send new number to screen
let newNum = document.getElementById('newNum');
    newNum = Number(newNum.value);
    console.log(newNum);

// add function to add on click event
let minusNum = document.getElementById('minus');
    minusNum.onclick = function() {
        sub();
        console.log('something was subtracted');
    }

let addNum =  document.getElementById('plus');
    addNum.onclick = function() {
        add();
        console.log('Add me back in the game');
    }

// add the inserted number to the count
function add () {
    console.log(newNum + count)
        output.textContent = newNum + count;  
        
}
add();

// subtracted 1 from the inserted number and inverse the sign to negative
function sub () {
    output.textContent = -(newNum - 1);
}
sub();

