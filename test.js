var a = [
    {
        number: 1,
        name: "one",
    },
    {
        number: 2,
        name: "two",
    },
    {
        number: 3,
        name: "three",
    },
    {
        number: 4,
        name: "four",
    }

];

var b = prompt('Введите число');
var c = [];

function x(){
    var i;
    for(i = 0; i < a.length; i++){
        if(b == a[i].number){
            c.push(a[i]);
            console.log(i);
        }
    }
}

x();