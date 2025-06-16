// counter app with closure logic
function counterClosure() {
  let count = 0; // private variable, so it can only be accessed by inner function 

  return function(action) {         // inner function takes action as parameter or argument
    if (action === 'inc') count++;
    else if (action === 'dec') count--;
    else if (action === 'reset') count = 0;

    return count;
  };
}

const counter = counterClosure(); // the counter becomes reference to counterClosure now everytime counter is called inner funtion will work

const display = document.getElementById('display'); // we take html element that has id as display

//LOGIC 
/* we access button with id increment and whenever we add an event listner
    whenever now we click on increment we call counter('increment') and update the text of display
    and same is done for decrement and reset */

document.getElementById('increment').onclick = () => { 
  display.textContent = counter('inc');
};

document.getElementById('decrement').onclick = () => {
  display.textContent = counter('dec');
};

document.getElementById('reset').onclick = () => {
  display.textContent = counter('reset');
};
