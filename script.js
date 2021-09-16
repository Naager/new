/* Начнем практику */
/* 1. Просто вывидем алерт */
/* 2. Добавим строгий режим */

"use strict";

/* alert ('Ну что ж, начнем!!!'); */

/* 3. Создем перименные */

/* let admin ;
let name;

name = 'Джон';
admin = name;

alert (admin);

let myPlanetName;
myPlanetName = 'Земля';

let UserName;
UserName = 'Клим'; */

/* 4. Модальные окна alert, prompt, confirm */

/* let age= prompt ('Возраст','Введите свой возраст');

alert(age); */ /* Как получился null без ввода null */

/* 5. Исправить */

/*let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b); */

/* 6. Условное ветвление */

 /*let title = prompt('Какое «официальное» название JavaScript?', '???????');*/

                                        /* Задача 1 */

 /*Вариант 1*/ /* if (title === 'ECMAScript') {
     alert ('Верно');
 }
 else {
     alert('Не верно');
 } */

/*Вариант 2*/ /*(title === 'ECMAScript') ? alert ('Верно') : alert ('Не верно');*/

                                    /* Задача 2 */

/*Вариант 1*//*let a = prompt('Введите число','');
    if (a>0) {
     alert (1);
    } else if (a<0) {
    alert (-1);
}
else {
    alert(0);
}*/

/*Вариант 2*/

/* let a = prompt('Введите число','');
(a>0) ? alert(1) : (a<0) ? alert(-1) : alert(0); */

/* 7.Проверка значений */

/*let a = prompt('Введите число', ?)
if (a<=90 && a>=14);*/

/*let a;
if (a>90 && a<14);
if (!(a<90 && a>14));*/
/*;
let user = prompt('Введите логин','Admin');



    if (user === 'Admin') {
        prompt('Введите пароль', pasword = 'Я главный')
        if (pasword === 'Я главный') {
            alert('Добро пожаловать');
        } else if (pasword == null) {
            alert('Отменено');
        } else {
            alert('Вы кто?');
        }
    }
    if (user == null) {
        alert('Отменено');
    } else {
        lert("Я вас не знаю");
    }

*/
/*
let username = prompt('Введите лгин','');

    if (username === 'Admin')
    {
        let pasword = prompt('Введите пароль', 'pasword');

        if (pasword === 'pasword')
        {
            alert('Добро пожаловать')
        }
        else if (pasword === null)
        {
            alert('Отменено')
        }
        else
        {
            alert('Я тебя не знаю')
        }
    }
    else if (username == null)
    {
        alert('Отменено')
    }
    else
    {
        alert('Ты кто')
    }

*/



/* 8.Цыклы*/

/*let nam;
for (nam=2;nam<10;++nam);
alert (nam);*/


/*
let i = 0;
while (i<3);{
    alert(`number ${i}`);
    i++;
}
*/

/*let num;
do {
    num = prompt('Введите число', '');
}    while (num<=100 && num);
*/


/* 9.Цыкл switch */

/*
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {

    case 0:
        alert ('Вы ввели 0');
        break;
    case 1:
        alert ("Вы ввели 1");
        break;
    case 2:
    case 3:
        alert ("Вы ввели 2, а может 3");
        break;
    default:
        alert ('Не то число');
}

*/

/* 10. Функции */

/*
function chekNum ( a, b ) {
    if (a > b){
    return a
    }
    else if ( a < b ) {
        return b
    }
    else {
        return b;
    }

}

function chekNum_2 (a,b) {
     return a<b ? a : b;
}


*/


/*
}function pow (x,n) {
    let result = x;
    for (let i = 1; i < n; i++)
    {
        result *= x;
    }
    return result;

let x = prompt ('Введите Число', 'x');

let n = prompt ('Введите степень', 'n');

if (n<1){
    alert ('введено неправельное число');
}
else {
    alert (pow (x,n));
}
*/


/* 10.1 */

/*
function pow (x,n) {

    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
    let x =prompt("Введите число",);
    if(x>=1){
       let n=prompt("Введите степень",);
       if (n>=1) {
           alert(pow(x, n));
       }
       else {
           alert ("не правельная степень");
       }
    }
    else {
        alert ("Не правельное число");
    }
*/



/*
function ask(question,yes,no) {
    if (confirm (question)) yes()
    else no();
}
*/
/*
function showOk() {
    alert('Вы согласны');
}
function showCancel() {
    alert ('Вы отменили выполнение');
}
ask("Вы согласны",showOk,showCancel);

 */
/*
ask('Вы согласны', function () {alert('Вы согласились')},function () {alert('Вы отменили выполнение')});
*/


/* 11.Функции стрелки */

/*
function ask (question, yes, no) {
    if (confirm (question)) yes()
    else no()
}
ask ("Вы согласны?", () => alert ('Вы согласились'), () => alert("Вы отменили выполнение"));

*/

function plus(x,y) {
 return +(x + y);
}

function minus(x,y) {
    return +(x - y);
}

function multiply(x,y){
    return +(x * y);
}

function divide(x,y) {
    return +(x / y);
}

function square(x) {
    return +(x * x);
}

function elevate(x,y) {
    let res = x;
    for (let i = 1; i < y; i++ ){
         res = res * x;
    }
        return res;
}
