/* const express = require("express")
const next = require("next")
const routes = require('./routes')
const dev = process.env.NODE_ENV !== 'production'

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

    server.get("/:slug", (req, res) => {
        return app.render(req, res, { slug: req.params.slug })
      })

 */

'use strict';

var next = require('next');
var express = require('express');
// const withCSS = require('@zeit/next-css');
var routes = require('./routes');
var port = process.env.PORT || 3333;
var dev = process.env.NODE_ENV !== 'production';
var app = next({
  dev: dev
});

app.prepare().then(function() {
  const server = express()
   
  server.use('/static', express.static('static'))

  server.get('/', (req, res) => {
    return app.render(req, res, '/')
  })

  server.get('/about', (req, res) => {
    return app.render(req, res, '/about')
  })

  server.get('/work', (req, res) => {
    return app.render(req, res, '/work')
  })

  server.get('/contact', (req, res) => {
    return app.render(req, res, '/contact')
  })

  server.get('/:slug', (req, res) => {
    const queryParams = {
      slug: req.params.slug,
      type: req.params.type
    }
    return app.render(req, res, '/project', queryParams)
  })

  server.listen(port, function(err) {
      if (err) {
        throw err;
      }
      console.log('> Ready on http://localhost:' + port);
    });
});