#!/bin/bash
# Script untuk generate favicon otomatis dari logo utama

# Pastikan ImageMagick terinstal
if ! command -v convert &> /dev/null
then
    echo "ImageMagick tidak ditemukan. Silakan install terlebih dahulu:"
    echo "Ubuntu/Debian: sudo apt-get install imagemagick"
    echo "MacOS: brew install imagemagick"
    exit 1
fi

# Buat direktori jika belum ada
mkdir -p public

# Generate berbagai ukuran favicon
convert public/logos/wgn-logo-original.png -resize 16x16 public/favicon-16x16.png
convert public/logos/wgn-logo-original.png -resize 32x32 public/favicon-32x32.png
convert public/logos/wgn-logo-original.png -resize 180x180 public/apple-touch-icon.png
convert public/logos/wgn-logo-original.png -resize 192x192 public/android-chrome-192x192.png
convert public/logos/wgn-logo-original.png -resize 512x512 public/android-chrome-512x512.png

# Generate favicon.ico
convert public/logos/wgn-logo-original.png -define icon:auto-resize=16,32,48,64 public/favicon.ico

echo "Generate favicon selesai!"