// 1. Создать функцию solve, которая принимает 4 аргумента: 
//      int n (количество дисков в начале исполнения) 
//      int fromRod (стержень, с которого снимается диск)
//      int toRod (стержешь, на который должен быть положен диск в итоге)
//      int additionalRod (стержень, который используется как вспомогательный)
// 2. В функции выполнить проверку n === 1, если она выполняется, вывести, с какого стержня переносится 
//    диск и на какой и сделать return
// 3. Вызвать solve, поменяв местами toRod и additionalRod и уменьшив n на 1
// 4. Вывести номер диска, который мы переносим (n) и стержени с которого мы переносим, 
//    на который мы переносим и тот, который используется, как дополнительный
// 5. Вызвать solve, поменяв местами fromRod и additionalRod и уменьшив n на 1

// 6. Вызвать sovle с аргументами (3, 1, 3, 2)


//solve(4, 1, 3, 2);


function solve(n, fR, tR, aR) {
    if (n === 1) {
        console.log(`Move 1 from rod ${fR} to rod ${tR}`);
        return;
    }

    solve(n - 1, fR, aR, tR);   // (2, 1, 2, 3) (1, 1, 3, 2)    ||      ()
    console.log(`Move ${n} from rod ${fR} to rod ${tR} with rod ${aR}`)
    solve(n - 1, aR, tR, fR);   // (1, 3, 2, 1)
}



// Get max element in array
// найти максимальный элемент в заданном массиве. 
// Ввод: {40, 250, 80, 88, 240, 12, 148}
// Вывод: 
// Mинимальное число в данном массиве: 12
// Максимальное число в данном массиве: 250


let arr = [40, 250, 80, 88, 240, 12, 148];

/* console.log(findMinDefault(arr));
console.log(findMaxDefault(arr)); */
/* console.log(findMin(arr, 0));
console.log(findMax(arr, 0)); */


function findMin(arr, index) {
    if (arr.length > index) {
        let min = findMin(arr, index + 1);

        if (arr[index] < min) {
            return arr[index];
        }
        return min;
    }

    return arr[index - 1];
}

function findMax(arr, index) {
    if (arr.length > index) {
        let max = findMax(arr, index + 1);

        if (arr[index] > max) {
            return arr[index];
        }
        return max;
    }

    return arr[index - 1];
}


function findMinDefault(arr) {
    var min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

function findMaxDefault(arr) {
    var max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}





function a(b) {
    b();
}

function c() {
    console.log("test");
}

a(c);
a(function() { console.log("HEllo worlld"); });



