'use strict';

const next = require('next');
const express = require('express');
// const withCSS = require('@zeit/next-css');
const routes = require('./routes');
const port = process.env.PORT || 3333;
const dev = process.env.NODE_ENV !== 'production';

const app = next({
  dev: dev
});

const handle = app.getRequestHandler();

app.prepare().then(function() {
  const server = express()
   
  server.use('/static', express.static('static'))

  server.use (handle)

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

/*   server.post('/graphql', (req, res) => {
    return app.render(req, res, '/project')
  }) */

  server.listen(port, function(err) {
      if (err) {
        throw err;
      }
      console.log('> Ready on http://localhost:' + port);
    });
});