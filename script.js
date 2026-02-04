document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const question = document.getElementById("question");
    const subtext = document.getElementById("subtext");

    let noCount = 0;

    noBtn.addEventListener("click", () => {
        noCount++;

        question.textContent = "Ты серьёзно? 😐";
        subtext.textContent = "Подумай ещё раз…";

        // уменьшаем "Нет"
        const noScale = Math.max(0.4, 1 - noCount * 0.2);
        noBtn.style.transform = scale(${noScale});

        // увеличиваем "Да"
        const yesScale = 1 + noCount * 0.25;
        yesBtn.style.transform = scale(${yesScale});

        if (noCount >= 4) {
            noBtn.disabled = true;
            subtext.textContent = "Лад
