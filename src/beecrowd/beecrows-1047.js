
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const [hInicial, minInicial, hFinal, minFinal] = lines[0].split(" ").map(Number) // get lines in format: "7 8 9 10"

let hora = 0
let minuto = 0
let tempTotal = 0

let mTInit = hInicial*60 + minInicial
let mTFin = hFinal*60 + minFinal

if( mTFin > mTInit) {
    tempTotal = mTFin - mTInit
    hora = Math.floor(tempTotal / 60)
    minuto = tempTotal % 60
} else {
    tempTotal = mTFin - mTInit
    hora = Math.floor(tempTotal / 60) + 24
    minuto = tempTotal % 60 + 60
    if( minuto == 60) {
        minuto =0
    }
}

console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`)