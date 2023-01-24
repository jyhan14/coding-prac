function solution(n) {
    let x = n ** (1/2);
    if(x % 1 == 0 ){
        return 1;
    }else{
        return 2;
    }
}