function solution(n) {
    let answer = [];
    let stringArr = String(n).split("").sort((a,b) => (b - a));
    
    console.log(stringArr);
    for(let nArr of stringArr){
        answer.push(Number(nArr));
    }

    return Number(answer.join(''));


}