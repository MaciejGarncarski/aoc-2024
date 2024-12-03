import {readInput} from "../utils/readInput.js";

const input = readInput();

const mulRegExp: RegExp = new RegExp('do\\(\\)|don\'t\\(\\)|\\bmul\\([1-9][0-9]{0,2},[1-9][0-9]{0,2}\\)', 'g');

const matches = input.match(mulRegExp);

type ReduceResult = {valid: boolean, muls: Array<number>};

const mappedMatches = Array.from(matches || []).reduce((acc: ReduceResult, el) => {
    if(el === "do()"){
        return {...acc, valid: true};
    }

    if(el === "don't()"){
        return {...acc, valid: false};
    }

    const numMuls = el
        .replaceAll('mul(', '')
        .replaceAll(',', ' ')
        .replaceAll(')', '')
        .split(' ')
        .map((str) => parseInt(str, 10))
        .reduce((acc, el) => acc * el, 1);

    const muls = acc.valid ? [...acc.muls, numMuls] : acc.muls

    return {...acc, muls};
}, {
    muls: [],
    valid: true,
})

const result = mappedMatches.muls.reduce((acc, el) => acc + el, 0);
console.log(result)
