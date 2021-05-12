function showMessage(from, text) { // аргументы: from, text
    alert(from + ': ' + text);
}

showMessage('Аня', 'Привет!'); // Аня: Привет! (*)
showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)


// изменение значиения аргумента в функции

// function showMessage(from, text) {
//
//     from = '*' + from + '*'; // немного украсим "from"
//
//     alert( from + ': ' + text );
// }
//
// let from = "Аня";
//
// showMessage(from, "Привет"); // *Аня*: Привет
//
// // значение "from" осталось прежним,
// // функция изменила значение локальной переменной
//
// alert( from ); // Аня