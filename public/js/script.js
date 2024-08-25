const display = document.getElementById("display")
const clearDisplay = document.getElementById("clearDisplay")

clearDisplay.addEventListener('click', function() {
    display.value = ''
})

function showOnDisplay(value) {
    display.value += value
}

function calculate() {
    try {
        display.value = eval(display.value)
    } catch(error) {
        display.value = 'ERRO!'
    }
}

function powerTwo() {
    try {
        display.value = display.value ** 2
    } catch(error) {
        display.value = 'ERRO!'
    }
}