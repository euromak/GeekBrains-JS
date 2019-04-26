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

