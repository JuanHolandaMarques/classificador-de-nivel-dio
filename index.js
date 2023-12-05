let heroi = [(nome = "Juan"), (xp = 7.999)]

let xpHeroi = heroi[1]

if (heroi[1] <= 1.0) {
  console.log(`O Herói de nome ${heroi[0]} está no nivel de Ferro`)
} else if (xpHeroi > 1.0 && xpHeroi <= 2.0) {
  console.log(`O Herói de nome ${heroi[0]} está no nivel de Bronze`)
} else if (xpHeroi > 2.0 && xpHeroi <= 5.0) {
  console.log(`O Herói de nome ${heroi[0]} está no nivel de Prata`)
} else if (xpHeroi >= 6.0 && xpHeroi <= 7.0) {
  console.log(`O Herói de nome ${heroi[0]} está no nivel de Ouro`)
} else if (xpHeroi > 7.0 && xpHeroi <= 8.0) {
  console.log(`O Herói de nome ${heroi[0]} está no nivel de platina`)
} else if (xpHeroi > 8.0 && xpHeroi <= 9.0) {
  console.log(`O Herói de nome ${heroi[0]} está no nivel de Ascendente`)
} else if (xpHeroi > 9.0 && xpHeroi <= 10.0) {
  console.log(`O Herói de nome ${heroi[0]} está no nivel de Imortal`)
} else if (xpHeroi > 10.0) {
  console.log(`O Herói de nome ${heroi[0]} está no nivel de Radiante`)
}
