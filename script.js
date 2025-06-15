let noClickCount = 0;
const noBtn = document.getElementById("noBtn");
const yesForm = document.getElementById("yesForm");
const loveMessage = document.getElementById("loveMessage");
const heartsContainer = document.getElementById("hearts-container");

// NO butonuna tıklanınca
noBtn.addEventListener("click", () => {
  noClickCount++;

  if (noClickCount === 1) {
    // Form gönder (Hayır cevabı)
    const formData = new FormData();
    formData.append("_subject", "Cevap Geldi!");
    formData.append("cevap", "Hayır");
    fetch("https://formsubmit.co/ajax/turkmenyigit509@gmail.com", {
      method: "POST",
      body: formData,
    });

    // İlk tıklamada sadece mesajı değiştir
    noBtn.innerText = "Emin misin?";
    noBtn.style.transform = `translate(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px)`;
  } else if (noClickCount === 2) {
    noBtn.innerText = "Bak son kez soruyorum...";
    noBtn.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0.8)`;
  } else {
    noBtn.style.display = "none";
  }
});

// YES formu
yesForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Formu AJAX ile gönder
  const formData = new FormData(yesForm);
  fetch("https://formsubmit.co/ajax/yigittr1922@gmail.com", {
    method: "POST",
    body: formData,
  });

  // Kalpler ve mesaj
  loveMessage.innerText = "Seni seviyorum ❤️";
  loveMessage.style.display = "block";
  triggerHearts();
});

// Kalp animasyonları
function triggerHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "0";
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.animationDelay = `${Math.random()}s`;
    heartsContainer.appendChild(heart);
    
    setTimeout(() => heart.remove(), 2500);
  }
}
