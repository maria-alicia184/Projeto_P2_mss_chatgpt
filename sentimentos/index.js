require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app= express()
app.use(express.json())

let palavraChave

const funcoes = {    

    LembreteCriado: (lembrete) => {
        lembrete.sentimento = lembrete.texto.includes(palavraChave)? 'Positivo' || 'Negativo' || 'Neutro':
        axios.post('http://localhost:10000/eventos', 
        {tipo: 'LembreteCrido', dados:lembrete}
        )
    },

    ObservacaoCriada: (observacao) => {
        observacao.sentimento = observacao.texto.includes(palavraChave)? 'Positivo' || 'Negativo' || 'Neutro':
        axios.post('http://localhost:10000/eventos', 
        {tipo: 'ObservacaoCriada', dados:observacao}
        )
    },

    LembreteAnalisado: (lembrete) => {
        lembrete.sentimento = lembrete.texto.includes(palavraChave)? 'Positivo' || 'Negativo' || 'Neutro':
        axios.post('http://localhost:10000/eventos', 
        {tipo: 'LembreteAnalisado', dados:lembrete}
        )
    }

}

//GET localhost:8000/sentimentos

app.get('/sentimentos',(req, res) => {

    res.send(sentimentos)

})

 

//POST localhost:10000/eventos

app.post('/eventos', (req, res) => {

    try{

        funcoes[req.body.tipo](req.body.dados)

    }

    catch(e){}

    res.status(200).send({msg:'ok'})

})

 

const {MSS_SENTIMENTOS_PORTA} = process.env

app.listen(

    MSS_SENTIMENTOS_PORTA, () => {console.log(`Sentimentos.Porta ${MSS_SENTIMENTOS_PORTA}`)})