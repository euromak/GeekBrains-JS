var $table = document.createElement('div');
$table.classList.add('table');
document.body.appendChild($table);

var $cell = document.createElement('div');
$cell.innerHTML = 'T';



for(var i = 0; i < 64; i++){
    $cell = $cell.cloneNode(true);
    $table.appendChild($cell);
    $cell.classList.add('cell');
}
/*
for(var i = 0; i < 64; i++){
    $cell.classList.add('black');
    console.log(i);
}
*/