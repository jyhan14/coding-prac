function solution(s1, s2) {
    let count = 0;

    let max_length = Math.max(s1.length, s2.length);

    for(let i = 0; i < max_length; i++){
        for(let j = 0; j < max_length; j++){
            if(s1[i] == s2[j]){
                count++;
            }
        }
    }

    return count;
}