const temperaturas = [26, 25, 14, 30, 20]

function calcularMedia(a){
    let i = 0
    let soma = 0 
    while(i < a.length){
        soma = soma += a[i];
        i+= 1
    }
    const media = soma/a.length
    return media
}

function verificarSituacao(media){
    if (media > 25)
        return "Quente"
    else if (media  >= 15 && media <= 25)
        return "Agradável"
    else (media < 15)
        return "Frio"
}

const media = calcularMedia(temperaturas);
const resultado = verificarSituacao(media);


console.log(media);
console.log(resultado);
