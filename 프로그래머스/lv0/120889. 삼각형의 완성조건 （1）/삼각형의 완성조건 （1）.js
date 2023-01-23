function solution(sides) {
    
    let sort = sides.sort((a, b) => b - a);
    let sum = sort[1] + sort[2];

    if(sort[0] < sum){
        return 1;
    }else{
        return 2;
    }

}