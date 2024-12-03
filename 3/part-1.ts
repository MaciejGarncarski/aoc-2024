import {readInput} from "../utils/readInput.js";

const input = readInput();

const mulRegExp: RegExp = new RegExp('\\bmul\\([1-9][0-9]{0,2},[1-9][0-9]{0,2}\\)', 'g');
const matches = input.match(mulRegExp);
const mappedMatches = Array.from(matches || []).map((match) => {
    const transformedMatches = match.replaceAll('mul(', '').replaceAll(',', ' ').replaceAll(')', '');
    return transformedMatches.split(' ').map((str) => parseInt(str, 10))
});
const result = mappedMatches.reduce((acc, el) => {
    return acc + (el[0] * el[1]);
}, 0)
console.log(result)

