import {rawInput} from "./input";

const columns = rawInput.split("\n").map((el) => el.split('   '));

const colA = []
const colB = []

columns.forEach((col) => {
    colA.push(parseInt(col[0]))
    colB.push(parseInt(col[1]))
})

const appearingNumbers = colB.reduce((acc, el) => {
    acc[el] =

    return acc;
}, {})

console.log(sum)
// should be 3574690