const claimButton =
document.getElementById("claimButton");

const rewardStatus =
document.getElementById("rewardStatus");

const today =
new Date().toDateString();

const lastClaim =
localStorage.getItem("lastClaim");

if (lastClaim === today) {

    claimButton.disabled = true;

    rewardStatus.textContent =
    "✅ You have already claimed today's reward.";
}

claimButton.addEventListener("click", () => {

    let coins =
    Number(localStorage.getItem("coin"))
    || 0;

    coins += 100;

    localStorage.setItem(
        "coin",
        coins
    );

    localStorage.setItem(
        "lastClaim",
        today
    );

    rewardStatus.textContent =
    "🎉 +100 Coins added!";

    claimButton.disabled = true;

    if (
        typeof updateCoinDisplay ===
        "function"
    ) {
        updateCoinDisplay();
    }
});