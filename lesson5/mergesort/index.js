

arr = [2, 6, 87, 1, 0, 52, 42, 1, 5, 7];

mergeSort(arr, 0, arr.length - 1);

console.log(arr);

function mergeSort(arr, left, right) {
    if (left < right) {
        let middle = Math.floor((left + right) / 2);    // floor((0 + 9) / 2) = floor(9/2) = floor(4.5) = 4

        mergeSort(arr, left, middle);          // Левая половина
        mergeSort(arr, middle + 1, right);     // Правая половина

        merge(arr, left, middle, right);
    }
}

// Рассматотреть ситуацию с сортировкой двух массивов между собой: [2 6] [0 1 87]
function merge(arr, left, middle, right) {
    // l = 2; r = 4; m = 3
    let size1 = middle - left + 1;  // size1 = 3 - 2 + 1 = 2
    let size2 = right - middle;     // size2 = 4 - 3 = 1

    let arrL = [];  // 87
    let arrR = [];  // 0, 1

    for (let i = 0; i < size1; i++) {   // l = 0, size1 = 1 
        arrL[i] = arr[left + i];        // [0 + 1]
    }

    for (let i = 0; i < size2; i++) {   // middle = 0, size2 = 1
        arrR[i] = arr[middle + 1 + i];  // []
    }

    let i = 0;
    let j = 0;
    let k = left;   // 2

    // Сортирует элементы и записывает их в массив arr
    while (i < size1 && j < size2) { // 0 < 2 && 0 < 1
        if (arrL[i] <= arrR[j]) {   // 1 <= 0
            arr[k] = arrL[i];       
            i++;                    
        } else {              
            arr[k] = arrR[j];       //arr[2] = 0
            j++;                    // j = 1
        }

        k++;                        // k = 3
    }

    // Дописывает оставшиеся элементы из arrL в массив arr
    while (i < size1) {         // 0 < 2 True                   1 < 2 True                     2 < 2 False
        arr[k] = arrL[i];       // arr[3] = arrL[0] = 1         arr[4] = arrL[1] = 87
        i++;                    // i = 1                        i = 2
        k++;                    // k = 4                        k = 5
    }

    // Дописывает оставшиеся элементы из arrR в массив arr
    while (j < size2) {         // 0 < 1 True
        arr[k] = arrR[j];       // arr[1] = arrR[0] = 6
        j++;                    // j = 1
        k++;                    // k = 2
    }
}


