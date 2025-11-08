<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thả Quẻ Kinh Dịch Huyền Bí</title>
<style>
  body {
    background: radial-gradient(circle at center, #0d0d0d, #000);
    color: #f0e6d2;
    font-family: 'Times New Roman', serif;
    text-align: center;
    height: 100vh;
    margin: 0;
    overflow: hidden;
  }

  h1 {
    font-size: 2.2em;
    margin-top: 50px;
    text-shadow: 0 0 15px #f5e2a4;
  }

  .circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid #c4a962;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    font-size: 2em;
    text-shadow: 0 0 20px #f5e2a4;
    box-shadow: 0 0 40px #c4a962 inset, 0 0 20px #c4a962;
    animation: rotate 10s linear infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  button {
    background: #c4a962;
    border: none;
    color: #000;
    padding: 10px 25px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background: #f5e2a4;
    transform: scale(1.1);
  }

  .result {
    font-size: 1.2em;
    margin-top: 30px;
    line-height: 1.6em;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .smoke {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://i.ibb.co/6YShYWS/smoke.gif') center/cover no-repeat;
    opacity: 0.2;
    z-index: -1;
  }

  .gua-line {
    line-height: 1.5;
  }
</style>
</head>
<body>
<div class="smoke"></div>
<h1>🔮 Quẻ Kinh Dịch 🔮</h1>
<div class="circle" id="guaSymbol">☯</div>
<button onclick="drawHexagram()">Thả Quẻ</button>
<div class="result" id="result"></div>

<script>
const hexagrams = [
  {num: 1,  name: "乾卦 (Càn)", symbol: ["——","——","——","——","——","——"], meaning: "Trời – cương kiện, sáng suốt, khởi đầu, lãnh đạo."},
  {num: 2,  name: "坤卦 (Khôn)", symbol: ["——","——","——","——","——","——"], meaning: "Đất – nhu thuận, bao dung, sinh trưởng vạn vật."},
  {num: 3,  name: "屯卦 (Truân)", symbol: ["——","— —","——","——","——","——"], meaning: "Khởi đầu gian nan, cần kiên định vượt qua."},
  {num: 4,  name: "蒙卦 (Mông)", symbol: ["——","——","——","— —","——","— —"], meaning: "Trẻ dại, cần khai sáng trí tuệ, học hỏi đúng đạo."},
  {num: 5,  name: "需卦 (Nhu)", symbol: ["——","——","——","——","——","— —"], meaning: "Chờ đợi thời cơ, tích lũy nội lực."},
  {num: 6,  name: "讼卦 (Tụng)", symbol: ["——","——","——","— —","——","——"], meaning: "Tranh chấp, nên dùng lý trí, tránh cứng đối cứng."},
  {num: 7,  name: "师卦 (Sư)", symbol: ["——","——","——","——","——","——"], meaning: "Quân đội, trật tự, cần người lãnh đạo minh triết."},
  {num: 8,  name: "比卦 (Tỷ)", symbol: ["——","——","——","——","——","——"], meaning: "Gắn bó, hợp tác, đồng tâm hiệp lực thì thành công."},
  {num: 9,  name: "小畜卦 (Tiểu Súc)", symbol: ["——","——","— —","——","——","——"], meaning: "Tích lũy nhỏ, chờ thời, tránh nóng vội."},
  {num:10,  name: "履卦 (Lý)", symbol: ["——","——","——","——","——","— —"], meaning: "Cẩn trọng khi bước đi, giữ đạo giữa nguy hiểm."},
  {num:11,  name: "泰卦 (Thái)", symbol: ["——","——","——","——","——","——"], meaning: "Trời đất giao hòa, thuận lợi, hanh thông."},
  {num:12,  name: "否卦 (Bĩ)", symbol: ["——","——","——","——","——","——"], meaning: "Bế tắc, âm dương không giao, cần chờ vận đổi."},
  {num:13,  name: "同人卦 (Đồng Nhân)", symbol: ["——","——","——","——","——","——"], meaning: "Đồng lòng hợp chí, đoàn kết sẽ thắng."},
  {num:14,  name: "大有卦 (Đại Hữu)", symbol: ["——","——","——","——","——","——"], meaning: "Cực thịnh, đại phú, đại quý, giữ đạo mà tồn."},
  {num:15,  name: "谦卦 (Khiêm)", symbol: ["——","——","——","——","——","——"], meaning: "Khiêm nhường, càng khiêm càng thịnh."},
  {num:16,  name: "豫卦 (Dự)", symbol: ["——","——","——","——","——","——"], meaning: "Vui mừng, hứng khởi, chuẩn bị cho việc lớn."},
  {num:17,  name: "随卦 (Tùy)", symbol: ["——","——","——","——","——","——"], meaning: "Tùy thuận thời thế, uyển chuyển mà thành công."},
  {num:18,  name: "蛊卦 (Cổ)", symbol: ["——","——","——","——","——","——"], meaning: "Hư nát, cần chỉnh sửa cái sai cũ để tái sinh."},
  {num:19,  name: "临卦 (Lâm)", symbol: ["——","——","——","——","——","——"], meaning: "Giám sát, cận kề thành công, nên thận trọng."},
  {num:20,  name: "观卦 (Quán)", symbol: ["——","——","——","——","——","——"], meaning: "Quan sát, học hỏi, nhận thức sâu sắc vạn vật."},
  {num:21,  name: "噬嗑卦 (Thệ Hạp)", symbol: ["——","——","——","——","——","——"], meaning: "Khó khăn bị cắn phá, giải trừ chướng ngại."},
  {num:22,  name: "贲卦 (Bí)", symbol: ["——","——","——","——","——","——"], meaning: "Trang sức, vẻ đẹp bên ngoài cần hài hòa nội tâm."},
  {num:23,  name: "剥卦 (Bác)", symbol: ["——","——","——","——","——","——"], meaning: "Suy tàn, mất mát, phải biết dừng lại và bảo toàn."},
  {num:24,  name: "复卦 (Phục)", symbol: ["——","——","——","——","——","——"], meaning: "Trở lại, hồi phục, khởi đầu lại sau thất bại."},
  {num:25,  name: "无妄卦 (Vô Vọng)", symbol: ["——","——","——","——","——","——"], meaning: "Chân thật, thuận đạo, đừng vọng cầu vô ích."},
  {num:26,  name: "大畜卦 (Đại Súc)", symbol: ["——","——","——","——","——","——"], meaning: "Tích đức, tích phúc lớn, chờ cơ mà phát."},
  {num:27,  name: "颐卦 (Di)", symbol: ["——","——","——","——","——","——"], meaning: "Dưỡng nuôi, chăm sóc thân tâm, lời ăn tiếng nói."},
  {num:28,  name: "大过卦 (Đại Quá)", symbol: ["——","——","——","——","——","——"], meaning: "Quá tải, phải gánh nặng, nguy cơ đổ vỡ."},
  {num:29,  name: "坎卦 (Khảm)", symbol: ["——","——","——","——","——","——"], meaning: "Hiểm nạn, nước sâu, giữ trung đạo mà vượt qua."},
  {num:30,  name: "离卦 (Ly)", symbol: ["——","——","——","——","——","——"], meaning: "Lửa, sáng, văn minh, cần giữ đạo sáng trong."},
  {num:31,  name: "咸卦 (Hàm)", symbol: ["——","——","——","——","——","——"], meaning: "Cảm ứng, đồng cảm, giao hòa nam nữ, duyên khởi."},
  {num:32,  name: "恒卦 (Hằng)", symbol: ["——","——","——","——","——","——"], meaning: "Bền lâu, kiên định, vững tâm mà đi xa."},
  {num:33,  name: "遯卦 (Độn)", symbol: ["——","——","——","——","——","——"], meaning: "Rút lui đúng lúc là trí tuệ cao."},
  {num:34,  name: "大壮卦 (Đại Tráng)", symbol: ["——","——","——","——","——","——"], meaning: "Mạnh mẽ, khí thịnh, dễ tự mãn, nên tiết chế."},
  {num:35,  name: "晋卦 (Tấn)", symbol: ["——","——","——","——","——","——"], meaning: "Tiến lên, sáng sủa, thăng tiến, như mặt trời mọc."},
  {num:36,  name: "明夷卦 (Minh Di)", symbol: ["——","——","——","——","——","——"], meaning: "Ánh sáng bị che, người hiền gặp thời u tối."},
  {num:37,  name: "家人卦 (Gia Nhân)", symbol: ["——","——","——","——","——","——"], meaning: "Gia đạo, trật tự, lấy đức và lễ làm gốc."},
  {num:38,  name: "睽卦 (Khuê)", symbol: ["——","——","——","——","——","——"], meaning: "Bất đồng, xa cách, giữ thiện chí thì hòa hợp."},
  {num:39,  name: "蹇卦 (Kiển)", symbol: ["——","——","——","——","——","——"], meaning: "Gian nan, cần người giúp, kiên định mới qua."},
  {num:40,  name: "解卦 (Giải)", symbol: ["——","——","——","——","——","——"], meaning: "Giải thoát, cởi bỏ gánh nặng, nhẹ nhàng mà tiến."},
  {num:41,  name: "损卦 (Tổn)", symbol: ["——","——","——","——","——","——"], meaning: "Giảm bớt để điều hòa, tiết chế là phúc."},
  {num:42,  name: "益卦 (Ích)", symbol: ["——","——","——","——","——","——"], meaning: "Tăng ích, giúp người, lợi mình, phúc đức tăng."},
  {num:43,  name: "夬卦 (Quải)", symbol: ["——","——","——","——","——","——"], meaning: "Quyết đoán, dứt bỏ điều xấu, hành động mạnh mẽ."},
  {num:44,  name: "姤卦 (Cấu)", symbol: ["——","——","——","——","——","——"], meaning: "Gặp gỡ bất ngờ, đề phòng dục vọng, giữ tâm tĩnh."},
  {num:45,  name: "萃卦 (Tụy)", symbol: ["——","——","——","——","——","——"], meaning: "Tụ hội, quần chúng, cần người dẫn dắt minh triết."},
  {num:46,  name: "升卦 (Thăng)", symbol: ["——","——","——","——","——","——"], meaning: "Tiến dần lên, nỗ lực bền bỉ, thành công bền lâu."},
  {num:47,  name: "困卦 (Khốn)", symbol: ["——","——","——","——","——","——"], meaning: "Khó khăn, cùng cực, giữ đạo, chờ thời."},
  {num:48,  name: "井卦 (Tỉnh)", symbol: ["——","——","——","——","——","——"], meaning: "Giếng nước – nguồn gốc sinh tồn, phải tu bổ căn bản."},
  {num:49,  name: "革卦 (Cách)", symbol: ["——","——","——","——","——","——"], meaning: "Cải cách, đổi mới, dám hành động đúng thời."},
  {num:50,  name: "鼎卦 (Đỉnh)", symbol: ["——","——","——","——","——","——"], meaning: "Đỉnh đồng, địa vị cao quý, giữ đức mà vững."},
  {num:51,  name: "震卦 (Chấn)", symbol: ["——","——","——","——","——","——"], meaning: "Sấm động, cảnh tỉnh, hành động có uy lực."},
  {num:52,  name: "艮卦 (Cấn)", symbol: ["——","——","——","——","——","——"], meaning: "Dừng lại, tĩnh tâm, an định thì vững."},
  {num:53,  name: "渐卦 (Tiệm)", symbol: ["——","——","——","——","——","——"], meaning: "Tiến chậm mà chắc, kiên nhẫn, đạo dài lâu."},
  {num:54,  name: "归妹卦 (Quy Muội)", symbol: ["——","——","——","——","——","——"], meaning: "Hôn nhân bất chính, duyên chưa đủ, nên tránh."},
  {num:55,  name: "丰卦 (Phong)", symbol: ["——","——","——","——","——","——"], meaning: "Phồn vinh, rực rỡ, giữ tâm sáng tránh kiêu."},
  {num:56,  name: "旅卦 (Lữ)", symbol: ["——","——","——","——","——","——"], meaning: "Du hành, tha hương, nên giữ lễ và đạo."},
  {num:57,  name: "巽卦 (Tốn)", symbol: ["——","——","——","——","——","——"], meaning: "Gió, nhu thuận, lan tỏa, mềm dẻo mà thắng."},
  {num:58,  name: "兑卦 (Đoài)", symbol: ["——","——","——","——","——","——"], meaning: "Hồ nước, vui vẻ, lấy hòa khí mà cảm hóa."},
  {num:59,  name: "涣卦 (Hoán)", symbol: ["——","——","——","——","——","——"], meaning: "Tan rã, phân tán, phải quy tụ lại chính đạo."},
  {num:60,  name: "节卦 (Tiết)", symbol: ["——","——","——","——","——","——"], meaning: "Tiết chế, giới hạn, trung dung mà tồn."},
  {num:61,  name: "中孚卦 (Trung Phu)", symbol: ["——","——","——","——","——","——"], meaning: "Thành tín trong lòng, lấy chân thành cảm hóa."},
  {num:62,  name: "小过卦 (Tiểu Quá)", symbol: ["——","——","——","——","——","——"], meaning: "Làm quá mức nhỏ, nên khiêm hạ, tránh liều lĩnh."},
  {num:63,  name: "既济卦 (Ký Tế)", symbol: ["——","——","——","——","——","——"], meaning: "Đã xong, hoàn thành, chớ chủ quan mà mất."},
  {num:64,  name: "未济卦 (Vị Tế)", symbol: ["——","——","——","——","——","——"], meaning: "Chưa xong, sắp thành mà chưa thành, giữ tâm tỉnh."}
];

// Hiển thị quẻ theo chiều dọc
function renderVertical(symbolArray) {
  return symbolArray.map(line => `<div>${line}</div>`).join('');
}

function drawHexagram() {
  const random = Math.floor(Math.random() * hexagrams.length);
  const gua = hexagrams[random];
  document.getElementById("guaSymbol").innerHTML = renderVertical(gua.symbol);
  document.getElementById("result").innerHTML = `
    <h2>${gua.name}</h2>
    <p>${gua.meaning}</p>
  `;
  const sound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-small-gong-hit-1955.mp3');
  sound.play();
}
</script>
</html>
