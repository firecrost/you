let noClickCount = 0;
const noBtn = document.getElementById("noBtn");

const noMessages = [
  "Emin misin?",
  "Bak son kez soruyorum...",
  ""
];

noBtn.addEventListener("click", () => {
  noClickCount++;
  
  if (noClickCount < 3) {
    noBtn.innerText = noMessages[noClickCount - 1];
    noBtn.style.transform = `translate(${Math.random()*100 - 50}px, ${Math.random()*100 - 50}px) scale(${1 - 0.2 * noClickCount})`;
  } else {
    noBtn.style.display = "none";
  }
});
