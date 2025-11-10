<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>64 Quẻ Kinh Dịch - Random Huyền Học</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>🌌 Thả Quẻ Kinh Dịch 🌌</h1>
    <div id="hexagram" class="hexagram">
      <div id="symbol" class="symbol">☰</div>
      <div id="name" class="name">乾卦 (Càn)</div>
      <div id="meaning" class="meaning">Trời – cương kiện, sáng suốt, khởi đầu, lãnh đạo.</div>
    </div>
    <button id="randomBtn">Thả Quẻ</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
body {
  font-family: "Noto Serif", serif;
  background: radial-gradient(circle at center, #0d0d0d, #1a1a1a, #000);
  color: #e5d7a3;
  text-align: center;
  padding: 50px;
  margin: 0;
}

.container {
  border: 2px solid #e5d7a3;
  border-radius: 20px;
  padding: 30px;
  width: 350px;
  margin: auto;
  box-shadow: 0 0 20px #d4af37;
  background: rgba(20, 20, 20, 0.9);
}

button {
  background: #d4af37;
  color: #000;
  border: none;
  padding: 10px 25px;
  font-size: 18px;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

button:hover {
  background: #ffde7d;
}

.symbol {
  font-size: 120px;
  line-height: 1;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  margin: 20px auto;
}

.name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.meaning {
  font-size: 16px;
  opacity: 0.9;
}
const hexagrams = [
  {name: "乾卦 (Càn)", symbol: "☰", meaning: "Trời – cương kiện, sáng suốt, khởi đầu, lãnh đạo."},
  {name: "坤卦 (Khôn)", symbol: "☷", meaning: "Đất – nhu thuận, bao dung, sinh trưởng vạn vật."},
  {name: "屯卦 (Truân)", symbol: "☳☵", meaning: "Khởi đầu gian nan, cần kiên định vượt qua."},
  {name: "蒙卦 (Mông)", symbol: "☵☶", meaning: "Trẻ dại, cần khai sáng trí tuệ, học hỏi đúng đạo."},
  {name: "需卦 (Nhu)", symbol: "☰☵", meaning: "Chờ đợi thời cơ, tích lũy nội lực."},
  {name: "讼卦 (Tụng)", symbol: "☵☰", meaning: "Tranh chấp, nên dùng lý trí, tránh cứng đối cứng."},
  {name: "师卦 (Sư)", symbol: "☷☵", meaning: "Quân đội, trật tự, cần người lãnh đạo minh triết."},
  {name: "比卦 (Tỷ)", symbol: "☵☷", meaning: "Gắn bó, hợp tác, đồng tâm hiệp lực thì thành công."},
  // Bạn có thể thêm dần đủ 64 quẻ vào danh sách này
];

document.getElementById("randomBtn").addEventListener("click", () => {
  const h = hexagrams[Math.floor(Math.random() * hexagrams.length)];
  document.getElementById("symbol").textContent = h.symbol;
  document.getElementById("name").textContent = h.name;
  document.getElementById("meaning").textContent = h.meaning;
});
