const express=require('express')
const app=express()

let ligou=false;
let min=0;
let seg=0;
let Setintervaldisparou=false;

function cronometro(){
    ligou=true;
    if(!Setintervaldisparou){
setInterval(function(){
    if(ligou===true){

   
    if(seg===59){
        seg=0
        min++
    }else{
        seg++
    } }
},1000);
Setintervaldisparou=true;{

}

    }
}

app.get('/',function(requisicao,resposta){
   resposta.send(`Tempo atual do cronômetro: ${min.toString().padStart(2,"0")} minutos e ${seg.toString().padStart(2,"0")} segundos`)

})


app.get('/inicia',function(requisicao,resposta){
    cronometro()
    resposta.send(`cronometro iniciado!`)

})




app.get('/pausar',function(requisicao,resposta){
    ligou=false;
    resposta.send(`cronometro pausado`)

})







app.get('/continuar',function(requisicao,resposta){
    ligou=true;
    resposta.send(`cronometro continuando`)

})





app.get('/zerar',function(requisicao,resposta){
    min=0;
    seg=0;
    resposta.send(`cronometro zerado`)

})



app.listen(8000,function(){
    console.log("serve iniciou")
})
