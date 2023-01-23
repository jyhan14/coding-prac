function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    x = numer1 * denom2 + numer2 * denom1;
    y = denom1 * denom2;
    max_int = Math.max(x,y);
    for (i = max_int; i >= 1; i--) {
        if (x%i == 0 && y%i == 0) {
            answer.push(x/i, y/i);
            break;
        }
    }
    return answer;
}
