function showCrop() {
  alert("🌽 Makka: 90–100 din\n🍅 Tamatar: 60–70 din\n🌾 Gehu: 120 din");
}

function calculateProfit() {
  let cost = document.getElementById("cost").value;
  let income = document.getElementById("income").value;

  let profit = income - cost;
  let result = document.getElementById("result");

  if (profit > 0) {
    result.innerHTML = "✅ Profit: ₹" + profit;
    result.style.color = "green";
  } else {
    result.innerHTML = "❌ Loss: ₹" + profit;
    result.style.color = "red";
  }
}

function weatherTip() {
  let tips = [
    "🌧️ Barish me spray na kare",
    "☀️ Subah ya shaam spray kare",
    "💧 Zyada pani se bache"
  ];

  let randomTip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("weather").innerText = randomTip;
}
