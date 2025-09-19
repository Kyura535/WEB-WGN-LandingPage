# Deployment ke cPanel

Untuk mendeploy proyek ini ke cPanel, ikuti langkah-langkah berikut:

## 1. Build Proyek

```bash
npm run build:static
```

## 2. Verifikasi File

```bash
npm run verify:deployment
```

## 3. Upload ke cPanel

Upload seluruh isi direktori `out/` ke direktori `public_html` di cPanel Anda melalui File Manager.

## Detail Lebih Lanjut

Lihat file [DEPLOYMENT-CPANEL.md](DEPLOYMENT-CPANEL.md) untuk informasi lengkap tentang deployment ke cPanel.