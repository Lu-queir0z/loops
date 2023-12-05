let contador = 0;
let numero;
let resultado;
let linha;

function tabuadaWhile() {
    numero = parseInt(document.querySelector('#slcNumero').value);
    //EXEMPO DE LOOP WHILE
    while ( contador <= 10 ){
        //contador = contador + 2
        //console.log('valor do contador' +  contador);
        //console.log('8 X ' + contador + '=' + (8*contador));
        resultado = numero + ' X ' + contador + ' = ' + (numero * contador)
        //console.log(resultado);
        linha += '<tr><td>' + resultado + '</tr></td>';
        console.log(linha);
        contador ++;
}
    document.querySelector('#resultadoTabuada').innerHTML = linha;
}

function tabuadaFor() {
    numero = parseInt(document.querySelector('#slcNumero').value);

    for (let contador = 0; contador <= 10; contador++) {
        
        //console.log('valor do contador: ' +  contador);
        resultado = numero + ' X ' + contador + ' = ' + (numero * contador)
        linha += '<tr><td>' + resultado + '</tr></td>';
        console.log(linha);
    }
    document.querySelector('#resultadoTabuada').innerHTML = linha;
}

function limpar() {
    location.reload();
}