// Get the display element
const display = document.getElementById("display");

// Function to append input to the display
function appendToDisplay(input) {
    display.value += input;
}

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to calculate the result
function calculate() {
    try {
        // Create a function to safely evaluate the expression
        const expression = display.value;
        const result = new Function('return ' + expression)();
        
        // Display the result or handle cases where evaluation fails
        display.value = result !== undefined ? result : "Error";
    } catch (error) {
        display.value = "Error";
    }
}
