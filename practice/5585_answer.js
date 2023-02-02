function solution(pay) {
    let count = 0;

    let rec = 1000 - pay; // 1000 - 380 = 620
    let change_list = [500, 100, 50, 10, 5, 1];
    if (rec == 0) {
        return 0;
    }

    for (change of change_list) {
        count += parseInt(rec / change);
        rec %= change;
    }

    return count;
}

console.log(solution(380));
