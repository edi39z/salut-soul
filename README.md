# 🎓 SALUT Soul - Universitas Terbuka Registration System

Website pendaftaran mahasiswa baru Universitas Terbuka dengan sistem SALUT Soul yang modern, responsif, dan mudah digunakan.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)

## 📋 Daftar Isi

- [🚀 Quick Start](#-quick-start)
- [📦 Instalasi](#-instalasi)
- [🗄️ Setup Database](#️-setup-database)
- [🔧 Konfigurasi](#-konfigurasi)
- [🎯 Fitur Utama](#-fitur-utama)
- [📁 Struktur Project](#-struktur-project)
- [🛠️ Commands](#️-commands)
- [🔍 Testing](#-testing)
- [🚨 Troubleshooting](#-troubleshooting)
- [🚀 Deployment](#-deployment)

---

## 🚀 Quick Start

**Ingin langsung mencoba? Ikuti langkah ini:**

\`\`\`bash
# Clone and install
git clone <repository-url>
cd salut-soul
npm install

# Setup environment
cp .env.example .env
# Edit .env with your database URL

# Setup database
npx prisma db push
npx prisma db seed

# Run development server
npm run dev
\`\`\`

**🎉 Selesai! Website sudah bisa digunakan.**

---

## 📦 Instalasi

### Prerequisites

Pastikan sudah terinstall:
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **PostgreSQL** 12+ ([Download](https://www.postgresql.org/download/))
- **Git** ([Download](https://git-scm.com/))

### Langkah Instalasi

#### 1️⃣ **Clone Repository**
\`\`\`bash
git clone <repository-url>
cd salut-soul
\`\`\`

#### 2️⃣ **Install Dependencies**
\`\`\`bash
npm install
# atau
yarn install
\`\`\`

#### 3️⃣ **Setup Environment Variables**
\`\`\`bash
cp .env.example .env
\`\`\`

Edit file `.env` sesuai konfigurasi Anda:
\`\`\`env
# Database (WAJIB DIISI)
DATABASE_URL="postgresql://username:password@localhost:5432/salut_soul_db?schema=public"

# Next.js (Opsional)
NEXTAUTH_SECRET="your-secret-key"
\`\`\`

---

## 🗄️ Setup Database

### Opsi 1: PostgreSQL Lokal

#### **Install PostgreSQL**
- **Windows**: Download dari [postgresql.org](https://www.postgresql.org/download/windows/)
- **macOS**: `brew install postgresql`
- **Ubuntu**: `sudo apt install postgresql postgresql-contrib`

#### **Buat Database**
\`\`\`bash
createdb salut_soul_db
\`\`\`

#### **Update .env**
\`\`\`env
DATABASE_URL="postgresql://postgres:password@localhost:5432/salut_soul_db?schema=public"
\`\`\`

### Opsi 2: Docker (Mudah & Cepat)

\`\`\`bash
docker run --name postgres-salut \
  -e POSTGRES_DB=salut_soul_db \
  -e POSTGRES_PASSWORD=password \
  -p 5432:5432 -d postgres:15
\`\`\`

#### **Update .env**
\`\`\`env
DATABASE_URL="postgresql://postgres:password@localhost:5432/salut_soul_db?schema=public"
\`\`\`

### Opsi 3: Cloud Database (Gratis)

#### **Supabase** (Recommended)
1. Daftar di [supabase.com](https://supabase.com)
2. Buat project baru
3. Copy connection string dari Settings > Database
4. Update `.env`:
\`\`\`env
DATABASE_URL="postgresql://postgres:[password]@[host]:5432/postgres?schema=public"
\`\`\`

#### **Neon** (Alternative)
1. Daftar di [neon.tech](https://neon.tech)
2. Buat database baru
3. Copy connection string
4. Update `.env`

---

## 🔧 Konfigurasi

### Setup Database Schema

\`\`\`bash
# Generate Prisma client
npx prisma generate

# Push schema ke database
npx prisma db push

# Seed database dengan data sample
npx prisma db seed
\`\`\`

### Verifikasi Setup

\`\`\`bash
# Test koneksi database
npm run dev

# Buka browser dan test API
# http://localhost:3000/api/pendaftaran
\`\`\`

**✅ Jika muncul response JSON, setup berhasil!**

---

## 🎯 Fitur Utama

### 🌟 **Untuk Pengguna**
- ✅ **Pendaftaran Online** - Form pendaftaran mahasiswa baru yang mudah
- ✅ **Responsive Design** - Berfungsi di desktop, tablet, dan mobile
- ✅ **Real-time Validation** - Validasi form secara langsung
- ✅ **Multiple Pages** - Beranda, Tentang, Akademik, Kontak
- ✅ **Modern UI** - Design yang clean dan professional

### 🔧 **Untuk Developer**
- ✅ **TypeScript** - Full type safety
- ✅ **Prisma ORM** - Database management yang mudah
- ✅ **Form Validation** - React Hook Form + Zod
- ✅ **Animation** - Framer Motion
- ✅ **Component Library** - shadcn/ui + Tailwind CSS
- ✅ **API Routes** - RESTful API dengan Next.js

### 📊 **Data Management**
- ✅ **PostgreSQL Database** - Reliable dan scalable
- ✅ **Data Validation** - Server-side validation
- ✅ **Duplicate Prevention** - Cek NIK, NISN, Email
- ✅ **Status Tracking** - Pending, Approved, Rejected

---

## 📁 Struktur Project

\`\`\`
salut-soul/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 api/               # API routes
│   │   ├── pendaftaran/      # Registration API
│   │   └── kontak/           # Contact API
│   ├── 📁 pendaftaran/       # Registration page
│   ├── 📁 tentang/           # About page
│   ├── 📁 akademik/          # Academic page
│   ├── 📁 kontak/            # Contact page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── 📁 components/            # Reusable components
│   └── 📁 ui/               # UI components (shadcn/ui)
├── 📁 lib/                  # Utilities & configurations
│   ├── prisma.ts            # Prisma client
│   └── utils.ts             # Helper functions
├── 📁 prisma/               # Database
│   ├── schema.prisma        # Database schema
│   └── seed.ts              # Sample data
├── 📁 scripts/              # Database scripts
├── 📁 public/               # Static files
├── .env                     # Environment variables
├── package.json             # Dependencies
└── README.md               # Documentation
\`\`\`

---

## 🛠️ Commands

### Development
\`\`\`bash
npm run dev              # Start development server (http://localhost:3000)
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint
\`\`\`

### Database
\`\`\`bash
npm run db:generate     # Generate Prisma client
npm run db:push         # Push schema to database
npm run db:seed         # Seed database with sample data
npx prisma studio       # Open Prisma Studio (Database GUI)
\`\`\`

### Useful Commands
\`\`\`bash
# Reset database (HATI-HATI: Menghapus semua data!)
npx prisma db push --force-reset

# View database
npx prisma studio

# Check database connection
psql $DATABASE_URL
\`\`\`

---

## 🔍 Testing

### Test Form Pendaftaran

1. **Buka halaman pendaftaran**: `http://localhost:3000/pendaftaran`
2. **Isi form dengan data valid**:
   - Nama: `John Doe`
   - NIK: `1234567890123456` (16 digit)
   - NISN: `1234567890` (10 digit)
   - HP: `081234567890`
   - Email: `john@example.com`
   - Tanggal Lahir: `1990-01-01`
   - Alamat: `Jl. Test No. 123, Jakarta`
   - Fakultas: `FE`
   - Program Studi: `Manajemen`
   - ✅ Setujui syarat dan ketentuan

3. **Submit form**
4. **Cek hasil**:
   - Harus muncul toast "Pendaftaran Berhasil!"
   - Cek database: `http://localhost:3000/api/pendaftaran`

### Test API Endpoints

\`\`\`bash
# Test registration API
curl -X GET http://localhost:3000/api/pendaftaran

# Test contact API  
curl -X GET http://localhost:3000/api/kontak

# Manual registration test
curl -X POST http://localhost:3000/api/pendaftaran \
  -H "Content-Type: application/json" \
  -d '{
    "namaLengkap": "Test User",
    "nik": "9876543210123456",
    "nisn": "9876543210",
    "noHp": "081234567890",
    "email": "test@example.com",
    "tanggalLahir": "1990-01-01",
    "alamat": "Jl. Test No. 123, Jakarta",
    "fakultas": "FE",
    "programStudi": "Manajemen",
    "agreement": true
  }'
\`\`\`

### Debug Mode

Untuk debugging yang lebih detail:

1. **Buka Developer Tools** (`F12`)
2. **Tab Console** - Lihat JavaScript logs
3. **Tab Network** - Lihat HTTP requests
4. **Terminal** - Lihat server logs

---

## 🚨 Troubleshooting

### ❌ **Database Connection Error**

**Problem**: `Error: connect ECONNREFUSED`

**Solution**:
\`\`\`bash
# 1. Pastikan PostgreSQL running
sudo service postgresql start  # Linux
brew services start postgresql # macOS

# 2. Test koneksi manual
psql -U postgres -d salut_soul_db

# 3. Cek DATABASE_URL di .env
echo $DATABASE_URL
\`\`\`

### ❌ **Form Tidak Submit**

**Problem**: Form menampilkan "berhasil" tapi data tidak tersimpan

**Solution**:
\`\`\`bash
# 1. Cek browser console (F12)
# 2. Cek network tab untuk request POST
# 3. Cek terminal untuk server logs
# 4. Test API manual:
curl -X GET http://localhost:3000/api/pendaftaran
\`\`\`

### ❌ **Prisma Generate Error**

**Problem**: `Error: Prisma schema not found`

**Solution**:
\`\`\`bash
# 1. Pastikan di root directory
pwd

# 2. Generate ulang
npx prisma generate
npx prisma db push
\`\`\`

### ❌ **Port 3000 Already in Use**

**Problem**: `Error: listen EADDRINUSE: address already in use :::3000`

**Solution**:
\`\`\`bash
# 1. Kill process di port 3000
npx kill-port 3000

# 2. Atau gunakan port lain (contoh: 3002)
npm run dev -- -p 3002
\`\`\`

**Note**: Default port adalah 3000. Port lain hanya digunakan jika 3000 sedang dipakai aplikasi lain.

### ❌ **Module Not Found**

**Problem**: `Module not found: Can't resolve '@/components/ui/button'`

**Solution**:
\`\`\`bash
# 1. Install dependencies
npm install

# 2. Restart development server
npm run dev
\`\`\`

### 🔧 **Reset Complete**

Jika semua tidak berfungsi, reset complete:

\`\`\`bash
# 1. Hapus node_modules dan package-lock
rm -rf node_modules package-lock.json

# 2. Install ulang
npm install

# 3. Reset database
npx prisma db push --force-reset
npx prisma db seed

# 4. Restart
npm run dev
\`\`\`

---

## 🚀 Deployment

### Vercel (Recommended - Gratis)

1. **Push ke GitHub**:
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

2. **Deploy ke Vercel**:
   - Buka [vercel.com](https://vercel.com)
   - Connect GitHub repository
   - Add environment variables:
     \`\`\`
     DATABASE_URL=your_production_database_url
     NEXTAUTH_SECRET=your_secret_key
     \`\`\`
   - Deploy!

3. **Setup Production Database**:
   - Gunakan Supabase/Neon untuk database production
   - Update `DATABASE_URL` di Vercel environment variables

### Manual Deployment

\`\`\`bash
# 1. Build project
npm run build

# 2. Start production server
npm start

# 3. Atau dengan PM2
npm install -g pm2
pm2 start npm --name "salut-soul" -- start
\`\`\`

---

## 📞 Support & Kontribusi

### 🆘 **Butuh Bantuan?**

1. **Cek Troubleshooting** section di atas
2. **Buka GitHub Issues** untuk bug reports
3. **Contact Developer** untuk support khusus

### 🤝 **Kontribusi**

Kontribusi sangat diterima! Silakan:

1. Fork repository
2. Buat feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### 📝 **Development Guidelines**

- Gunakan TypeScript untuk type safety
- Follow ESLint rules
- Write meaningful commit messages
- Test sebelum submit PR
- Update documentation jika perlu

---

## 📊 Database Schema

### Tables Overview

| Table | Description | Key Fields |
|-------|-------------|------------|
| `pendaftaran` | Student registrations | `nama_lengkap`, `nik`, `nisn`, `email` |
| `kontak_pesan` | Contact messages | `name`, `email`, `message` |
| `program_studi` | Study programs | `nama`, `fakultas`, `jenjang` |
| `fakultas` | Faculties | `nama`, `nama_lengkap`, `akreditasi` |

### Sample Queries

\`\`\`sql
-- Cek total pendaftaran
SELECT COUNT(*) FROM pendaftaran;

-- Pendaftaran per fakultas
SELECT fakultas, COUNT(*) as total 
FROM pendaftaran 
GROUP BY fakultas;

-- Pendaftaran terbaru
SELECT nama_lengkap, email, fakultas, created_at 
FROM pendaftaran 
ORDER BY created_at DESC 
LIMIT 10;
\`\`\`

---

## 🎯 Roadmap

### ✅ **Completed**
- [x] Basic website structure
- [x] Registration form
- [x] Database integration
- [x] Form validation
- [x] Responsive design

### 🚧 **In Progress**
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] WhatsApp integration
- [ ] Google Maps integration

### 📋 **Planned**
- [ ] Payment integration
- [ ] Document upload
- [ ] Student portal
- [ ] Mobile app

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Prisma** - Database ORM
- **shadcn/ui** - UI components
- **Tailwind CSS** - Styling
- **Vercel** - Deployment platform

---

**🎓 SALUT Soul - Pendidikan Tinggi Berkualitas dan Terjangkau**

*Made with ❤️ for Indonesian education*

---

## 📞 Quick Contact

- **Website**: [salutsoul.ac.id](https://salutsoul.ac.id)
- **Email**: info@salutsoul.ac.id
- **WhatsApp**: +62 812-3456-7890
- **GitHub**: [github.com/salut-soul](https://github.com/salut-soul)

**Happy Coding! 🚀**
