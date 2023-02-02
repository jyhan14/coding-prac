// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 소수의 최대값과 소수가 아닌 수의 최소값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

// 예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

// 내가 생각한 로직 -> 소수 & 소수가 아닌애들 찾기, 소수 최대값 /소수가 아닌애들 최소값 찾기, 문자열로 더하기
function solution(s) {
    let arr = s.split(" ");
    let primeN = [];
	let notPrime = [];

	//소수와 소수가 아닌애들 찾기
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j == 0 || arr[i] < 2) {
                notPrime.push(arr[i]);	//소수가 아닌애들
				// console.log(notPrime);
            }else{
				primeN.push(arr[i]);	//소수인 애들
				// console.log(primeN);
			}
        }
    }

	//위에꺼가 안되는 이유: 만약 arr[i]가 99라면 안쪽 포문을 돌때
	// 99 % 2 == 0 이 아니니까 바로 else문으로 들어가서 primeN에 들어가버림.

	let max = Math.max(...primeN);
	let min = Math.min(...notPrime);

	return `${min} ${max}`;
}

console.log(solution("97 75 88 99 95 92 73"));
