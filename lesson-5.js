var $table = document.createElement('div');
$table.classList.add('table');
document.body.appendChild($table);

var $row = document.createElement('div');
$row.classList.add('row');

var $cell = document.createElement('div');
$cell.classList.add('cell');

for(var i = 0; i < 8; i++){
    $table.appendChild($row.cloneNode($row));
    for(var j = 0; j < 8; j++){
        var rowCell = document.getElementsByClassName('row')[i];
        rowCell.appendChild($cell.cloneNode($cell));
    }
}

for(i = 0; i < 8; i++){
    var rowCell = document.getElementsByClassName('row')[i];
    var cellColor = document.getElementsByClassName('cell');

    if(i % 2 == 1){
        cellColor[i].style.backgroundColor = '#7e4105';
    }
    console.log(i);

}




/*
// добавляем клетки в ряд
for(var i = 0; i < 8; i++){
    $cell = $cell.cloneNode(true);
    $row.appendChild($cell);
}
// добавляем ряды в логический контейнер
for(i = 0; i < 8; i++){
    $row = $row.cloneNode(true);
    $table.appendChild($row);
}
*/
// раскрашиваем клетки доски






