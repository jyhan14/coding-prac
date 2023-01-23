function solution(my_string, n) {
    let split = my_string.split("");
    let answer = split.map(e => e.repeat(n)).join('');
    
    return answer;
}