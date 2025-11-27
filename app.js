const persons = document.querySelectorAll(".person");

persons.forEach(person => {
    person.addEventListener("click", function () {
        const coords = this.getAttribute("data-coords");
        const iframe = document.getElementById("mapFrame");

        iframe.src = `https://www.google.com/maps?q=${coords}&output=embed`;


        document.getElementById("locationDiv").style.display = "block";
    });
});
let countDownTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;

let timer = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownTime - now;


    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";


    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Vaqt tugadi!";
    }
}, 1000);