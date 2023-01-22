function solution(num_list) {
    var answer = [];
    let evenCnt = 0;
    let oddCnt = 0;
    
    num_list.forEach(e => {e % 2 == 0 && evenCnt++});
    num_list.forEach(e => {e % 2 == 1 && oddCnt++});
    answer.push(evenCnt,oddCnt);
    
    return answer;
}