

 const faltas = 10;
 import { notaFinal } from './tipo-number.js';

const estudanteAprovacao = function (notaFinal, faltas) {
    if (notaFinal >= 5 && faltas <= 15) {
        return true;
            }
        return false;
   }

   console.log(estudanteAprovacao(notaFinal, faltas));
