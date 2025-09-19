const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = process.env.PORT || 3000

// Saat dijalankan sebagai standalone server
let app
if (process.env.NODE_ENV === 'production') {
  // Gunakan path relatif untuk standalone server
  app = next({ dev, hostname, port, dir: __dirname })
} else {
  // Gunakan konfigurasi default untuk development
  app = next({ dev, hostname, port })
}

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer(async (req, res) => {
    try {
      // Handle API routes atau custom routes jika diperlukan
      // Contoh:
      // if (req.url === '/api/custom') {
      //   return res.end('Custom API response')
      // }
      
      // Handler default Next.js
      await handle(req, res)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })

  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`)
  })
})