function solution(array, height) {
    let count = 0;
    for(let arr of array){
        if(arr > height){
            count++;
        }
    }
    return count;
}