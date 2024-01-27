const time = document.querySelector(".time");
const toggle = document.querySelector(".toggle");

const getTime = (ele) => {
    return ele < 10 ? `0${ele}` : ele;
}

const setTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    time.innerText = `${getTime(hours)}:${getTime(minutes)}:${getTime(seconds)}`;
}

toggle.addEventListener("click", (e) => {
    const html = document.querySelector('html');
    if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        e.target.innerText = "Dark";

    }
    else {
        html.classList.add("dark");
        e.target.innerText = "White";

    }
})

setTime()
setInterval(setTime, 1000);