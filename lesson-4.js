var number = prompt('Введите число от 0 до 999');

var objectNumber = {};

function convert(number){
    var i;

    if(number > 999 || number < 0){
        alert('Вы ввели неверное число');
        return objectNumber;
    }
    else if(number == null){
        alert('Ввод отменен');
        return number;
    }

    for(i = 0; i < number.length; i++){
        switch(number.length){
            case 1:
                objectNumber.units = +number.charAt(0);
                console.log(i);
                break;
            case 2:
                if(i == 1){
                    objectNumber.decades = +number.charAt(0);
                    objectNumber.units = +number.charAt(1);
                }
                console.log(i);
                break;
            case 3:
                objectNumber.hundreds = +number.charAt(0);
                objectNumber.decades = +number.charAt(1);
                objectNumber.units = +number.charAt(2);
                console.log(i);
                break;
        }

    }

    return alert(objectNumber + ' = ' + objectNumber.hundreds + '' + objectNumber.decades + '' + objectNumber.units);
}

convert(number);