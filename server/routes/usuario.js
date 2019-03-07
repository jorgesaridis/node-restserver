const express = require('express')
const app = express()
const Usuario = require('./../models/usuario')

app.get('/usuario', function (req, res) {
    res.json('get de Usuario')
  })
  
  app.post('/usuario', function (req, res) {
      let body = req.body
  
      let usuario = new Usuario({
          nombre: body.nombre,
          email: body.email,
          password: body.password,
          role: body.role
      });

      usuario.save( (err, usuarioDb) => {
          if (err) {
              return res.status(400).json({
                  ok: false,
                  err
              })
          }

          res.json({
              ok: true,
              usuario: usuarioDb
          });
      })
  })
  
  app.put('/usuario/:id', function (req, res) {
      const id = req.params.id;
      res.json({
          id
      })
  })
  
  app.delete('/usuario', function (req, res) {
      res.json('delete de Usuario')
  })
  
  module.exports = app;