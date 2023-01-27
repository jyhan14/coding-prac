function solution(n) {
    let x = n ** (1/2);
    if(x % 1 == 0 ){
        return (x+1)**2;
    }else{
        return -1;
    }
}