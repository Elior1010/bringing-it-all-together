// Function to process user input
function processInput() {
    let input = document.getElementById('textInput').value;
    if (validateInput(input)) {
        // Decision Logic: Change background if specific condition is met
        if (input === 'blue') {
            document.body.style.backgroundColor = 'blue';
        } else {
            document.body.style.backgroundColor = 'white';
        }

        // Loop: Display characters of the string
        displayCharacters(input);
    } else {
        alert('Invalid input!');
    }
}

// Function for string validation
function validateInput(input) {
    // String Manipulation and Validation: Check if input is not empty
    return input.trim().length > 0;
}

// Function to display each character of the string
function displayCharacters(str) {
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output
    for (let char of str) {
        let p = document.createElement('p');
        p.textContent = `Character: ${char}`;
        outputDiv.appendChild(p);
    }
}

// Example class (optional based on your design)
class ExampleClass {
    constructor() {
        // Class properties
    }

    // Class method
    exampleMethod() {
        // Method logic
    }
}
