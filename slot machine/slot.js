const symbols = ["🍒","🍋","⭐","💎"];

function spin() {
  const r1 = symbols[Math.floor(Math.random()*symbols.length)];
  const r2 = symbols[Math.floor(Math.random()*symbols.length)];
  const r3 = symbols[Math.floor(Math.random()*symbols.length)];

  document.getElementById("s1").textContent = r1;
  document.getElementById("s2").textContent = r2;
  document.getElementById("s3").textContent = r3;

  let match = 0;
  if (r1 === r2) match++;
  if (r2 === r3) match++;
  if (r1 === r3) match++;

  let audio = new Audio();

  if (match === 1) {
    audio.src = "sounds/one.mp3";
  } else if (match === 2) {
    audio.src = "sounds/two.mp3";
  } else if (match === 3) {
    audio.src = "sounds/three.mp3";
  }

  if (match > 0) audio.play();
}
