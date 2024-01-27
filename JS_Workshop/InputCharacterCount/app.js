const count = document.querySelector("#count");
const inputText = document.querySelector("input[type=text]");
console.log(inputText)

inputText.addEventListener("keyup", () => {
    count.innerText = inputText.value.length;
})