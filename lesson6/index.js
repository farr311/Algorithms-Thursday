
//Как сделать бесконечный цикл?

//let start = ... // дописать
// for (let i = start; i <= start + 1; i++) /* Модифицировать условие нельзя! */ {
    // для решения добавить одну строку здесь
// }

let start = Number.MAX_VALUE - 1;

// для решения добавить одну строку здесь
 for (let i = start; i <= start + 1; i++) {
    console.log("TEST")
} 

// start = 0
// start + 1 = 1
// start + 2 = 2
// (i = 0; i <= 1; 1)
// (i = 1; i <= 1; 2)
// i = 2; i <= 1; ...)

// start = m - 1
// start + 1 = m - 1 + 1 (m)
// start + 2 = m -1 + 2 (-x)
// (i = m - 1; i <= m; m)
// (i = m; i <= m; -x)
// (i = -x; i <= m; -x)


arr = [2, 6, 87, 1, 0, 52, 42, 1, 5, 7];

let count = 0;



/* testQuickSort([1000, 10000, 100000]);
console.log("==================")
testMergeSort([1000, 10000, 100000]);
console.log("==================")
testBubble([1000, 10000, 100000]); */





/* 
11164       10137       10555
145566      10137       165472
2007277     1984655     1929335
*/




function testBubble(arr) {
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        let start = Date.now();
        bubbleSort(generateArray(arr[i]))
        let time = Date.now() - start;
        console.log(`Bubble Sort, ${arr[i]}: ${count} | time: ${time}`);
    }
}

function testQuickSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        let start = Date.now();
        quickSort(generateArray(arr[i]), 0, arr[i] - 1)
        let time = Date.now() - start;
        console.log(`Quick Sort, ${arr[i]}: ${count} | time: ${time}`);
    }
}

function testMergeSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        let start = Date.now();
        mergeSort(generateArray(arr[i]), 0, arr[i] - 1)
        let time = Date.now() - start;
        console.log(`Merge Sort, ${arr[i]}: ${count} | time: ${time}`);
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