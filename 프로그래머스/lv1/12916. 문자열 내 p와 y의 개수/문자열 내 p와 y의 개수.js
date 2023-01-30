function solution(s){
    let lower = s.toLowerCase();
    let countP = lower.split('p').length;
    let countY = lower.split('y').length;

    return countP == countY;
}