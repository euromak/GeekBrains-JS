// exersise #1

var a = 1, b = 1, c, d;

c = ++a;           // 2 возвращает увеличенное значение на 1
d = b++;           // 1 возвращает значение до увеличения
c = (2 + ++a);      // 5 т.к. в a было уже '2' увеличивает это значение на 1 и прибавляет 2
d = (2 + b++);      // 4 т.к. в b было уже '2' возвращает старое значение и прибавляет 2

console.log("c = " + a);    // 3 значение после двух увеличений
console.log("b = " +  b);    // 3 значение после двух увеличений

// exersise #2

var f = 2;
var x = 1 + (f *= 2);

console.log("x = " + x);    // 5

//exersise #3

function comparison(h,m) {
    if (h >= 0 && m >= 0) {
        return result = h-m;
    }
    else if(h < 0 && m < 0) {
        return result = h * m;
    }
    else {
        return result = h + m;
    }
}

console.log(comparison(4, 4));
console.log(comparison(-4, -4));
console.log(comparison(4, -4));
console.log(comparison(-4, 10));

//exersise #4

var o = 0;

switch(o) {
    case 0:
        document.write('0');
    case 1:
        document.write('1');
    case 2:
        document.write('2');
    case 3:
        document.write('3');
    case 4:
        document.write('4');
    case 5:
        document.write('5');
    case 6:
        document.write('6');
    case 7:
        document.write('7');
    case 8:
        document.write('8');
    case 9:
        document.write('9');
    case 10:
        document.write('10');
    case 11:
        document.write('11');
    case 12:
        document.write('12');
    case 13:
        document.write('13');
    case 14:
        document.write('14');
    case 15:
        document.write('15');
        break;
    default:
        document.write('Введите число от 0 до 15');
}

//exersise #5

function addition(arg1, arg2) {
    return result = arg1 + arg2;
}

function subtraction(arg1, arg2) {
    return result = arg1 - arg2;
}

function multiplication(arg1, arg2) {
    return result = arg1 * arg2;
}

function division(arg1, arg2) {
    return result = arg1 / arg2;
}

//exersise #6

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case addition:
            result = addition(arg1, arg2);
            break;
        case subtraction:
            result = subtraction(arg1, arg2);
            break;
        case multiplication:
            result = multiplication(arg1, arg2);
            break;
        case division:
            result = division(arg1, arg2);
            break;
        default:
            result = console.log('Введите в качестве 3 аргумента одну из основных математических операций addition/subtraction/multiplication/division');
            break;
    }
    return result;
}

//exersise #7

var zero = null;
var q = 0;

console.log(zero == q); // false т.к. переменная zero ничего не содержит(очищена)

//exersise 8

function power(val, pow) {
        if(pow === 1){
            return val;
        }
        return val * power(val, pow - 1);
}


