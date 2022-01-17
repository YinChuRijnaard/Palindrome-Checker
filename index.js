const checkBtn = document.getElementById("check-word");
const clearBtn = document.getElementById("clear-history");
let outputField = document.getElementById("word-checked");
let array = [];

outputField.textContent = localStorage.getItem("history");

checkBtn.addEventListener("click", () => {
    const str = document.getElementById("input").value;
    array.push(str.value);
    str.value = "";
    palindrome(str);
    renderResult();
    localStorage.setItem("history", outputField.textContent);
    
    function renderResult() {
        if (str.length < 3) {
            outputMessage = `Oh, oh! Please enter at least three characters!`
        } else if (palindrome(str) === true) {
            outputMessage = `︎✔︎ '${str}' is a palindrome!`
        } else {
            outputMessage = `𐄂 '${str}' is not a palindrome!`
        }
        
        outputField.innerHTML += `${outputMessage} <br>`;
    }
    
    document.getElementById("input").value = ""; // clear input field after clicking on checkBtn
})

function palindrome(str) {
    const lettersOnly = str.toLowerCase().match(/[a-z0-9]/g);
    return lettersOnly.join("") === lettersOnly.reverse().join("");
}

function renderNew() {
    outputField.textContent = "";
}

clearBtn.addEventListener("click", () => {
    localStorage.clear();
    let array = [];
    renderNew();
})