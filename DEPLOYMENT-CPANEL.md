# Deployment ke cPanel

Proyek Next.js ini dapat dideploy ke cPanel dengan pendekatan static export. Karena cPanel secara tradisional tidak mendukung server-side rendering Node.js secara langsung, kita akan mengekspor aplikasi sebagai file HTML, CSS, dan JavaScript statis.

## Persyaratan

1. cPanel dengan akses File Manager
2. cPanel dengan akses Git (opsional tapi direkomendasikan)
3. Akses ke Terminal cPanel (jika tersedia)

## Metode Deployment

### Metode 1: Build Lokal dan Upload Manual

1. **Build proyek secara lokal:**
   ```bash
   npm run build:static
   ```

2. **Upload file:**
   - Setelah build selesai, semua file yang diperlukan akan berada di direktori `out/`
   - Upload seluruh isi direktori `out/` ke direktori public_html di cPanel Anda melalui File Manager

### Metode 2: Build di Server cPanel (Jika Tersedia)

Jika cPanel Anda memiliki akses Terminal dan Node.js:

1. **Clone repository di cPanel:**
   ```bash
   git clone https://github.com/USERNAME/REPO.git
   cd REPO
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build proyek:**
   ```bash
   npm run build:static
   ```

4. **Pindahkan file ke public_html:**
   ```bash
   cp -r out/* /path/to/public_html/
   ```

## Konfigurasi yang Diperlukan

### File .htaccess

File `.htaccess` sudah disediakan dalam direktori `public/` dan akan secara otomatis dit copy ke output build. File ini menghandle:

- Routing fallback ke index.html untuk client-side routing
- UTF-8 encoding

### Konfigurasi Next.js

Konfigurasi untuk static export sudah diatur dalam `next.config.mjs`. Beberapa hal penting:

- Output diatur ke `export`
- Image optimization dinonaktifkan (karena tidak tersedia dalam static export)
- Middleware tidak dapat digunakan

## Limitasi

1. **Image Optimization:** Fitur image optimization bawaan Next.js tidak tersedia dalam static export
2. **API Routes:** API routes tidak akan berfungsi dalam static export
3. **Server-Side Rendering:** Semua halaman akan di-render di client-side
4. **Incremental Static Regeneration:** Fitur ini tidak tersedia dalam static export

## Solusi Alternatif untuk Fungsionalitas Backend

1. **Form Submission:** Gunakan layanan eksternal seperti:
   - Formspree
   - Netlify Forms
   - Getform
   - EmailJS
   - Atau gunakan Resend API dengan pengiriman melalui client-side

2. **Database Integration:** Gunakan API eksternal atau serverless functions:
   - Firebase
   - Supabase
   - MongoDB Atlas
   - Vercel Serverless Functions

3. **Authentication:** Gunakan layanan third-party:
   - Auth0
   - Firebase Authentication
   - Supabase Auth

## Update dan Maintenance

Untuk update:

1. Lakukan perubahan di lokal
2. Jalankan build ulang
3. Upload file yang telah diupdate ke cPanel
4. Atau jika menggunakan Git di cPanel, pull perubahan dan build ulang

## Troubleshooting

### Halaman 404 pada Route

Pastikan file `.htaccess` sudah terupload dengan benar dan mengandung konfigurasi rewrite rule.

### Gambar Tidak Muncul

1. Pastikan path gambar benar dan menggunakan path absolut atau relatif yang sesuai
2. Pastikan gambar sudah terupload ke direktori yang benar

### Styling Tidak Muncul

1. Pastikan semua file CSS sudah terupload
2. Periksa path CSS di HTML
3. Pastikan tidak ada error 404 untuk file CSS

## Script yang Tersedia

- `npm run build:static` - Build proyek untuk static export
- `npm run serve:static` - Jalankan server lokal untuk testing static files
- `npm run verify:deployment` - Verifikasi integritas file sebelum deployment

## File yang Dihasilkan

Setelah build, direktori `out/` akan berisi:
- `index.html` - Halaman utama
- `_next/` - Direktori berisi assets, CSS, dan JavaScript
- `404.html` - Halaman error
- File statis lainnya sesuai dengan halaman yang ada

## Catatan Penting

1. Build harus dilakukan setiap kali ada perubahan pada kode
2. Selalu backup file sebelum melakukan update
3. File `.env.local` tidak akan berfungsi dalam static export - gunakan environment variables cPanel jika diperlukan
4. Gunakan `npm run verify:deployment` sebelum upload ke cPanel untuk memastikan file siap untuk deployment