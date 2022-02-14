"use strict";



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
