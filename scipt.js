function resultado() {
    let textNumber = window.document.getElementById('numero')
    let n = Number(textNumber.value)
    let resultado = document.getElementById('res')
    
    let resKM = n / 1000;
    let resCM = n * 100;

    resultado.innerHTML = `A conversão de Metro para Quilometros é ${resKM} e a de Metro para Centimetros é ${resCM}`

}