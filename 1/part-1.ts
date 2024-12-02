import {rawInput} from "./input";

const columns = rawInput.split("\n").map((el) => el.split('   '));

const colA = []
const colB = []

columns.forEach((col) => {
    colA.push(parseInt(col[0]))
    colB.push(parseInt(col[1]))
})

const sortedColA = [...colA].sort();
const sortedColB = [...colB].sort();

const sum = sortedColA.reduce((acc, cur, idx) => {
    const a = sortedColA[idx];
    const b = sortedColB[idx];

    if(a > b){
        return acc + (a - b);
    }

    return acc + (b - a);
}, 0);

console.log(sum)