function solution(my_string, n) {
  let arr = my_string.split("");
  let answer = "";
  for (let i = 0; i < n; i++) {
    answer += arr[i];
  }
  return answer;
}