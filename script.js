let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let str = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            str = eval(str); // Calculate the result
        } else if (value == 'AC') {
            str = ""; // Clear the input
        } else if (value == 'DEL') {
            str = str.slice(0, -1); // Remove the last character
        } else {
            str += value; // Add the button's value to the input string
        }

        input.value = str; // Update the input box
    });
});

