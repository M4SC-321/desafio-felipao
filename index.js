let nome = "M4SC-321"
let xp = 10001
let nivel = [
    ["Radiante", xp >= 10001],
    ["Imortal", xp > 9000 && xp <= 10000],
    ["Ascendente", xp > 8000 && xp <= 9000],
    ["Platina", xp > 7000 && xp <= 8000],
    ["Ouro", xp > 6000 && xp <= 7000],
    ["Prata", xp > 2000 && xp <= 5000],
    ["Bronze", xp > 1000 && xp <= 2000],
    ["Ferro", xp <= 1000]
]


for (i = 0; i < 8; i++) {
    if (nivel[i][1] == true) {
        console.log("O Herói de nome " + nome + " está no nível de " + nivel[i][0])
    }
}