/* 1. Даны два целых числа x и n, напишите функцию для вычисления x^n
	 решение 1 - рекурсивно O(n)
	 решение 2 - улучшить решение 1 до O(log n) */


console.log(powerRecImproved(2, 1));
console.log(powerRecImproved(2, 3));
console.log(powerRecImproved(2, 6));
console.log(powerRecImproved(2, 10));
console.log(powerRecImproved(10, 1));
console.log(powerRecImproved(10, 2));
console.log(powerRecImproved(10, 5));
console.log(powerRecImproved(10, 10));


function power(x, n) {
    if (n == 0) {
        return 1;
    }

    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

function powerRec(x, n) {
    if (n == 0) {
        return 1;
    }

    return x * powerRec(x, n - 1);
}

function powerRecImproved(x, n) {
    if (n == 0) {
        return 1;
    }

    let half = powerRecImproved(x, Math.floor(n / 2));

    if (n % 2 == 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}




