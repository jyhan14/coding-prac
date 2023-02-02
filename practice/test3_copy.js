function solution(s) {
    let arr = s.split(" "); //공백기준으로 배열 만들어줌
    let primes = [];        //소수 넣을 배열
    let no_primes = [];     //소수 아닌 수 넣을 배열

    for (num of arr) {      //배열의 숫자들을 나열해주기(cl찍어보기)
        num = parseInt(num);//숫자가 정수가 아닐 수도 있으니 정수로 바꿔주자
        let isPrime = true;     //소수인지 판별할 변수 초기화

        if (num == 1) isPrime = false;  //일단 1은 무조건 소수가 아님! false라고 해주자.
        for (j = 2; j <= Math.sqrt(num); j++) { // 2부터 num 제곱근까지의 수로 num을 나눴을 때
            if (num % j == 0) {  // 나누어 떨어지는 경우가 한 번이라도 있으면 N은 소수가 아니다.
                isPrime = false;
            }
        }

        // console.log(num, isPrime);   // 소수 잘 판별 됐는지 확인해주기
        if (isPrime) {  //isPrime == true랑 같은 뜻, 이렇게 쓸 수도 있다!
            primes.push(num);   //primes 배열에 num을 넣어주자
        } else {
            no_primes.push(num);//아닐때 no_primes에 num을 넣어주자
        }
    }                                                                                                                              
    let max = Math.max(...primes);  //max 변수에 소수 중 가장 큰 수를 넣어주기
    let min = Math.min(...no_primes);// min 변수에 소수 중 가장 작은 수를 넣어주기

    return `${min} ${max}`; //템플릿 리터럴이 더 가독성 좋아보여서 이렇게 반환!
    // return min + " " + max;
}
console.log(solution("97 75 88 99 95 92 73"));
