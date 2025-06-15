// Animasyonlu Elementler
document.querySelectorAll('.animate').forEach((el, index) => {
    setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }, index * 300);
});

// Hareketli "Belki" Butonu
document.getElementById('hayirBtn').addEventListener('mouseover', function() {
    this.style.transform = `translate(
        ${Math.random() * 100 - 50}px,
        ${Math.random() * 100 - 50}px
    )`;
    this.style.transition = 'all 0.3s ease';
});

// Cevap Verme
function cevapVer(evet) {
    const container = document.querySelector('.container');
    if(evet) {
        container.innerHTML = `
            <div class="celebration">
                <h2>🎉 İşte Bu Kadar 🎉</h2>
                <p class="celebration-text">Artık resmen:<br>
                <span class="couple-name">Yiğit ❤️ Melisa</span></p>
                <div class="hearts"></div>
                <p>Hayatının en güzel kararını verdin! 🥰</p>
            </div>
        `;
        startFireworks();
    } else {
        container.innerHTML = `
            <div class="sad-message">
                <h2>😢 Kalbim Kırıldı Ama...</h2>
                <p>Pes etmeyeceğim! Yeniden deneyeceğim! 💪</p>
            </div>
        `;
    }
}

// Havai Fişek Efekti
function startFireworks() {
    for(let i=0; i<50; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                font-size: 30px;
                animation: explode 1s forwards;
            `;
            firework.innerHTML = ['🎆', '🎇', '✨', '💥'][Math.floor(Math.random()*4)];
            document.body.appendChild(firework);
            setTimeout(() => firework.remove(), 1000);
        }, i * 50);
    }
}
