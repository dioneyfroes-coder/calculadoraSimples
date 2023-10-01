const botoes = document.querySelectorAll('buttons');

function clearDisplay() {
    
    const display = document.getElementById('display'); 
    display.value = ''; 
};

function appendToDisplay(value) {

    let currentValue = display.value;
    currentValue += value;
    display.value = currentValue;
};

function calculateResult() {

    const expression = display.value;

    try {

        const result = eval(expression);

        display.value = result;
    } catch( error ) {

        alert(`Erro de cálculo: ${error.message}`);
    };
};

document.addEventListener('keydown', function(event) {

    const key = event.key;

    if( /^[0-9+\-*/]$/.test(key) ) {

        appendToDisplay( key );
    } else if ( key === 'Enter' || key === '=' ) {

        calculateResult();
    } else if ( key === 'Escape' ) {

        clearDisplay();
    };
});