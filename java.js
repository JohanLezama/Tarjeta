var boton = document.getElementById('velocidad');
boton.addEventListener('click', calcular);

function calcular(){
    var distancia = parseInt(document.getElementById('distancia').value);
    var tiempo = parseInt(document.getElementById('tiempo').value);
    var final = distancia/tiempo
    document.getElementById('finalvelocity').innerHTML = final;

}