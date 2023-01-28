function solution(numbers) {
    let temp =[];
    for(let i =0; i < numbers.length -1; i++){
        for(let j = i + 1; j <numbers.length; j++){
            if([i] != [j]){
                temp.push(numbers[i] + numbers[j])
            }
        }
    }
    let answer = temp.filter((e,i) => {
        return temp.indexOf(e) === i;
    });
    
    return answer.sort((a,b) => a - b);
}