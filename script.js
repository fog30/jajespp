// Full names
const names = [
  "James", "Margaret", "Muriel", "Fergal",
  "Jess", "Hilda", "Giles", "Shannon", "Anna",
  "Treza", "Alister", "Contrad"
];

// Fixed result
const fixedResult = "Giles";

// Match first 3 letters to full name
function getFullName(short) {
  return names.find(n => n.toLowerCase().startsWith(short));
}

function spin() {
  const short = localStorage.getItem("playerShort");
  const player = getFullName(short);

  if (!player) {
    alert("Invalid name");
    return;
  }

  // Fake spinning animation
  const wheel = document.getElementById("wheel");
  let i = 0;

  const interval = setInterval(() => {
    wheel.innerText = names[i % names.length];
    i++;
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    wheel.innerText = fixedResult;
    document.getElementById("result").innerText =
      "🎁 You got: " + fixedResult;
  }, 2500);
}
