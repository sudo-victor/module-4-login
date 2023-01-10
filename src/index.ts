import * as express from 'express'

const thiago = express();

thiago.use(express.json());

function PequiController(req, res) {
  res.send('nininho')
}

function ValidadorPequi(req, res, next) {
  const { token } = req.headers
  // Validar meu token
  res.status(401).json({ message: 'Invalid Token'})
  return res.status(401).json({ message: 'Unauthorized'})
  next()
}

thiago.get('/pequi', ValidadorPequi, ValidadorPequi, ValidadorPequi, PequiController)

// Params
// Query
// Body
// Header

thiago.listen(3333, () => console.log('listening'))
