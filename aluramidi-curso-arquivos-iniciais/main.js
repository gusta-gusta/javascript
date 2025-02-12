function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const teclas = listaDeTeclas[contador];

    const instrumento = teclas.classList[1];

    const idAudio = '#som_' + instrumento;
    const idAudio2 = `#som_${instrumento}`;

    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }

    teclas.onkeydown = function (evento) {

        if (evento.classList == 'Space' || evento.classList == 'Enter') {
            
            teclas.classList.add('ativa');       
        
        }

        // switch (evento.classList == true) {
            
        //     case 'Space': teclas.classList.add('ativa');

        //         break;

        //         case 'Enter': teclas.classList.add('ativa');

        //         break;
        
        //     default:
        //         break;
        // }

    }

    teclas.onkeyup = function () {

        teclas.classList.remove('ativa');

    }

    // console.log(contador);
    }