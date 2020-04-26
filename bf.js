function bf(strA, strB) {
    console.log(strA,strB);
    let i = 0, j = 0;
    let lenA = strA.length, lenB = strB.length;

    for (i = 0; i <= lenA-lenB; i ++) {
        for (j = 0; j < lenB; j ++) {
            if (strA[i + j] != strB[j]) {
                break;
            }
        }
        if (j == lenB) {
            return i;
        }
    }
    return -1;
}

let ans = bf('123456789', '345');
console.log(ans);