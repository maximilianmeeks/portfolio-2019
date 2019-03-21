'use strict';

const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');
const helper = require("./helper");
const port = process.env.PORT || 3333;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev: dev
});
const handle = app.getRequestHandler();


app.prepare().then(function() {
  const server = express()
   
  server.use('/static', express.static('static'));
  server.use(handle);
  server.use(bodyParser.urlencoded({extended: false}));
  server.use(bodyParser.json());

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

  server.get('/loading', (req, res) => {
    return app.render(req, res, '/loading')
  })

  server.get('/project:slug', (req, res) => {
    const queryParams = {
      slug: req.params.slug,
      type: req.params.type
    }
    return app.render(req, res, '/project', queryParams)
  })

  server.get('/work/:slug', (req, res) => {
    return app.render(req, res, '/work', { slug: req.params.slug })
  })

  server.post('/send', (req, res) => {
        const output = `
          <h3>Kontaktanfrage über dein Portfolio</h3>
          <h4>Kontaktdaten:</h4>
          <p>Name: ${req.body.name}</p>
          <p>E-Mail: ${req.body.email}</p>
          <p>Nachricht: ${req.body.text}</p>
          <p>🙋</p>
        `;
        res.send(helper(output));
  })

  server.listen(port, function(err) {
        if (err) {
          throw err;
        }
        console.log('> Ready on http://localhost:' + port);
      });
})
