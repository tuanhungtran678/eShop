if (localStorage.getItem("coin") === null) {
    localStorage.setItem("coin", "1000");
}

function updateCoinDisplay() {

    const coinElement =
    document.getElementById("coinBalance");

    if (!coinElement) return;

    const coins =
    Number(localStorage.getItem("coin"));

    coinElement.textContent =
    coins.toLocaleString();
}

updateCoinDisplay();