import readlineSync from 'readline-sync';
const rockPaperScissors = (decitionPlayer) => {
    decitionPlayer = decitionPlayer.toLowerCase();
    const randomDecition = Math.random();
    let decitionComp;
    if (randomDecition < 0.33) {
        decitionComp = "камень";
    } else if (randomDecition < 0.66) {
        decitionComp = "бумага";
    } else {
        decitionComp = "ножницы"
    }
    if (decitionPlayer === decitionComp) {
        return "У вас с компьютером одинковый выбор - Ничья";
    }
    if (decitionPlayer === "камень" && decitionComp === "ножницы") {
        return `Ваш выбор: ${decitionPlayer} 
Выбор компьютера: ${decitionComp}
Игрок: победил`;
    } else if (decitionPlayer === "бумага" && decitionComp === "камень") {
        return `Ваш выбор: ${decitionPlayer} 
Выбор компьютера: ${decitionComp}
Игрок: победил`;
    } else if (decitionPlayer === "ножницы" && decitionComp === "бумага") {
        return `Ваш выбор: ${decitionPlayer} 
Выбор компьютера: ${decitionComp}
Игрок: победил`;
    } else {
        return `Ваш выбор: ${decitionPlayer} 
Выбор компьютера: ${decitionComp}
Игрок: проиграл`;
    }   
}

console.log(rockPaperScissors(readlineSync.question('Ваш выбор ')));
