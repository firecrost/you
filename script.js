document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const responseModal = document.getElementById('response-modal');
    const responseText = document.getElementById('response-text');
    const responseTitle = document.getElementById('response-title');
    const closeModal = document.querySelector('.close-modal');
    const heartsContainer = document.querySelector('.hearts');
    
    // Create floating hearts
    for (let i = 0; i < 15; i++) {
        createHeart();
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
    
    // Make No button run away
    noBtn.addEventListener('mouseover', function() {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        
        // Shake animation
        noBtn.style.animation = 'shake 0.5s';
        setTimeout(() => {
            noBtn.style.animation = '';
        }, 500);
    });
    
    // Yes button click
    yesBtn.addEventListener('click', function() {
        showResponse('Evet dediğin için çok mutlu oldum! 💖 Yakında seninle iletişime geçeceğim.', 'Harika!');
        sendEmail('Evet');
    });
    
    // No button click (if somehow clicked)
    noBtn.addEventListener('click', function() {
        showResponse('Üzgünüm bu cevabı duymak istemezdim. 😢 Belki bir gün fikrini değiştirirsin...', 'Üzgünüm');
        sendEmail('Hayır');
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        responseModal.classList.add('hidden');
    });
    
    function showResponse(text, title) {
        responseText.textContent = text;
        responseTitle.textContent = title;
        responseModal.classList.remove('hidden');
    }
    
    function sendEmail(response) {
        // In a real implementation, you would use a server-side script or email service
        // This is just a simulation
        console.log(`Email gönderildi: Kullanıcı ${response} dedi.`);
        
        // Simulate sending to yigittr1922@gmail.com
        const email = 'yigittr1922@gmail.com';
        const subject = 'Çıkma Teklifi Cevabı';
        const body = `Kullanıcı "${response}" yanıtını verdi.`;
        
        // In a real app, you would use something like:
        // window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
        
        // For demonstration, we'll just log it
        console.log(`To: ${email}\nSubject: ${subject}\nBody: ${body}`);
        
        // If you want to actually send emails, you would need a backend service
        // Here's an example using FormSubmit (you would need to sign up at https://formsubmit.co/)
        /*
        fetch('https://formsubmit.co/ajax/yigittr1922@gmail.com', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                response: response,
                _subject: subject
            })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
        */
    }
});
