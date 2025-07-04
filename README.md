# SALUT Soul - Sentra Layanan Universitas Terbuka

![SALUT Soul Logo](public/images/logo.png)

SALUT Soul adalah platform digital modern untuk layanan pendaftaran dan informasi Universitas Terbuka (UT). Kami menyediakan akses mudah, cepat, dan terpercaya untuk calon mahasiswa yang ingin melanjutkan pendidikan tinggi melalui sistem pembelajaran jarak jauh.

## 🌟 Fitur Utama

### 📝 Pendaftaran Online
- **Jalur Non-RPL**: Untuk lulusan SMA/SMK/MA sederajat
- **Jalur RPL**: Untuk yang memiliki pengalaman kerja atau lulusan D3/S1
- Upload dokumen langsung ke cloud storage
- Validasi data real-time (NIK, NISN, Email)
- Form wizard yang user-friendly

### 🎓 Informasi Akademik
- 5 Fakultas dengan 28+ Program Studi
- Informasi akreditasi dan biaya kuliah
- Detail persyaratan setiap program
- Struktur kurikulum dan prospek karir

### 💬 Layanan Konsultasi
- Live chat WhatsApp terintegrasi
- Form kontak dengan response tracking
- Konsultasi gratis pemilihan program studi
- Dukungan 24/7 untuk informasi

### 📱 Responsive Design
- Mobile-first approach
- Progressive Web App (PWA) ready
- Optimized untuk semua device
- Fast loading dengan modern tech stack

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework dengan App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend & Database
- **Prisma ORM** - Type-safe database client
- **PostgreSQL** - Primary database
- **Cloudinary** - File upload & management
- **Vercel** - Deployment platform

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking
- **Git** - Version control

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Cloudinary account (for file uploads)

### Installation

1. **Clone repository**
```bash
git clone https://github.com/your-username/salut-soul.git
cd salut-soul
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` dengan konfigurasi Anda:
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/salut_soul"

# Cloudinary
CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"

# Next.js
NEXTAUTH_SECRET="your_secret_key"
NEXTAUTH_URL="http://localhost:3000"
```

4. **Setup database**
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Seed database
npx prisma db seed
```

5. **Start development server**
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📊 Database Schema

### Core Tables
- `pendaftaran` - Student registrations
- `fakultas` - Faculties information
- `program_studi` - Study programs
- `kontak_pesan` - Contact messages
- `dokumen_pendaftaran` - Document uploads
- `validasi_data` - Data validation logs

### Key Features
- UUID primary keys
- Soft deletes with `isActive` flags
- Audit trails for data changes
- Optimized indexes for performance

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ for Indonesian Education</p>
  <p>© 2025 SALUT Soul - Sentra Layanan Universitas Terbuka</p>
</div>
