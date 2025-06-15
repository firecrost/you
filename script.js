document.addEventListener('DOMContentLoaded', function() {
    const evetBtn = document.getElementById('evetBtn');
    const hayirBtn = document.getElementById('hayirBtn');
    const sonuc = document.getElementById('sonuc');
    const bgMusic = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');

    // Müzik kontrolü
    let isMusicPlaying = false;
    musicBtn.addEventListener('click', function() {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicBtn.textContent = "🔇";
        } else {
            bgMusic.play();
            musicBtn.textContent = "🎵";
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Hayır butonu kaçsın!
    hayirBtn.addEventListener('mouseover', function() {
        const windowWidth = window.innerWidth - 100;
        const windowHeight = window.innerHeight - 100;
        const randomX = Math.floor(Math.random() * windowWidth);
        const randomY = Math.floor(Math.random() * windowHeight);
        
        hayirBtn.style.position = 'absolute';
        hayirBtn.style.left = randomX + 'px';
        hayirBtn.style.top = randomY + 'px';
        
        // Buton titremesi efekti
        hayirBtn.style.animation = 'shake 0.5s';
        setTimeout(() => hayirBtn.style.animation = '', 500);
    });

    // Evet butonuna basınca
    evetBtn.addEventListener('click', function() {
        // Müzik başlat
        bgMusic.play();
        musicBtn.textContent = "🎵";
        isMusicPlaying = true;
        
        // Mesaj göster
        sonuc.innerHTML = "💍 BENİMLE OLDUĞUN İÇİN ÇOK MUTLUYUM! 💖";
        
        // Butonları gizle
        evetBtn.style.display = 'none';
        hayirBtn.style.display = 'none';
        
        // Kalp yağmuru
        const heartsContainer = document.createElement('div');
        heartsContainer.className = 'hearts';
        document.body.appendChild(heartsContainer);
        
        for (let i = 0; i < 150; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = ['❤️', '💖', '💘', '💝', '💓'][Math.floor(Math.random() * 5)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
                heart.style.animationDuration = (Math.random() * 4 + 3) + 's';
                heartsContainer.appendChild(heart);
                
                // 6 saniye sonra kalbi sil
                setTimeout(() => heart.remove(), 6000);
            }, i * 100);
        }
        
        // Konfeti efekti
        for (let i = 0; i < 300; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = 
                    ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#ff69b4'][Math.floor(Math.random() * 6)];
                confetti.style.width = (Math.random() * 20 + 10) + 'px';
                confetti.style.height = (Math.random() * 20 + 10) + 'px';
                document.body.appendChild(confetti);
                
                // 5 saniye sonra konfetiyi sil
                setTimeout(() => confetti.remove(), 5000);
            }, i * 50);
        }
    });

    // Sayfa yüklendiğinde küçük bir hoş geldin animasyonu
    setTimeout(() => {
        document.querySelector('h1').style.animation = 'pulse 2s infinite';
    }, 1000);
});
