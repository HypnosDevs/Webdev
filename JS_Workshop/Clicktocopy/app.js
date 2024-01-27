const code = document.querySelector("#codeFilled");
const button = document.querySelector("button");
const text = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const getRandomchar = (arr) => arr[Math.floor(Math.random() * text.length)];

button.addEventListener("click", () => {
    navigator.clipboard.writeText(code.value)
        .then(
            (success) => {
                console.log("text copied");
                button.textContent = "Copy Success";
                setTimeout(() => {
                    button.textContent = "Copy";
                }, 1000);

            },
            (err) => console.log("error copying text")
        );
});

const showCode = () => {
    let str = '';
    for (let i = 0; i < 16; i++) {
        str += getRandomchar(text).toUpperCase();
    }
    code.value = str;
}

showCode();