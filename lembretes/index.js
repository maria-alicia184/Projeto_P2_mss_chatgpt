const express = require('express')
const app = express()

//GET localhost:4000/lembretes
app.get('/lembretes',(req, res) => {

})

//POST localhost:4000/lembretes
app.post('/lembretes',(req, res) => {

})

app.listen(4000, () => console.log('Lembretes. Porta 4000'))
