-- Create tables and seed initial data for SALUT Soul website

-- Insert Fakultas data
INSERT INTO fakultas (id, nama, nama_lengkap, deskripsi, akreditasi, is_active, created_at, updated_at) VALUES
('f1', 'FISIP', 'Fakultas Ilmu Sosial dan Ilmu Politik', 'Fakultas yang mengembangkan ilmu sosial dan politik untuk membangun masyarakat yang demokratis dan berkeadilan.', 'A', true, NOW(), NOW()),
('f2', 'FKIP', 'Fakultas Keguruan dan Ilmu Pendidikan', 'Fakultas yang mencetak tenaga pendidik profesional untuk berbagai jenjang pendidikan.', 'A', true, NOW(), NOW()),
('f3', 'FMIPA', 'Fakultas Matematika dan Ilmu Pengetahuan Alam', 'Fakultas yang mengembangkan ilmu pengetahuan alam dan matematika untuk kemajuan teknologi.', 'A', true, NOW(), NOW()),
('f4', 'FE', 'Fakultas Ekonomi', 'Fakultas yang mengembangkan ilmu ekonomi dan bisnis untuk pembangunan ekonomi nasional.', 'A', true, NOW(), NOW()),
('f5', 'FHISIP', 'Fakultas Hukum, Ilmu Sosial dan Ilmu Politik', 'Fakultas yang mengintegrasikan ilmu hukum dengan ilmu sosial politik.', 'B', true, NOW(), NOW());

-- Insert Program Studi data
INSERT INTO program_studi (id, nama, fakultas, jenjang, akreditasi, biaya_semester, deskripsi, is_active, created_at, updated_at) VALUES
-- FISIP Programs
('p1', 'Administrasi Negara', 'FISIP', 'S1', 'A', 1300000, 'Program studi yang mempelajari administrasi pemerintahan dan pelayanan publik.', true, NOW(), NOW()),
('p2', 'Administrasi Niaga', 'FISIP', 'S1', 'A', 1300000, 'Program studi yang fokus pada administrasi bisnis dan manajemen perusahaan.', true, NOW(), NOW()),
('p3', 'Ilmu Komunikasi', 'FISIP', 'S1', 'B', 1400000, 'Program studi yang mempelajari teori dan praktik komunikasi massa dan interpersonal.', true, NOW(), NOW()),
('p4', 'Ilmu Perpustakaan', 'FISIP', 'S1', 'B', 1300000, 'Program studi yang fokus pada manajemen informasi dan perpustakaan.', true, NOW(), NOW()),
('p5', 'Sosiologi', 'FISIP', 'S1', 'B', 1300000, 'Program studi yang mempelajari masyarakat dan fenomena sosial.', true, NOW(), NOW()),
('p6', 'Sastra Inggris', 'FISIP', 'S1', 'B', 1300000, 'Program studi yang mempelajari bahasa, sastra, dan budaya Inggris.', true, NOW(), NOW()),

-- FKIP Programs
('p7', 'Pendidikan Bahasa Indonesia', 'FKIP', 'S1', 'A', 1300000, 'Program studi untuk mencetak guru bahasa Indonesia yang profesional.', true, NOW(), NOW()),
('p8', 'Pendidikan Bahasa Inggris', 'FKIP', 'S1', 'A', 1300000, 'Program studi untuk mencetak guru bahasa Inggris yang kompeten.', true, NOW(), NOW()),
('p9', 'Pendidikan Matematika', 'FKIP', 'S1', 'A', 1300000, 'Program studi untuk mencetak guru matematika yang berkualitas.', true, NOW(), NOW()),
('p10', 'Pendidikan Biologi', 'FKIP', 'S1', 'B', 1300000, 'Program studi untuk mencetak guru biologi yang profesional.', true, NOW(), NOW()),
('p11', 'Pendidikan Fisika', 'FKIP', 'S1', 'B', 1300000, 'Program studi untuk mencetak guru fisika yang kompeten.', true, NOW(), NOW()),
('p12', 'Pendidikan Kimia', 'FKIP', 'S1', 'B', 1300000, 'Program studi untuk mencetak guru kimia yang berkualitas.', true, NOW(), NOW()),
('p13', 'Pendidikan Guru Sekolah Dasar (PGSD)', 'FKIP', 'S1', 'A', 1300000, 'Program studi untuk mencetak guru sekolah dasar yang profesional.', true, NOW(), NOW()),
('p14', 'Pendidikan Guru PAUD', 'FKIP', 'S1', 'B', 1300000, 'Program studi untuk mencetak guru pendidikan anak usia dini.', true, NOW(), NOW()),

-- FMIPA Programs
('p15', 'Matematika', 'FMIPA', 'S1', 'A', 1400000, 'Program studi yang mempelajari matematika murni dan terapan.', true, NOW(), NOW()),
('p16', 'Statistika', 'FMIPA', 'S1', 'A', 1400000, 'Program studi yang fokus pada analisis data dan statistik.', true, NOW(), NOW()),
('p17', 'Biologi', 'FMIPA', 'S1', 'B', 1400000, 'Program studi yang mempelajari ilmu kehidupan dan organisme.', true, NOW(), NOW()),
('p18', 'Teknologi Pangan', 'FMIPA', 'S1', 'B', 1500000, 'Program studi yang fokus pada pengolahan dan keamanan pangan.', true, NOW(), NOW()),
('p19', 'Perencanaan Wilayah dan Kota', 'FMIPA', 'S1', 'B', 1500000, 'Program studi yang mempelajari perencanaan tata ruang dan pembangunan.', true, NOW(), NOW()),
('p20', 'Sistem Informasi', 'FMIPA', 'S1', 'B', 1600000, 'Program studi yang fokus pada pengembangan sistem informasi.', true, NOW(), NOW()),

-- FE Programs
('p21', 'Manajemen', 'FE', 'S1', 'A', 1400000, 'Program studi yang mempelajari manajemen bisnis dan organisasi.', true, NOW(), NOW()),
('p22', 'Akuntansi', 'FE', 'S1', 'A', 1400000, 'Program studi yang fokus pada akuntansi dan keuangan.', true, NOW(), NOW()),
('p23', 'Ekonomi Pembangunan', 'FE', 'S1', 'A', 1300000, 'Program studi yang mempelajari ekonomi makro dan pembangunan.', true, NOW(), NOW()),
('p24', 'Ekonomi Syariah', 'FE', 'S1', 'B', 1300000, 'Program studi yang fokus pada ekonomi berbasis syariah Islam.', true, NOW(), NOW()),
('p25', 'Pariwisata', 'FE', 'S1', 'B', 1400000, 'Program studi yang mempelajari industri pariwisata dan perhotelan.', true, NOW(), NOW()),

-- FHISIP Programs
('p26', 'Ilmu Hukum', 'FHISIP', 'S1', 'B', 1500000, 'Program studi yang mempelajari hukum dan sistem peradilan.', true, NOW(), NOW()),
('p27', 'Ilmu Administrasi Publik', 'FHISIP', 'S1', 'B', 1300000, 'Program studi yang fokus pada administrasi pemerintahan.', true, NOW(), NOW()),
('p28', 'Ilmu Pemerintahan', 'FHISIP', 'S1', 'B', 1300000, 'Program studi yang mempelajari sistem pemerintahan dan politik.', true, NOW(), NOW());
