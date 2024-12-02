import { readInput } from "../utils/readInput";

const input = readInput();
const reports = input
  .split("\n")
  .map((line) => line.split(" ").map((el) => parseInt(el, 10)));

const isValidReport = (levels: Array<number>) => {
  for (let i = 0; i < levels.length - 1; i++) {
    const a = levels[i];
    const b = levels[i + 1];
    const c = levels[i + 2] ?? null;

    if (a === b) {
      return false;
    }
    if (b > a) {
      if (b - a > 3 || (c !== null && c < b)) {
        return false;
      }
    } else {
      if (a - b > 3 || (c !== null && c > b)) {
        return false;
      }
    }
  }
  return true;
};

const isSafeDamper = (levels: Array<number>) => {
  if (isValidReport(levels)) {
    return true;
  }

  for (let i = 0; i < levels.length; i++) {
    const modifiedLevels = [...levels.slice(0, i), ...levels.slice(i + 1)];
    if (isValidReport(modifiedLevels)) {
      return true;
    }
  }

  return false;
};

const result = reports.filter(isSafeDamper).length;
console.log(result);
