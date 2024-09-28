// Get the display element
const display = document.getElementById('display');

// Get all the button elements
const buttons = document.querySelectorAll('.buttons button');

// Initialize the current expression
let currentExpression = '';

// Add event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        // Handle operator buttons
        if (value === 'C') {
            currentExpression = '';
            display.value = '';
        } else if (value === '<') {
            currentExpression = currentExpression.slice(0, -1);
            display.value = currentExpression;
        } else if (value === '=') {
            try {
                const result = eval(currentExpression);
                display.value = result;
                currentExpression = result.toString();
            } catch (error) {
                display.value = 'Error';
                currentExpression = '';
            }
        } else {
            currentExpression += value;
            display.value = currentExpression;
        }
    });
});