console.log('Javascript iniciado!');

// var = pode ser utilizado em qualquer lugar e é possível alterar o valor
var qdVer = document.getElementById('quadrado1');
var qdCinza = document.getElementsByClassName('quadrado');

posicionaQuadrados(qdCinza);

qdVer.style.width = '100px';
qdVer.style.height = '100px';

function posicionaQuadrados(collection){
    console.log(collection);
    // let = utiliza apenas no escopo
    for (let i = 0; i < collection.length; i++) {
        // const = a variavel não altera de forma nenhuma
        const element = collection[i];
        console.log(element);
        element.style.top = retornaPosicao('Y');
        element.style.left = retornaPosicao('X');
        // element.style.display = 'block';
    }
}

function retornaPosicao (varXY) {
    var altura = 470, largura = 470;
    var medidaRetorno;

    if(varXY === 'X'){ //Left
        medidaRetorno = Math.random() * (largura - 30) + 0;
    } else { //Top
        medidaRetorno = Math.random() * (altura - 30) + 0;        
    }
    return `${medidaRetorno}px`;
}

// var text = 'Texto JS';
// console.log(text);
// text = 200;
// console.log(text);
// text = {
//     id: 1,
//     textHTML: 'Meu texto objeto'
// };
// console.log(text);
// text.atualizado = true;
// console.log(text);
// text.exibeTexto = function(){
//     console.log(this.id + ' _ ' + this.textHTML);
//     alert(this.id + ' _ ' + this.textHTML);
// };
// text.exibeTexto();