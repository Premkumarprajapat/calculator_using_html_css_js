let display = document.getElementById('display');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(op) {
    display.value += op;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;


    if (key === 'Enter') {
        event.preventDefault();  
        calculate();             
    }

   
    if (!isNaN(key) || key === '.') {
        appendNumber(key);
    }

    
    if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    }

  
    if (key === 'Backspace') {
        deleteLast();
    }

  
    if (key === 'Escape') {
        clearDisplay();
    }
});
