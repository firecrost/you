document.addEventListener('DOMContentLoaded', function() {
    const evetBtn = document.getElementById('evetBtn');
    const hayirBtn = document.getElementById('hayirBtn');
    const sonuc = document.getElementById('sonuc');
    const bgMusic = document.getElementById('bgMusic');
    
    // Müziği otomatik başlat (tarayıcılar genelde izin verir)
    bgMusic.volume = 0.3;
    bgMusic.play().catch(e => console.log("Otomatik çalma engellendi, kullanıcı etkileşimi gerekiyor."));
    
    // Hayır butonuna tıklanınca kaçsın
    hayirBtn.addEventListener('mouseover', function() {
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 50);
        hayirBtn.style.position = 'absolute';
        hayirBtn.style.left = randomX + 'px';
        hayirBtn.style.top = randomY + 'px';
    });
    
    // Evet butonuna basınca mutlu son
    evetBtn.addEventListener('click', function() {
        sonuc.innerHTML = "💖 YAŞASIN! ARTIK BİZ BİR ÇİFTİZ! 💖";
        document.body.innerHTML += `<div class="hearts" id="hearts"></div>`;
        
        // Kalp animasyonu
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = Math.random() * 3 + 2 + 's';
                document.getElementById('hearts').appendChild(heart);
                
                // Kalpleri temizle
                setTimeout(() => heart.remove(), 5000);
            }, i * 100);
        }
    });
});
