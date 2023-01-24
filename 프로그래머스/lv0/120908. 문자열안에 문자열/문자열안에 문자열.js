function solution(str1, str2) {
    let s = str1.split(str2);

    if(s.length > 1){
        return 1;
    }else{
        return 2;
    }
}