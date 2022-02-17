"use strict";
let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['1', '2', '3', '4', '5', '6', '7', '8', '9',' 0'];
const action =['-', '+', '*', '/'];


const out = document.querySelector('.calc_result');



document.querySelector('.clearAll').addEventListener('click',  clearAll => {   /*Нажатие кнопки АС котороя очищает поле ввода*/
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
});

document.querySelector('.calc').addEventListener('click', event => { /*Поведение кнопок*/

   if (!event.target.classList.contains("calc_btn")) {                                   /* Если клик не на кнопку то ничего не происходит*/
       a = '';
       b = '';
       sign = '';
       finish = false;
       out.textContent = 0;
       return;
   };
   if (event.target.classList.contains("clearAll")) return;                                    /* Нажатие кнопки АС не вносит символы в переменную*/
   out.textContent = '';
   let key = event.target.textContent;

   if (digit.includes(key)) {                                                            /* Если переменные 'b' и 'sign' пустые то заполняется переменная 'a'*/
       if (b === '' && sign === '') {

       a += key;

       out.textContent = a;
       }
       else if (a !== '' && b !== '' && finish) {                                        /* Если переменные 'a' и 'b' не пустые и нажато '='  найденое значение присваивается 'a' */
           b = key;
           finish = false;
           out.textContent = b;

       }
       else {                                                                            /* В остальных случаях наполняем 'b' */
           b += key;
           out.textContent = b;
       }

           return;
   }

   if (action.includes(key)){

       sign = key;

       out.textContent = sign;
       return;
   }
   if (key === '=') {                                                                   /* Равно и вычисления*/
       if (b === '') b = a;                                                             /* Если 'b' равно пустой строке то 'b' присвоить значение 'a' */
       switch (sign) {
           case "+":
               a = (+a) + (+b);
               break;
           case "-":
               a = a - b;
               break;
           case "*":

               a = a * b;

               break;
           case "/":
               if (b === '0') {                                                          /* 0 x 0 */
                   out.textContent = "Мы все умрем";
                   a = '';
                   b = '';
                   sign = '';
                   return;
               }
               a = a / b;
               break;
       }

       finish = true;
       out.textContent = a;

   }

});

