// MODUL 1: ENHANCED UI/UX & MODUL 5: PWA

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .stat-box').forEach(el => {
    observer.observe(el);
});

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()">✕</button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Form Submission
document.getElementById('form-aksi').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const statusAksi = document.getElementById('input-status').value;
    
    const labelTerjual = document.getElementById('stat-terjual');
    const labelLimbah = document.getElementById('stat-limbah');
    const labelBenih = document.getElementById('stat-benih');
    const labelKota = document.getElementById('stat-kota');
    
    let totalTerjual = parseInt(labelTerjual.innerText);
    let totalLimbah = parseInt(labelLimbah.innerText);
    let totalBenih = parseInt(labelBenih.innerText);
    let totalKota = parseInt(labelKota.innerText);
    
    totalTerjual += 1;
    totalLimbah += 1;
    
    if (statusAksi === 'tanam') {
        totalBenih += 1;
    }
    
    if (Math.random() > 0.7) {
        totalKota += 1;
    }
    
    animateValue(labelTerjual, totalTerjual);
    animateValue(labelLimbah, totalLimbah);
    animateValue(labelBenih, totalBenih);
    animateValue(labelKota, totalKota);
    
    showNotification('✅ Terima kasih! Laporan acsi hijau Anda berhasil terekam.', 'success');
    document.getElementById('form-aksi').reset();
});

// Animate Counter
function animateValue(element, endValue) {
    const startValue = parseInt(element.innerText);
    const duration = 500;
    const startTime = Date.now();
    
    const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(startValue + (endValue - startValue) * progress);
        element.innerText = current;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    };
    
    animate();
}

// Navigation Scroll Detection
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#main-nav a');

window.addEventListener('scroll', () => {
    let currentSectionId = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 150)) {
            currentSectionId = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');
        }
    });
});

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration => {\n        console.log('✅ Service Worker registered');\n    }).catch(error => {\n        console.log('❌ Service Worker registration failed');\n    });\n}\n\n// PWA Install Button\nwindow.addEventListener('beforeinstallprompt', (e) => {\n    e.preventDefault();\n    let deferredPrompt = e;\n    const installBtn = document.getElementById('install-btn');\n    if (installBtn) {\n        installBtn.style.display = 'block';\n        installBtn.addEventListener('click', async () => {\n            deferredPrompt.prompt();\n            const choiceResult = await deferredPrompt.userChoice;\n            if (choiceResult.outcome === 'accepted') {\n                console.log('✅ PWA installed');\n            }\n        });\n    }\n});\n\nconsole.log('🚀 Dragon Noodles app loaded!');