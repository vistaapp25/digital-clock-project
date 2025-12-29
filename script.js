const btn_12 = document.getElementById("btn-12")
const btn_24 = document.getElementById("btn-24")
const time = document.getElementById("time")
const ampm = document.getElementById("ampm")
const date = document.getElementById("date")
const day = document.getElementById("day")

let hour12 = true;

function pad(n) {
    return String(n).padStart(2, "0")
}

const clock = () => {
    const now = new Date ()

    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()

    let AmPm = "";

    if (hour12) {
        AmPm = h >= 12 ? "PM":"AM";
        h = h % 12 || 12;
    }

    time.textContent = `${pad(h)}:${pad(m)}:${pad(s)}`;
    ampm.textContent = AmPm 
    ampm.style.display = hour12 ? "block" : "none"

    let nowDate = now.toLocaleDateString("en-US" , {
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    let nowDay = now.toLocaleDateString("en-US" , {
        weekday: "long"       
    }) 

    date.textContent = nowDate;
    day.textContent = nowDay;

}
function toggleFormat(is12Hour) {
    hour12 = is12Hour;
    btn_12.classList.toggle("activeToggle", is12Hour);
    btn_24.classList.toggle("activeToggle", !is12Hour);
}

btn_12.addEventListener("click", () => toggleFormat(true));
btn_24.addEventListener("click", () => toggleFormat(false));



setInterval(clock, 1000)