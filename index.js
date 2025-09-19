const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = createServer((req, res) => {
    // Handle API routes or custom routes if needed
    // Example: Custom route handling
    // if (req.url === '/custom-route') {
    //   return app.render(req, res, '/custom-page', Object.assign({}, req.params, req.query))
    // }

    // Default Next.js handler
    return handle(req, res)
  })

  const port = process.env.PORT || 3000
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})