const yesForm = document.getElementById("yesForm");
const noForm = document.getElementById("noForm");
const mainContent = document.getElementById("mainContent");
const heartsContainer = document.getElementById("heartsContainer");

yesForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Form verisini gizlice gönder
  fetch(this.action, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(this))
  });

  // Eski içerikleri gizle
  mainContent.style.display = "none";

  // Aşk yazısı
  const loveText = document.createElement("div");
  loveText.className = "love-text";
  loveText.innerText = "Artık hayatımı sana adayacağım... Seni çok seviyorum!";
  document.body.appendChild(loveText);

  // Kalp animasyonu başlat
  for (let i = 0; i < 100; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 3 + "s";
    heart.innerText = "❤️";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
});
