

let dolarValor = document.getElementById("dolar");
let realValor = document.getElementById("real");

let resultado = document.getElementById("resultado");

function calcular(){

    let dolar = dolarValor.value;
    let real = realValor.value;


    let valor = dolar * real;
    resultado.innerHTML = `<p>Total de R$ ${valor.toFixed(2)}</p>`



}





