
function VerificarNumero() {
    let divisores = []
    let num = parseInt(prompt("Insira um numero."))

    for (let index = 1; index < num; index++) {
        if (num % index == 0) {
            divisores.push(index)
        }
    }
    let perfeito = 0
    divisores.forEach(x =>{
        perfeito = perfeito + x
        console.log(perfeito)
    })
    if (perfeito == num) {
        return true
    }else{
        return false
    }
}
console.log(VerificarNumero())