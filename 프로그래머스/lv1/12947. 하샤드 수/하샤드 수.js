function solution(x) {
    let harshad= 0;
    let temp_num = x;

    while (temp_num > 0) {
        harshad += temp_num % 10;

        temp_num = Math.floor(temp_num / 10);
    }

    if (x % harshad == 0) {
        return true;
    } else {
        return false;
    }
}