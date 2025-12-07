// Calculator functions (root copy)
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
    if (number2 === 0) return 'Error: Division by zero';
    return number1 / number2;
}

// helper to read inputs and display
function readInputs() {
    const n1 = parseFloat(document.getElementById('number1')?.value);
    const n2 = parseFloat(document.getElementById('number2')?.value);
    return [isNaN(n1) ? 0 : n1, isNaN(n2) ? 0 : n2];
}

function showResult(value) {
    const el = document.getElementById('calculation-result');
    if (el) el.textContent = value;
}

// attach listeners if elements exist (safe for root)
document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById('add');
    const subBtn = document.getElementById('subtract');
    const mulBtn = document.getElementById('multiply');
    const divBtn = document.getElementById('divide');

    if (addBtn) addBtn.addEventListener('click', function () { const [n1,n2]=readInputs(); showResult(add(n1,n2)); });
    if (subBtn) subBtn.addEventListener('click', function () { const [n1,n2]=readInputs(); showResult(subtract(n1,n2)); });
    if (mulBtn) mulBtn.addEventListener('click', function () { const [n1,n2]=readInputs(); showResult(multiply(n1,n2)); });
    if (divBtn) divBtn.addEventListener('click', function () { const [n1,n2]=readInputs(); showResult(divide(n1,n2)); });
});
