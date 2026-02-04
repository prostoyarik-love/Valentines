const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const question = document.getElementById("question");
const subtext = document.getElementById("subtext");
const heartsContainer = document.getElementById("hearts");

let noScale = 1;
let yesScale = 1;

noBtn.addEventListener("click", () => {
    question.innerText = "Ты серьёзно? 😐";
    subtext.innerText = "Подумай ещё раз…";

    noScale -= 0.25;
    yesScale += 0.35;

    if (noScale <= 0.2) {
        noScale = 0.2;
        noBtn.style.pointerEvents = "none";
        subtext.innerText = "Ну всё, выбора больше нет 😏";
    }

    noBtn.style.transform = scale(${noScale});
    yesBtn.style.transform = scale(${yesScale});
});

yesBtn.addEventListener("click", () => {
    question.innerText = "Я так и знал 😍";
    subtext.innerText = "Ты сделала меня самым счастливым ❤️";

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    startHearts();
});

function startHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (18 + Math.random() * 30) + "px";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 180);
}
