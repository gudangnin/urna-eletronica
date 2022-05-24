function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido')
    }
}
//armazenando uma lista de teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

//laço para percorrer todas as teclas
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`//template string
    
    //console.log(idAudio)

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    //verifica se estamos pressionando enter ou spaço para adc a class 'ativa'
    tecla.onkeydown = function (evento) {
        
        if(evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}



