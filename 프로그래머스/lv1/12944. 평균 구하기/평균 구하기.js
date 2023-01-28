function solution(arr) {
    let sum = 0
    for(let avg of arr){
        sum += avg;
    }
    return sum / arr.length;
}