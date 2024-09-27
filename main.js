const titulo = document.getElementById ("exibir")

    let nota1 = 10;
    let falta1 = 1;
    let resultado;

    switch (true) {
        case (nota1 < 7 && falta1 > 20):
            resultado = "Reprovado"
            break;
        default: resultado = "Aprovado"
    }
    titulo.innerHTML=resultado
    