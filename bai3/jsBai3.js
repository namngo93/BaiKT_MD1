function sumOfListFibonacy(x) {
    let arr = [0,1]
    let a = 0;
    let b = 1;
    let temp;
    let sum = 0;
    for (let i = 2;; i++) {
    if (a+b > x) break;
    arr.push(a+b);
    temp = a;
    a = b;
    b = temp+b;
}
    for (let i = 0;i<arr.length; i++){
    sum+= arr[i]
}
    return sum;
}
    console.log(sumOfListFibonacy(20))
