const names = [
  "James","Margaret","Muriel","Fergal",
  "Jess","Hilda","Giles","Shannon","Anna",
  "Treza","Alister","Contrad"
];

// show moving names
const wheel = document.getElementById("wheel");
const result = document.getElementById("result");

let i = 0;

// spin animation
const spin = setInterval(() => {
  wheel.innerText = names[i % names.length];
  i++;
}, 120);

// stop on JESS
setTimeout(() => {
  clearInterval(spin);
  wheel.innerText = "Giles";
  result.innerText = "🎁 You got: Giles";
}, 3000);

