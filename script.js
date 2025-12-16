const names = [
  "James","Margaret","Muriel","Fergal",
  "Jess","Hilda","Giles","Shannon","Anna",
  "Treza","Alister","Contrad"
];

// elements
const wheel = document.getElementById("wheel");
const result = document.getElementById("result");

let i = 0;

// 🔄 spin animation (names keep changing)
const spin = setInterval(() => {
  wheel.innerText = names[i % names.length];
  i++;
}, 120);

// ⏹️ stop on GILES (forced result)
setTimeout(() => {
  clearInterval(spin);
  wheel.innerText = "Giles";
  result.innerText = "🎁 You got: GILES";
}, 3000);
