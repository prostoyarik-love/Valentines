const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const text = document.getElementById("text");
const question = document.getElementById("question");

let noClicks = 0;

noBtn.onclick = function () {
    noClicks++;

    text.textContent = "Ты серьёзно? 😐";

    // уменьшаем "Нет"
    noBtn.style.transform = "scale(" + (1 - noClicks * 0.15) + ")";

    // увеличиваем "Да"
    yesBtn.style.transform = "scale(" + (1 + noClicks * 0.2) + ")";

    if (noClicks >= 4) {
        noBtn.disabled = true;
        text.textContent = "Ладно, выбора нет 😏";
    }
};

yesBtn.onclick = function () {
    question.textContent = "Я так и знал 😍";
    text.textContent = "Ты сделала меня самым счастливым ❤️";

    yesBtn.disabled = true;
    noBtn.disabled = true;
};
