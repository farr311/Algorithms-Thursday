
arr = [2, 6, 87, 1, 0, 52, 42, 1, 5, 7];

let count = 0;

/* 
2. Произвести замер количества итераций quick sort vs bubble sort 
(так же можно замерить merge sort, если есть такое желание).
 Для этого нужно создать счетчик и увеличвать его значение на 1 в каждой итерации. 
(подсказка: для алгоритмов mergeSort и quickSort счетчик нужно увеличивать в функциях, которые осуществляют сортировку, 
а не в функциях, которые выполняют деление массива)

3. Используя функцию Date.now(), посчитать производительность в миллисекундах для алгоритмов bubble sort и quick sort 
(опционально можно сделать проверку для merge sort). Для этого вам нужно будет написать код по следующему формату:


let start = Date.now()
// Вызов алгоритма
let finish = Date.now()
console.log(finish - start)
*/


/* let start = ... // Время в мс
quickSort(arr, 0, arr.length - 1);

let end = ... // Время в мс
console.log(end - start) */


testQuickSort([1000, 10000, 100000]);
console.log("==================")
testMergeSort([1000, 10000, 100000]);
console.log("==================")
//testBubble([1000, 10000, 100000]);





/* 
11164       10137       10555
145566      10137       165472
2007277     1984655     1929335
*/




function testBubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        bubbleSort(generateArray(arr[i]))
        console.log(`Bubble Sort, ${arr[i]}: ${count}`);
    }
}

function testQuickSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        quickSort(generateArray(arr[i]), 0, arr[i] - 1)
        console.log(`Quick Sort, ${arr[i]}: ${count}`);
    }
}

function testMergeSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        mergeSort(generateArray(arr[i]), 0, arr[i] - 1)
        console.log(`Merge Sort, ${arr[i]}: ${count}`);
    }
}


function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = findPivotIndex(arr, low, high);

        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

function findPivotIndex(arr, low, high) {
    let pivot = arr[high];
    let pivotIndex = low - 1;

    for (let i = low; i < high; i++) {        
        if (arr[i] <= pivot) {
            pivotIndex++;

            let tmp = arr[pivotIndex];
            arr[pivotIndex] = arr[i];
            arr[i] = tmp;
        }

        count++;
    }

    let tmp = arr[pivotIndex + 1];
    arr[pivotIndex + 1] = arr[high];
    arr[high] = tmp;

    return pivotIndex + 1;
}


function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            count++;

            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}



function mergeSort(arr, left, right) {
    if (left < right) {
        let middle = Math.floor((left + right) / 2);   

        mergeSort(arr, left, middle);        
        mergeSort(arr, middle + 1, right);    

        merge(arr, left, middle, right);
    }
}

function merge(arr, left, middle, right) {
    let size1 = middle - left + 1;  
    let size2 = right - middle;    

    let arrL = []; 
    let arrR = []; 

    for (let i = 0; i < size1; i++) {   
        arrL[i] = arr[left + i];
        count++;        
    }

    for (let i = 0; i < size2; i++) {   
        arrR[i] = arr[middle + 1 + i];  
        count++;
    }

    let i = 0;
    let j = 0;
    let k = left;  

    while (i < size1 && j < size2) { 
        count++;

        if (arrL[i] <= arrR[j]) {   
            arr[k] = arrL[i];       
            i++;                    
        } else {              
            arr[k] = arrR[j];       
            j++;                    
        }

        k++;                       
    }

    while (i < size1) {   
        count++;

        arr[k] = arrL[i];      
        i++;                  
        k++;                 
    }

    while (j < size2) {     
        count++;

        arr[k] = arrR[j];       
        j++;                 
        k++;                   
    }
}




function generateArray(n) {
    let a = [];

    for (let i = 0; i< n; i++) {
        a[i] = Math.random();
    }

    return a;
}