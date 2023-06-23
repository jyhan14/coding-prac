function solution(my_string) {
    const vowels = /[aeiou]+/g;
    return my_string.replace(vowels, "");
}