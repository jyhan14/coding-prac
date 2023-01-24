function solution(my_string) {
    let sum = 0;
    
    for(let i of my_string){
        let num = Number(i);
        if(Number.isInteger(num)){
            sum += num;
        }
    }
    
    return sum;
}
