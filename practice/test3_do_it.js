// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 소수의 최대값과 소수가 아닌 수의 최소값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

// 예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

// 내가 생각한 로직 -> 소수 & 소수가 아닌애들 찾기, 소수 최대값 /소수가 아닌애들 최소값 찾기, 문자열로 더하기

function solution(s) {
    let arr = s.split(" ");
    let primes = [];
    let no_primes = [];

    for (let num of arr) {
        let isPrime = true;

        if (num === 1) isPrime = false;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            // 나누어 떨어지는 경우가 한 번이라도 있으면 N은 소수가 아니다.
            if (num % i === 0) {
                isPrime = false;
            }
        }

        // console.log(num, isPrime);

        if(isPrime == true){
            primes.push(num);
        }else{
            no_primes.push(num);
        }
    }

    let max = Math.max(...primes);
    let min = Math.min(...no_primes);

    return `${min} ${max}`
    

}

let s = "97 75 88 99 95 92 73";

console.log(solution(s));
