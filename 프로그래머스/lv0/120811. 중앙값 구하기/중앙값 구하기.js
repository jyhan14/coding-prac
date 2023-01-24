
function solution(array) {
    let sort = array.sort((a, b) => a - b);

    let i = Math.floor(sort.length/2);

    return sort[i];
}