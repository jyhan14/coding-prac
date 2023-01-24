function solution(n) {
    let str = String(n).split("");
    
    let sum = 0;
    for(let s of str){
        let n = Number(s);
        sum += n;
    }
    
    return sum;
}