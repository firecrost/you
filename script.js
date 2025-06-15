document.addEventListener('DOMContentLoaded', function() {
    // Elementleri seç
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const responseModal = document.getElementById('response-modal');
    const responseText = document.getElementById('response-text');
    const responseTitle = document.getElementById('response-title');
    const closeModal = document.querySelector('.close-modal');
    const heartsContainer = document.querySelector('.hearts');
    const recipientName = document.getElementById('recipient-name');
    
    // İsim sorma fonksiyonu
    function askForName() {
        let name = prompt("Lütfen isminizi yazın:", "Güzel İnsan");
        if (!name || name.trim() === "") {
            name = "Güzel İnsan";
        }
        recipientName.textContent = name;
        return name;
    }
    
    // Sayfa yüklendiğinde ismi sor
    const userName = askForName();
    
    // Uçan kalpler oluştur
    function createHearts() {
        for (let i = 0; i < 15; i++) {
            createHeart();
        }
    }
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 10 + 10 + 's';
        heart.style.opacity = Math.random();
        heart.style.width = Math.random() * 20 + 10 + 'px';
        heart.style.height = heart.style.width;
        heartsContainer.appendChild(heart);
    }
    
    // Kalpleri başlat
    createHearts();
    
    // Hayır butonu kaçsın
    noBtn.addEventListener('mouseover', function() {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        
        // Titreşim efekti
        noBtn.style.animation = 'shake 0.5s';
        setTimeout(() => {
            noBtn.style.animation = '';
        }, 500);
    });
    
    // Evet butonu işlevi
    yesBtn.addEventListener('click', function() {
        showResponse(`Harika ${userName}! 💖 Bu cevabı duyduğuma çok sevindim. Seninle iletişime geçeceğim.`, 'Çok Mutlu Oldum!');
        sendEmail('Evet', userName);
    });
    
    // Hayır butonu işlevi (eğer tıklanırsa)
    noBtn.addEventListener('click', function() {
        showResponse(`${userName}, üzgünüm bu cevabı duymak istemezdim. 😢 Belki bir gün fikrini değiştirirsin...`, 'Üzgünüm');
        sendEmail('Hayır', userName);
    });
    
    // Modal penceresi fonksiyonları
    function showResponse(text, title) {
        responseText.innerHTML = text;
        responseTitle.textContent = title;
        responseModal.classList.remove('hidden');
        
        // Modal dışına tıklanırsa kapat
        responseModal.addEventListener('click', function(e) {
            if (e.target === responseModal) {
                closeResponseModal();
            }
        });
    }
    
    function closeResponseModal() {
        responseModal.classList.add('hidden');
    }
    
    closeModal.addEventListener('click', closeResponseModal);
    
    // Email gönderme fonksiyonu (simülasyon)
    function sendEmail(response, name) {
        // Gerçek uygulamada burada bir backend servisi kullanılır
        console.log(`Email gönderiliyor...`);
        console.log(`Alıcı: yigittr1922@gmail.com`);
        console.log(`Konu: Çıkma Teklifi Cevabı`);
        console.log(`Mesaj: ${name} kişisi "${response}" yanıtını verdi.`);
        
        // Gerçek email gönderme için örnek kod (FormSubmit kullanımı)
        /*
        fetch('https://formsubmit.co/ajax/yigittr1922@gmail.com', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                response: response,
                _subject: `Çıkma Teklifi Cevabı - ${response}`
            })
        })
        .then(response => response.json())
        .then(data => console.log('Email gönderildi:', data))
        .catch(error => console.error('Hata:', error));
        */
        
        // Alternatif olarak mailto linki
        const subject = encodeURIComponent(`Çıkma Teklifi Cevabı - ${response}`);
        const body = encodeURIComponent(`${name} kişisi "${response}" yanıtını verdi.\n\nTarih: ${new Date().toLocaleString()}`);
        window.open(`mailto:yigittr1922@gmail.com?subject=${subject}&body=${body}`);
    }
    
    // Sayfada herhangi bir yere tıklandığında yeni kalp oluştur
    document.addEventListener('click', function(e) {
        if (e.target !== noBtn && e.target !== yesBtn) {
            createHeart();
        }
    });
});
