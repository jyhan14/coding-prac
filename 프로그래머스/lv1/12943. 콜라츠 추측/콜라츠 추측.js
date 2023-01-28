function solution(num) {
    let count = 0;

    if(num == 1){
        return 0;
    }
    
    while(num >= 1){

        if(num % 2 == 0){
            num = num/2;

            count++;
        }else{
            num = (num * 3) + 1
            count++;
        }

        if(num == 1){
            return count;
        }else if(count == 500){
            return -1;
        }

    }

}