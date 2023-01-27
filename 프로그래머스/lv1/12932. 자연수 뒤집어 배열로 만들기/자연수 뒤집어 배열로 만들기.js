function solution(n) {
    let answer = [];
    let stringArr = String(n).split("").reverse();
    
    for(let nArr of stringArr){
        answer.push(Number(nArr));
    }
  
    return answer;

}