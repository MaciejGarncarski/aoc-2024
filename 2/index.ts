import { input } from './input';

const reports = input.split('\n');
const reportsWithLevels = reports.map((report) => report.split(' ').map((level) => parseInt(level)))
const filteredLevels = reportsWithLevels.filter((levels) => {
    try{
        levels.forEach(((level, idx) => {
            const a = levels[idx];
            const b = levels[idx + 1];

            if (a === b) {
                throw new Error("Not increasing nor decreasing")
            }

            if(!b){
                return;
            }

            // is decreasing
            if(a > b){
                if(a - b > 3) {
                    throw new Error("Unsafe decrease");
                }

                const c = levels[idx + 2];
                if(c > b){
                    throw new Error("Increase after decrease");
                }

                return;
            }

            // is increasing
            if(b > a){
                if(b - a > 3){
                    throw new Error("Unsafe increase");
                }

                const c = levels[idx + 2];
                if(c < b) {
                    throw new Error("Decrease after increase");
                }

                return;
            }
        }))
        return true;
    } catch{
        return false;
    }
})

const result = filteredLevels.length;
// should be 341