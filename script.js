let noClickCount = 0;
const noBtn = document.getElementById("noBtn");
const yesForm = document.getElementById("yesForm");
const loveMessage = document.getElementById("loveMessage");
const heartsContainer = document.getElementById("hearts-container");

// NO butonuna tıklanırsa
const noMessages = ["Emin misin?", "Bak son kez soruyorum...", "😢"];

noBtn.addEventListener("click", () => {
  noClickCount++;
  
  if (noClickCount < 3) {
    noBtn.innerText = noMessages[noClickCount - 1];
    noBtn.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(${1 - 0.2 * noClickCount})`;
  } else {
    noBtn.style.display = "none";
    loveMessage.innerText = "Üzgünüm 😢";
    loveMessage.style.display = "block";
  }
});

// YES butonuna tıklanırsa
yesForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Formu AJAX ile gönder
  const formData = new FormData(yesForm);
  fetch("https://formsubmit.co/ajax/turkmenyigit509@gmail.com", {
    method: "POST",
    body: formData,
  });

  // Görsel efektler ve mesaj
  loveMessage.innerText = "Seni seviyorum ❤️";
  loveMessage.style.display = "block";
  triggerHearts();
});

// Kalp efekt fonksiyonu
function triggerHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "0";
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    heart.style.animationDelay = `${Math.random()}s`;
    heartsContainer.appendChild(heart);
    
    setTimeout(() => heart.remove(), 2000);
  }
}
