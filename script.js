const noBtn = document.querySelector(".no");
const yesBtn = document.querySelector(".yes");

let hayirTik = 0;

noBtn.addEventListener("click", () => {
  hayirTik++;

  if (hayirTik === 1) {
    noBtn.style.transform = "scale(0.9)";
    noBtn.innerText = "Emin misin?";
    noBtn.style.position = "absolute";
    noBtn.style.top = `${Math.random() * 80 + 10}%`;
    noBtn.style.left = `${Math.random() * 80 + 10}%`;
  } else if (hayirTik === 2) {
    noBtn.innerText = "Bak son kez soruyorum";
    noBtn.style.top = `${Math.random() * 80 + 10}%`;
    noBtn.style.left = `${Math.random() * 80 + 10}%`;
    noBtn.style.transform = "scale(0.8)";
  } else if (hayirTik >= 3) {
    noBtn.remove(); // hayır butonunu kaldır
  }
});

yesBtn.addEventListener("click", () => {
  alert("Evet dedi! Hemen mesaj at 🥰");
  // Buraya mesajlaşma entegrasyonu ekleyebilirsin
});
