const arrayExercicio = [4,8,9,3,23,6,10,29]

function multiplicaTres(numero) {
    return numero * 3;
}
const arrayTres = arrayExercicio.map(multiplicaTres)
console.log(arrayTres)

function dividePorDois(numero){
    return numero/2
}

const arrayDivididoPorDois = arrayExercicio.map(dividePorDois)
console.log(arrayDivididoPorDois)