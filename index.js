function solution(inputString) {
    // sorting recording to alphabetical order
    let sortedStrLetters = inputString.split('').sort().join('');
    let lettersCountArr = sortedStrLetters.replace(/([a-z])\1*/g, (letter) => letter.length + ',').split(',').slice(0, -1);

    return lettersCountArr.map(Number).every((el, i, arr) => (inputString.indexOf(String.fromCharCode(i + 'a'.charCodeAt(0))) >= 0 && (i == 0 || arr[i] <= arr[i - 1])))
}
