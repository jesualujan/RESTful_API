const color = require ('colors')
require('dotenv').config()
const express = require ('express')
const morgan = require ('morgan')
const app = express()

//*SETTINGS 
// app.set('port', process.env.PORT || 3000)

//* MIDDLEWARES 
app.use(morgan ('dev')) // Utiliza el formato 'dev' para obtener registros detallados

//*ROUTES este será mi endpoint
app.get('/', (req,resp)=>{
    resp.send('SERVIDOR FUNCIONANDO')
})


app.get('/api', (req,res) => {
    res.json({
        succes: 1,
        message: "la api está funcionando"
    })
})

//*STARTING THE SERVER
app.listen(process.env.APP_PORT, () => {
    console.log('SERVIDOR CORRIENDO EN EL PUERTO: '.bgBlue , process.env.APP_PORT)
})


https://morioh.com/p/314d05258cfb?f=5df445b0103f3007600e1a57&fbclid=IwAR2VcMa2svdsne5MQm2RU7EeHea2D7xli7d7RLR2BEHEOm50L0NatzoyUCU 21:06