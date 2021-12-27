/*
console.log("Este é um programa para observar como funcionam as variáveis let e const.")
console.log("Meu nome é Macielly.")
let num = 1
console.log("Num: "+typeof num)
num = "Modificado."
console.log("Num: "+typeof num)

const pi = 3.14
console.log("Pi: "+pi)

console.log("Este é um programa para verificar maioridade.")

let idade = [18, 16, 20]
let cont = 0

for(let i = 0; i < idade.length; i++) {
	if(idade[i] >= 18) {
		console.log("Maior de idade.")
	} else {
		console.log("Menor de idade.")
	}
}

console.log("Este é um programa para calcular a média de notas.")
const notas = []
let soma = 0, media

notas.push(10, 6, 4, 8)

console.log("Este é o Array notas: "+notas)

for(let i = 0; i < notas.length; i++) {
	soma += notas [i] // soma = soma + notas[i];
}
media = soma / notas.length
console.log("Média: "+media.toFixed(2)) //.toFixed é como o DecimalFormat do Java

notas.pop()
notas.pop()
notas.pop()
notas.pop()
console.log("Este é o Array notas: "+notas)
*/

console.log("Este é um programa para sofisticar o código anterior.")
const notas = []
let soma = 0, media;

notas.push(10, 6, 4, 8)
console.log("Este é o array notas: "+notas)
//função map
notas.map(function (item, index) {
	console.log("Item "+item+" no índice "+index)
})

notas.map((item) => soma += item) // a função map simula o for
/*
Ou: 
notas.map(function (item) {
	soma += item
})
*/
media = soma / notas.length
console.log("Média: "+media.toFixed(2))

while(notas.length) {
	notas.pop()
}
console.log("Este é o array notas: "+notas)