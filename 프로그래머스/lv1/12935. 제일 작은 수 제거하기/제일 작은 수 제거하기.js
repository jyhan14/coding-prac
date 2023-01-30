function solution(arr1) {
    arr1.splice(arr1.indexOf(Math.min(...arr1)), 1);

    return arr1.length < 1 ? [-1] : arr1;
}