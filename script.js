document.addEventListener('DOMContentLoaded', function() {
    const evetBtn = document.getElementById('evetBtn');
    const hayirBtn = document.getElementById('hayirBtn');
    const sonuc = document.getElementById('sonuc');
    const bgMusic = document.getElementById('bgMusic');

    // Müziği başlat (kullanıcı etkileşimi gerekiyor)
    document.body.addEventListener('click', function() {
        bgMusic.volume = 0.3;
        bgMusic.play().catch(e => console.log("Müzik otomatik çalınmadı."));
    });

    // Hayır butonunu uçur!
    hayirBtn.addEventListener('mouseover', function() {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);
        hayirBtn.style.left = x + 'px';
        hayirBtn.style.top = y + 'px';
        hayirBtn.style.transform = 'scale(1.2)';
        setTimeout(() => hayirBtn.style.transform = 'scale(1)', 300);
    });

    // Evet butonuna basınca büyük sürpriz!
    evetBtn.addEventListener('click', function() {
        sonuc.innerHTML = "💖 MELİSA, SENİ ÇOK SEVİYORUM! 💖";
        document.body.innerHTML += `<div class="hearts" id="hearts"></div>`;

        // 100 kalp yağdır!
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = ['❤️', '💖', '💘', '💝'][Math.floor(Math.random() * 4)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = Math.random() * 3 + 2 + 's';
                document.getElementById('hearts').appendChild(heart);
            }, i * 100);
        }

        // Konfeti yağmuru
        for (let i = 0; i < 200; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = 
                    ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'][Math.floor(Math.random() * 5)];
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 5000);
            }, i * 50);
        }
    });
});
