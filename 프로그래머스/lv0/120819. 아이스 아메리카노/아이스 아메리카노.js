function solution(money) {
    let count = 0;
    let answer = [];

    for(let i =0; ;i++){
        if(money >= 5500){
            money = money - 5500;
            count += 1;
            
        }else if(money < 5500){
            answer.push(count, money);
            break;
        }
    }
    return answer;

}