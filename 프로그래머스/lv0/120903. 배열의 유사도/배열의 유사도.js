function solution(s1, s2) {
    let count = 0;

  for(let arr1 of s1){
        for(let arr2 of s2){
            if(arr1 == arr2){
                count++;
            }
        }
    }

    return count;
}