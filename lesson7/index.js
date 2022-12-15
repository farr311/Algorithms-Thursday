

/* 
Написать функцию, которая получает на вход число (целое положительное) и возвращает сумму всех чисел от 1 до n, где n -- переданное число
*/

/* console.log(sumInRange(3))
console.log(sumInRange(4))
console.log(sumInRange(5))
console.log(sumInRange(6)) */

// Используя функцию array.shift() напишите рекурсивную функцию, которая принимает массив и возвращает произведение всех его элементов

console.log(multiplyArray([1, 4], 0))
console.log(multiplyArray([1, 2, 3, 4, 5], 0))
console.log(multiplyArray([1, 2, 3, 4, 5, 6], 0)) 

/* console.log(multiplyArray([1, 4]))
console.log(multiplyArray([1, 2, 3, 4, 5])) */
//console.log(multiplyArray([1, 2, 3, 4, 5, 6]))

console.log(checkElements([1, 2, 1, 2, 3, 4, 1], 5)) // -> true
console.log(checkElements([1, 2, 1, 5, 3, 4, 1], 5)) // -> false
console.log(checkElements([1, 6, 1, 5, 3, 4, 1], 5)) // -> false


function checkElements(arr, n) {
    // Напишите рекурсивную функцию, которая будет проверять, что все элементы в массиве < n
}


function sumInRange(n) {
    if (n === 1) {
        return 1;
    }

    return n + sumInRange(n - 1);
}

/* function multiplyArray(arr) {
    console.log(arr)
    if (arr.length === 0) {
        return 1;
    }
    return arr.shift() * multiplyArray(arr);
}  */

function multiplyArray(arr, n) {
    if (arr.length === n) {
        return 1;
    }
    return arr[n] * multiplyArray(arr, ++n);
} 