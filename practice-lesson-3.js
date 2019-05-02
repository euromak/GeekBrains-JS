// генерируем случайное 4-х значное число
function getRandom() {
    var buffer = [];

    while(buffer.length < 4){
        var rand = Math.floor(Math.random() * 10); // floor округление до меньшего

        if(buffer.includes(rand)) {
            continue;
        }

        buffer.push(rand);
    }

    return buffer;
}

var random = getRandom();
var i = 0;

//проверка результата
function checkResult(guess) {
    // первая цифра быки, вторая коровы
    var result = [0, 0];

    for(var i = 0; i < random.length; i++){

        if(+guess[i] === random[i]) {
            result[0]++;
        }
        else if(random.includes(+guess[i])) {
            result[1]++;
        }
    }

    return result;
}

// ф-ия выявления читера

function cheatingDetect(guess) {
    var buffer = [];

    for(var i = 0; i < guess.length; i++) {
        if(!buffer.includes(guess[i])) {
            buffer.push(guess[i]);
        }
        else {
            return true;
        }
    }

    return false;
}

// запрашиваем у пользователя необходимое для нас число

while (true) {
    var num = prompt('Введите число: (' + random + ')');
    if(num === null) {
        alert('Exit!')
        break;
    }
    var numericArray = num.split('');

       if(cheatingDetect(numericArray)) {
           alert('You are CHEATER! You Lose!');
           break;
       }

    var result = checkResult(numericArray);
    i++;

    if(result[0] == 4) {
        alert('Вы победили!' + ' Попытки: ' + i);
        break;
    }
    else {
        alert('Быки: ' + result[0] + '; Коровы: ' + result[1]);
    }
}