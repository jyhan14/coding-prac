function solution(my_string, letter) {
    let regexAll = new RegExp(letter, "g");

    return my_string.replace(regexAll,"");
    
}