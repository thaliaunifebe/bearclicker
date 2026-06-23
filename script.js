let score = 0;
let clickValue = 1;
let upgrades = 0;

const scoreText = document.getElementById("score");
const clickValueText = document.getElementById("clickValue");
const upgradesText = document.getElementById("upgrades");
const victoryText = document.getElementById("victory");

document.getElementById("clickBtn").addEventListener("click", function () {
    score += clickValue;
    updateScreen();

});

function buyUpgrade(type) {

    if (type === 1 && score >= 10) {
        score -= 10;
        clickValue += 1;
        upgrades++;
    }
    else if (type === 2 && score >= 50) {
        score -= 50;
        clickValue += 8;
        upgrades++;
    }
    else if (type === 3 && score >= 100) {
        score -= 100;
        clickValue += 32;
        upgrades++;
    }
    else {
        alert("Pontos insuficientes!");
    }

    updateScreen();
}

function updateScreen() {
    scoreText.textContent = score;
    clickValueText.textContent = clickValue;
    upgradesText.textContent = upgrades;
}