function solution(hp) {
    let count = 0;
    while(true){
        if(hp >= 5){
            hp = hp - 5;
            count++;
        }else if(hp < 5 && hp >= 3){
            hp = hp - 3;
            count++;
        }else if(hp == 2 || hp == 1){
            hp = hp - 1;
            count++;
        }else if(hp == 0){
            break;
        }

    }
    return count;
}