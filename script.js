const names = [
  "James", "Margaret", "Muriel", "Fergal",
  "Jess", "Hilda", "Giles", "Shannon", "Anna",
  "Treza", "Alister", "Contrad"
];

const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const r = canvas.width / 2;
let angle = 0;

drawWheel();

function drawWheel() {
  const slice = (2 * Math.PI) / names.length;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  names.forEach((n, i) => {
    ctx.beginPath();
    ctx.fillStyle = i % 2 ? "#c1121f" : "#1b4332";
    ctx.moveTo(r, r);
    ctx.arc(r, r, r, slice * i, slice * (i + 1));
    ctx.fill();

    ctx.save();
    ctx.translate(r, r);
    ctx.rotate(slice * i + slice / 2);
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText(n, r / 2.3, 5);
    ctx.restore();
  });
}

function spin() {
  let spins = 25;
  let interval = setInterval(() => {
    angle += 0.4;
    ctx.save();
    ctx.translate(r, r);
    ctx.rotate(angle);
    ctx.translate(-r, -r);
    drawWheel();
    ctx.restore();

    spins--;
    if (spins <= 0) clearInterval(interval);
  }, 80);

  // 🎯 FIXED RESULT
  setTimeout(() => {
    document.getElementById("result").innerText =
      "🎄 Your Secret Santa is: GILES";
  }, 2200);
}
