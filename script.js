let order = [];
let clickOrdem = [];
let score = 0;

// verde = 0;
// vermelho = 1;
// azul = 2;
// amarelo = 3

const blue = document.querySelector('.blue');
const yellow = document.querySelector('yellow')
const green = document.querySelector('green');
const red = document.querySelector('red');

let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrdem = []

    for(let i in order){
        let elementColor = createElementColor(order[i]);
        lightcolor(elementColor, Number(i) + 1);
    }
}

let lightcolor = (element, number) =>{
   number = number * 500;
   setTimeout(() =>{
        element.classList.add('selected');
   }, number - 250);
   setTimeout(() =>{
       element.classList.remove('selected');
   });
}

let checkOrder = () =>{
    for(let i in clickOrdem){
        if(clickOrdem[i] != order[i]){
            lose();
            break;
        }
    }

    if(clickOrdem.length == order.length){
        alert(`Pontuação: ${score} \n Iniciando próximo nível`);
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) =>{
    clickOrdem[clickOrdem.length] = color;
    createElementColor(color).classList.add('selected');

    setTimeout(() =>{
        createElementColor(color).classList.remove('selected')
        checkOrder();
    })
    
}

let createElementColor = (color) =>{
    if(color == 0){
        return green;
    } else if (color == 1){
        return red;
    } else if (color == 2){
        return yellow;
    } else{
        return blue;
    }
}

// função para avançar para o próximo nível

let nextLevel = () =>{
    score++;
    shuffleOrder();
}

let gameOver = () =>{
    alert(`Pontuação: ${score} \n Já era, perdeu!! \n
    Clique em OK para iniciar um novo jogo!`);
    order = [];
    clickOrdem = [];

    playGame();
}

//função de início
let playGame = () =>{
    alert('Bem vindo ao Gênesis! Iniciando jogo')
    score = 0;

    nextLevel();
}


//eventos de clique nas cores
green.onclick = () => click(0)
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();