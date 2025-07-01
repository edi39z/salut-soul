# 🎓 SALUT Soul — Pendaftaran Mahasiswa Universitas Terbuka

**SALUT Soul** adalah sistem modern & responsif untuk pendaftaran mahasiswa baru di Universitas Terbuka.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql)

---

## 🚀 Cara Cepat Menjalankan

```bash
# 1. Clone repo
git clone <repository-url>
cd salut-soul

# 2. Install dependensi
npm install

# 3. Setup environment
cp .env.example .env
# Edit file .env: isi DATABASE_URL dan NEXTAUTH_SECRET

# 4. Setup database (butuh PostgreSQL)
npx prisma db push
npx prisma db seed

# 5. Jalankan server
npm run dev

# 6. Buka di browser
http://localhost:3000
