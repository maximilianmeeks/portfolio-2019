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

const next = require('next');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3333;
const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev: dev
});

app.prepare().then(function() {
  const server = express()
   
  server.use('/static', express.static('static'));
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

  server.get('/:slug', (req, res) => {
    const queryParams = {
      slug: req.params.slug,
      type: req.params.type
    }
    return app.render(req, res, '/project', queryParams)
  })

  server.post('/send', (req, res) => {
      const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
        <p>E-Mail: ${req.body.email}</p>
        <p>Message: ${req.body.text}</p>
      `;
                // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: account.user, // generated ethereal user
            pass: account.pass // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>" // html body
        };

        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions)

        console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        })

  server.listen(port, function(err) {
      if (err) {
        throw err;
      }
      console.log('> Ready on http://localhost:' + port);
    });
});