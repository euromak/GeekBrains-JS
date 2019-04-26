// exersise #1

var a = 1, b = 1, c, d;

c = ++a;           // 2 возвращает увеличенное значение на 1
d = b++;           // 1 возвращает значение до увеличения
c = (2+ ++a);      // 5 т.к. в a было уже '2' увеличивает это значение на 1 и прибавляет 2
d = (2+ b++);      // 4 т.к. в b было уже '2' возвращает старое значение и прибавляет 2
console.log(a);    // 3 значение после двух увеличений
console.log(b);    // 3 значение после двух увеличений

// exersise #2

var f = 2;
var x = 1 + (f*= 2);
console.log(x);    // 5

//exersise #3

var h;
var m;
var result;

function comparison(h,m) {
    if (h >= 0 && m >= 0) {
        return result = h-m;
    }
    else if(+h < 0 && +m < 0) {
        return result = h * m;
    }
    else if ((h < 0 && m > 0)||(h > 0 && m < 0)){
        return result = h + m;
    }
}

//exersise #4

var o = 11;

switch(o) {
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
