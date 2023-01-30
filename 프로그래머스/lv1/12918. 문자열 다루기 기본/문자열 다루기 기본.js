
function solution(s) {
    if (!(s.length == 4 || s.length ==  6)){
        return false;
    } else {
        let arr = s.split('');

        for(let n of arr){
            if(isNaN(n)){
                return false;
            }
        }
    }
    return true;
}