# 🐉 Dragon Noodles - Tekbun Botanica

## 📌 Deskripsi Proyek

**Dragon Noodles** adalah platform **Sustainable Digital Business** inovatif dari mahasiswa Universitas Terbuka yang mengintegrasikan:

- 🍜 **Produk**: Mie sehat berbasis limbah kulit buah naga (antioksidan tinggi)
- ♻️ **Packaging**: Smart Biodegradable Eco-Packaging dengan seed paper
- 📱 **Platform Digital**: Tracking dampak lingkungan real-time
- 🌍 **Gerakan**: **Scan → Masak → Tanam** (Sustainable Journey)
- 💳 **Payment**: Midtrans integration untuk e-commerce
- 📊 **Analytics**: Admin dashboard untuk tracking & reporting
- 🚀 **PWA**: Progressive Web App untuk mobile experience

---

## ✨ Fitur Lengkap - 6 MODUL COMPLETE

### **✅ MODUL 1: ENHANCED UI/UX**
- Animasi fade-in saat scroll
- Smooth transitions & hover effects
- Dark mode toggle (🌙)
- Mobile responsive design
- Loading animations
- Notification system (success/error/info/warning)

### **✅ MODUL 2: FIREBASE BACKEND**
- Firestore database integration
- Real-time data sync
- Form submission handling
- Authentication system (ready)
- Automatic dashboard updates

### **✅ MODUL 3: MIDTRANS PAYMENT**
- Payment token creation
- Payment verification
- Transaction history tracking
- Invoice management
- Multiple payment methods

### **✅ MODUL 4: ADMIN DASHBOARD**
- View all submissions
- Analytics by city & status
- Real-time metrics
- Export data to CSV
- Transaction history

### **✅ MODUL 5: PWA (Progressive Web App)**
- Offline functionality
- Service worker caching
- Install to home screen
- Push notifications ready
- Background sync

### **✅ MODUL 6: DEPLOYMENT & PRODUCTION**
- GitHub Pages ready
- Vercel deployment
- Netlify deployment
- SSL certificate ready
- Performance optimized

---

## 🚀 Quick Start (5 Langkah)

### **1. Clone Repository**
```bash
git clone https://github.com/nuraeni276/dragon-noodles.git
cd dragon-noodles
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Setup Environment**
```bash
cp .env.example .env
# Edit .env dengan konfigurasi Firebase & Midtrans Anda
```

### **4. Run Development Server**
```bash
npm run dev
# Server berjalan di http://localhost:3000
```

### **5. Buka di Browser**
```
http://localhost:3000
```

---

## 🔧 Setup Firebase

### **1. Buat Firebase Project**
- Buka [Firebase Console](https://console.firebase.google.com)
- Klik "Create Project"
- Beri nama: "Dragon Noodles"
- Setup Firestore Database
- Download service account key

### **2. Konfigurasi File**
```bash
mkdir config
cp /path/to/firebase-key.json config/firebase-key.json
```

### **3. Update .env**
```env
FIREBASE_API_KEY=YOUR_KEY
FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
FIREBASE_AUTH_DOMAIN=dragon-noodles.firebaseapp.com
# ... lihat .env.example untuk lengkapnya
```

---

## 💳 Setup Midtrans

### **1. Buat Akun Midtrans**
- Daftar di [Midtrans](https://midtrans.com)
- Verify akun Anda
- Dapatkan Server Key & Client Key

### **2. Update .env**
```env
MIDTRANS_SERVER_KEY=YOUR_SERVER_KEY
MIDTRANS_CLIENT_KEY=YOUR_CLIENT_KEY
MIDTRANS_MERCHANT_ID=YOUR_MERCHANT_ID
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/submissions` | Submit form data |
| GET | `/api/stats` | Get dashboard stats |
| POST | `/api/payment/create-token` | Create payment token |
| POST | `/api/payment/verify` | Verify payment |
| GET | `/api/admin/submissions` | Get all submissions |
| GET | `/api/admin/analytics` | Get analytics data |
| GET | `/api/admin/export-csv` | Export to CSV |

---

## 📱 PWA Installation

### **Desktop Browser**
1. Buka website
2. Klik "Install App" (bawah kanan)
3. Atau: Menu → "Install app"

### **Mobile Browser**
1. Buka di browser mobile
2. Tap menu → "Install app"
3. Atau: Add to home screen

---

## 🌍 Deployment

### **Option 1: GitHub Pages (RECOMMENDED)**
```
https://nuraeni276.github.io/dragon-noodles
```

### **Option 2: Vercel**
```bash
npm install -g vercel
vercel login
vercel
```

### **Option 3: Netlify**
```bash
npm install -g netlify-cli
netlify login
netlify deploy
```

---

## 📁 Struktur File

```
dragon-noodles/
├── index.html              # Halaman utama (PWA ready)
├── manifest.json          # PWA manifest
├── sw.js                  # Service worker
├── server.js              # Express backend
├── package.json           # Dependencies
├── .env.example           # Environment template
├── .gitignore             # Git configuration
├── css/
│   └── style.css         # Stylesheet dengan animations
├── js/
│   └── script.js         # Frontend logic
├── config/
│   └── firebase-key.json # Firebase credentials
└── README.md             # Dokumentasi
```

---

## 👥 Tim Pengembang

| Peran | Nama | Institusi |
|------|------|----------|
| **Ketua** | Intan Nuraeni | Universitas Terbuka |
| **Produksi** | Dede Hendar Komara | Universitas Terbuka |
| **Marketing** | Cindi Damayanti | Universitas Terbuka |

---

## 🛍️ E-Commerce Links

- 🛍️ **Shopee**: [Tekbun Official](https://shopee.co.id/)
- 📦 **Tokopedia**: [Tekbun Botanica](https://tokopedia.com/)
- 📱 **Instagram**: [@dragonnoodles.id](https://instagram.com/dragonnoodles.id)
- 🎵 **TikTok**: [@dragonnoodles.id](https://tiktok.com/@dragonnoodles.id)

---

## 📞 Support

Untuk pertanyaan atau feedback:
- Email: support@dragonnoodles.id
- Instagram: @dragonnoodles.id
- WhatsApp: +62-XXX-XXXX-XXXX

---

## 📄 Lisensi

&copy; 2026 **Tekbun Botanica - Dragon Noodles**  
Hak Cipta Dilindungi (Business Plan Proposal Digital)  
License: MIT

---

## 🎯 Roadmap

- [ ] Mobile app native (React Native)
- [ ] Leaderboard fitur (top contributors)
- [ ] Reward system (vouchers & badges)
- [ ] Live tracking pengiriman
- [ ] Customer testimonials
- [ ] Influencer collaboration
- [ ] Sustainability report
- [ ] Blockchain verification

---

## 🎊 Kontribusi

Kami welcome kontribusi dari komunitas! Silakan:
1. Fork repository ini
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

---

**Mari bersama-sama menjadikan limbah buah naga menjadi berkah! 🐉♻️🌱**