document.addEventListener('DOMContentLoaded', function () {
    // Arithmetic functions
    function add(number1, number2) {
        return number1 + number2;
    }

    function subtract(number1, number2) {
        return number1 - number2;
    }

    function multiply(number1, number2) {
        return number1 * number2;
    }

    function divide(number1, number2) {
        if (number2 === 0) {
            return 'Error: Division by zero';
        }
        return number1 / number2;
    }

    // Helper to read inputs
    function readInputs() {
        const n1 = parseFloat(document.getElementById('number1').value);
        const n2 = parseFloat(document.getElementById('number2').value);
        return [isNaN(n1) ? 0 : n1, isNaN(n2) ? 0 : n2];
    }

    function showResult(value) {
        document.getElementById('calculation-result').textContent = value;
    }

    // Attach event listeners
    document.getElementById('add').addEventListener('click', function () {
        const [n1, n2] = readInputs();
        showResult(add(n1, n2));
    });

    document.getElementById('subtract').addEventListener('click', function () {
        const [n1, n2] = readInputs();
        showResult(subtract(n1, n2));
    });

    document.getElementById('multiply').addEventListener('click', function () {
        const [n1, n2] = readInputs();
        showResult(multiply(n1, n2));
    });

    document.getElementById('divide').addEventListener('click', function () {
        const [n1, n2] = readInputs();
        showResult(divide(n1, n2));
    });

    // Expose functions for testability (optional)
    window.add = add;
    window.subtract = subtract;
    window.multiply = multiply;
    window.divide = divide;
});
