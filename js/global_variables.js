// У функции есть доступ к внешним переменным

let userName = 'Вася';

function showMessage() {
    let message = 'Привет, ' + userName;
    alert(message);
}

showMessage();



// Функция обладает полным доступом к внешним переменным
// и может изменять их значение.


// let userName = 'Вася';
//
// function showMessage() {
//     userName = "Петя"; // (1) изменяем значение внешней переменной
//
//     let message = 'Привет, ' + userName;
//     alert(message);
// }
//
// alert( userName ); // Вася перед вызовом функции
//
// showMessage();
//
// alert( userName )



// Внешняя переменная используется,
// только если внутри функции нет такой локальной.

// Если внутри функции объявлена переменная которая имеет
// такое-же имя как и внешняя
// то при выполнении функции будет использоваться локальная
// переменная а внешняя будет проигнорирована


// let userName = 'Вася';
//
// function showMessage() {
//     let userName = "Петя"; // объявляем локальную переменную
//
//     let message = 'Привет, ' + userName; // Петя
//     alert(message);
// }
//
// // функция создаст и будет использовать свою собственную локальную переменную userName
// showMessage();
//
// alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную
