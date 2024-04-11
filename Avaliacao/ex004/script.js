let notasAcimaCinco = []
let soma = 0

for (let i = 0; i < 5; i++) {
    let nomeAluno = prompt("Digite o nome do aluno:")
    let nota = parseFloat(prompt("Digite a nota de " + nomeAluno + ":"))

    if (nota > 5) {
        notasAcimaCinco.push(nota)
        soma += nota
    }
}

let media = soma / notasAcimaCinco.length
alert('A média das notas é: '+media)