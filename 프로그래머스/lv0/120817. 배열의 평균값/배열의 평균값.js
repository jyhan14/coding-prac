function solution(numbers) {
    return numbers.reduce((sum, current) => sum + current) / numbers.length;
}