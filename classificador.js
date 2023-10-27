let nomeHeroi = "Super Man";
let xpHeroi = 8501;


if (xpHeroi < 1000) {
    let nivel = "Ferro";
      console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!");
} else if ((xpHeroi >= 1001) && (xpHeroi <= 2000)) {
    let nivel = "Bronze";
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!" );
} else if  ((xpHeroi >= 2001) && (xpHeroi <= 5000)) {
    let nivel = "Prata";
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!" );
} else if  ((xpHeroi >= 6001) && (xpHeroi <= 7000)) {
    let nivel = "Ouro";
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!" );
} else if  ((xpHeroi >= 7001) && (xpHeroi <= 8000)) {
    let nivel = "Platina";
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!" );
} else if  ((xpHeroi >= 8001) && (xpHeroi <= 9000)) {
    let nivel = "Ascendente";
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!" );
} else if  ((xpHeroi >= 9001) && (xpHeroi <= 10000)) {
    let nivel = "Imortal";
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!" );
} else if (xpHeroi >= 10001) {
    let nivel = "Radiante";
        console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel + "!" );
} else {
    console.log("O Nivel nao foi identificado, digite um valor valido");
}
