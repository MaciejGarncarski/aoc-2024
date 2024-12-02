import { readFileSync } from "fs";

export const readInput = (file: string = 'input.txt') => {
    return readFileSync(file, {encoding: 'utf-8'});
}