const express = require("express")
const next = require("next")

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const port = process.env.PORT || 4000


app.prepare()
.then(() => {
    const server = express()

    server.get('*', (req, res) => {
        return handle(req, res)
      })
        
      server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
    })
    .catch((ex) => {
      console.error(ex.stack)
      process.exit(1)
    })
    server.use("/static", express.static("static"))

    server.get("/post/:slug", (req, res) => {
        return app.render(req, res, "/post", { slug: req.params.slug })
      })

