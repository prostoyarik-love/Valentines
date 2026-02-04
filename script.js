document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yes-btn");
    const noBtn = document.getElementById("no-btn");
    const question = document.getElementById("question");
    const subtext = document.getElementById("subtext");
    const heartsContainer = document.getElementById("hearts");

    let noClicks = 0;

    noBtn.addEventListener("click", () => {
        noClicks++;

        question.innerText = "Ты серьёзно? 😐";
        subtext.innerText = "Попробуй ещё раз…";

        // уменьшаем кнопку "Нет"
        const noScale = Math.max(0.25, 1 - noClicks * 0.2);
        noBtn.style.transform = scale(${noScale});

        // увеличиваем кнопку "Да"
        const yesScale = 1 + noClicks * 0.25;
        yesBtn.style.transform = scale(${yesScale});

        // окончательно отключаем "Нет"
        if (noClicks >= 4) {
            noBtn.style.pointerEvents = "none";
            subtext.innerText = "Ну всё, выбора больше нет 😏";
        }
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
            heart.className = "heart";
            heart.textContent = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = 20 + Math.random() * 25 + "px";

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, 200);
    }
});
