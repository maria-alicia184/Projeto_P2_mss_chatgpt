require('dotenv').config()

const express= require('express')
const app= express()
app.use(express.json())

const funcoes = {
    LembreteCriado: (lembrete) =>{
    baseConsulta[lembrete.id] = lembrete
    },
    ObservacaoCriada: (observacao) => {
    const observacoes = baseConsulta[observacao.lembreteId]['observacoes'] || []
    observacoes.push(observacao)
    baseConsulta[observacao.lembreteId]['observacoes'] = observacoes
    },
    ObservacaoAtualizada: (observacao) => {
    const observacoes = baseConsulta[observacao.lembreteId]['observacoes']
    const indice = observacoes.findIndex(o => o.id === observacao.id)
    observacoes[indice] = observacao
    },
    LembreteAnalisado: (lembrete) => {
    const lembretes = baseConsulta[lembrete.lembreteId]['lembretes']
    const indice = lembretes.findIndex(l => l.id === lembrete.id)
    observacoes[indice] = lembrete
    }
}

const baseConsulta = {}

//get/lembretes
app.get('/lembretes',(req,res)=>{
res.send(baseConsulta)
})

//post /eventos
app.post('/eventos', (req,res) => {
try{
    funcoes[req.body.tipo](req.body.dados)
}
catch(e){}
res.send({msg:'ok'})
})

const{MSS_CONSULTA_PORTA} = process.env
app.listen(MSS_CONSULTA_PORTA, () => {console.log(`Consulta.Porta ${MSS_CONSULTA_PORTA} `)})