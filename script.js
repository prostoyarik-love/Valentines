const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const text = document.getElementById("text");
const question = document.getElementById("question");

noBtn.onclick = function () {
    text.textContent = "Ты серьёзно?";
};

yesBtn.onclick = function () {
    question.textContent = "УРА ❤️";
    text.textContent = "Ты моя валентинка!";
    yesBtn.disabled = true;
    noBtn.disabled = true;
};
