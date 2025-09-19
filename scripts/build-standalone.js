const { copyFileSync, existsSync, mkdirSync } = require('fs')
const { join } = require('path')

// Direktori hasil build Next.js
const nextDir = join(__dirname, '..', '.next')
const standaloneDir = join(nextDir, 'standalone')

// Membuat direktori jika belum ada
if (!existsSync(standaloneDir)) {
  mkdirSync(standaloneDir, { recursive: true })
}

// Menyalin file server.js ke direktori standalone
const serverFile = join(nextDir, 'server.js')
const standaloneServerFile = join(standaloneDir, 'server.js')

if (existsSync(serverFile)) {
  copyFileSync(serverFile, standaloneServerFile)
  console.log('server.js copied to standalone directory')
} else {
  console.log('server.js not found in .next directory')
}

// Menyalin package.json ke direktori standalone
const packageFile = join(__dirname, '..', 'package.json')
const standalonePackageFile = join(standaloneDir, 'package.json')

if (existsSync(packageFile)) {
  copyFileSync(packageFile, standalonePackageFile)
  console.log('package.json copied to standalone directory')
} else {
  console.log('package.json not found')
}

console.log('Standalone build preparation completed')