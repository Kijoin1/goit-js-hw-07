const inputElem = document.querySelector('#name-input')
const outputElem = document.querySelector('#name-output')
inputElem.addEventListener('input', inputNow);
function inputNow() {
    const value = inputElem.value
    if (value.trim().length > 0) { 
        return outputElem.textContent = value.trim()
    } else {
        return outputElem.textContent = "Anonymous";
    }
}