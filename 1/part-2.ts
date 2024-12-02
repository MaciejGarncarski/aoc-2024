import {rawInput} from "./input";

const columns = rawInput.split("\n").map((el) => el.split('   '));

const colA: Array<number> = []
const colB: Array<number> = []

columns.forEach((col) => {
    colA.push(parseInt(col[0]))
    colB.push(parseInt(col[1]))
})

const appearingNumbers = colB.reduce((acc, el): Record<string, number> => {
    if(!colA.includes(el)){
        return acc;
    }
    acc[el] = (acc[el] + 1) || 1
    return acc;
}, {});

const result = Object.entries(appearingNumbers).reduce((acc, [key, value]) => {
    return acc + (parseInt(key) * value);
}, 0)

