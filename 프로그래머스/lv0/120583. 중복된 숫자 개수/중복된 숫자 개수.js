function solution(array, n) {
    let count = 0;
    for(let arr of array){
        if(arr == n){
            count++;
        }
    }
    return count;
}