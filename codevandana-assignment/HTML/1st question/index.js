let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function animateButton(value) {
    const button = document.querySelector(`button:contains("${value}")`);
    if (button) {
        button.classList.add('animated');
        setTimeout(() => button.classList.remove('animated'), 300);
    }
}

// Custom :contains() selector for button text
jQuery.expr[':'].contains = (a, i, m) => jQuery(a).text().toUpperCase()
  .indexOf(m[3].toUpperCase()) >= 0;