// - генерация 4-х значного числа

function randomNumber() {
    randomNumber = Math.round(Math.random()*10000);
    console.log(randomNumber);
}


function beginGame() {
    var begin = confirm('Сыграем в игру?');

    if(begin==true){
        randomNumber();
        game();
    }
}

function game() {
    while(true) {
        var answer = prompt('Введите загаданное 4-х значное число');

        if(answer==randomNumber) {
            alert("Поздравляем! Вы угадали число.");
            beginGame();
            break;
        }
        else if(answer==null){
            break;
        }
        else {
            alert('Неверно');
        }
    }
}

beginGame();