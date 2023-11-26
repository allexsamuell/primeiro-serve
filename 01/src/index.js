const express=require('express')

const app=express()
    const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"]
let i=0
app.get('/',function(requisicao,resposta){

const nomejogadores=jogadores[i]
    i++
 
if(i>=jogadores.length){
  i=0
}
  resposta.send(`É a vez de ${nomejogadores} jogar`)
})

app.listen(3000,function(){
  console.log("serve iniciou")
})