// Desafio 2: Calculadora de partidas Rankeadas

let vitorias = 37
let derrotas = 5

let ranks = [
    ["Imortal", vitorias > 100],
    ["Lendário", vitorias > 90 && vitorias <= 100],
    ["Diamante", vitorias > 80 && vitorias <= 90],
    ["Ouro", vitorias > 50 && vitorias <= 80],
    ["Prata", vitorias > 20 && vitorias <= 50],
    ["Bronze", vitorias > 10 && vitorias <= 20],
    ["Ferro", vitorias <= 10],
]


function verificarSaldo(partidasGanhas, partidasPerdidas){
    return partidasGanhas - partidasPerdidas
}

function verificarNivel(tabelaRanks){
    for (i = 0; i < 7; i++){
        if (tabelaRanks[i][1] === true) {
            return tabelaRanks[i][0]
        }
    }
}


function imprimirStatus(saldo, nivel){
    console.log(`O Herói tem ${saldo} de saldo de rankeadas, e está no nível ${nivel}`)
}

let saldoVitorias = verificarSaldo(vitorias, derrotas)
let nivelJogador = verificarNivel(ranks, vitorias)

imprimirStatus(saldoVitorias, nivelJogador)